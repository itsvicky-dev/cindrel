import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { CreateContactDto } from './contact.dto';
import { Contact, ContactDocument } from './contact.schema';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private transporter: nodemailer.Transporter;

  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
    private readonly config: ConfigService,
  ) {
    this.transporter = nodemailer.createTransport({
      host:   config.get('SMTP_HOST', 'smtp.gmail.com'),
      port:   config.get<number>('SMTP_PORT', 587),
      secure: false,
      auth: {
        user: config.get('SMTP_USER'),
        pass: config.get('SMTP_PASS'),
      },
    });
  }

  async create(dto: CreateContactDto) {
    // Save to MongoDB
    let saved: ContactDocument;
    try {
      saved = await this.contactModel.create(dto);
      this.logger.log(`Saved lead [${saved._id}] from ${dto.email} — ${dto.company}`);
    } catch (err) {
      this.logger.error(`Failed to save contact to DB: ${err.message}`, err.stack);
      throw err;
    }

    const toEmail = this.config.get('NOTIFY_EMAIL', 'vigneshwari.s@wele.in');

    const fromName = this.config.get('SMTP_FROM_NAME', 'Cindrel');
    const fromEmail = this.config.get('SMTP_FROM_EMAIL', this.config.get('SMTP_USER'));

    // Notification email to team
    try {
      await this.transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to:   toEmail,
        subject: `🔥 New Automation Lead: ${dto.company} — ${dto.goal ?? 'General'}`,
        html: `
          <h2 style="font-family:sans-serif">New Contact Form Submission</h2>
          <table style="font-family:sans-serif;border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border:1px solid #eee"><b>Name</b></td><td style="padding:8px;border:1px solid #eee">${dto.name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee"><b>Company</b></td><td style="padding:8px;border:1px solid #eee">${dto.company}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee"><b>Email</b></td><td style="padding:8px;border:1px solid #eee">${dto.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee"><b>Phone</b></td><td style="padding:8px;border:1px solid #eee">${dto.phone ?? '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee"><b>Company Size</b></td><td style="padding:8px;border:1px solid #eee">${dto.companySize ?? '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee"><b>Goal</b></td><td style="padding:8px;border:1px solid #eee">${dto.goal ?? '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee"><b>Budget</b></td><td style="padding:8px;border:1px solid #eee">${dto.budget ?? '—'}</td></tr>
          </table>
        `,
      });
      this.logger.log(`Notification email sent to ${toEmail}`);
    } catch (err) {
      this.logger.warn(`Notification email failed: ${err.message}`);
    }

    // Auto-reply removed as per request to only send to team email

    return { success: true, message: "Your message has been received. We'll be in touch within 24 hours." };
  }
}
