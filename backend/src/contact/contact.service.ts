import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { CreateContactDto } from './contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private transporter: nodemailer.Transporter;

  constructor(private readonly config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host:   config.get('SMTP_HOST',    'smtp.gmail.com'),
      port:   config.get<number>('SMTP_PORT', 587),
      secure: false,
      auth: {
        user: config.get('SMTP_USER'),
        pass: config.get('SMTP_PASS'),
      },
    });
  }

  async create(dto: CreateContactDto) {
    this.logger.log(`New lead from ${dto.email} — ${dto.company}`);

    // Send notification email to the Cindrals team
    const toEmail = this.config.get('NOTIFY_EMAIL', 'hello@cindrals.com');

    try {
      await this.transporter.sendMail({
        from: `"Cindrals Website" <${this.config.get('SMTP_USER')}>`,
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
            <tr><td style="padding:8px;border:1px solid #eee"><b>Timeline</b></td><td style="padding:8px;border:1px solid #eee">${dto.timeline ?? '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee"><b>Needs</b></td><td style="padding:8px;border:1px solid #eee">${dto.needs}</td></tr>
          </table>
        `,
      });
      this.logger.log(`Notification email sent to ${toEmail}`);
    } catch (err) {
      // Don't throw — still return success to client even if email fails
      this.logger.warn(`Email send failed: ${err.message}`);
    }

    // Send auto-reply to submitter
    try {
      await this.transporter.sendMail({
        from: `"Cindrals" <${this.config.get('SMTP_USER')}>`,
        to:   dto.email,
        subject: `We received your message, ${dto.name.split(' ')[0]}! 🚀`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#4f6ef7">Thanks for reaching out, ${dto.name.split(' ')[0]}!</h2>
            <p>We've received your automation inquiry and a senior engineer will be in touch within <strong>24 hours</strong> to schedule your free strategy session.</p>
            <p style="color:#666">In the meantime, feel free to check out our case studies at <a href="https://cindrals.com/cases" style="color:#4f6ef7">cindrals.com/cases</a>.</p>
            <p>— The Cindrals Team</p>
            <hr style="border:none;border-top:1px solid #eee;margin:24px 0">
            <p style="font-size:12px;color:#999">Cindrals · Chennai, India · hello@cindrals.com</p>
          </div>
        `,
      });
    } catch (err) {
      this.logger.warn(`Auto-reply failed: ${err.message}`);
    }

    return { success: true, message: 'Your message has been received. We\'ll be in touch within 24 hours.' };
  }
}
