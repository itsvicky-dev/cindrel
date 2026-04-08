// ─── PRIVACY POLICY ──────────────────────────────────────────────────────────
import { Reveal, PageHero } from '@/components/ui'

export function PrivacyPage() {
  return (
    <>
      <PageHero 
        badge="Legal"
        title="Privacy Policy"
        sub="At Cindrel, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner."
      />

      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="max-w-none">
              <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mb-8 italic">
                Effective Date: April 8, 2026
              </p>
              
              <div className="space-y-10 text-lt-text">
                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">Introduction</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, engage with our services, or communicate with us. By accessing or using our website and services, you agree to the terms of this Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">1. Information We Collect</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mb-4">
                    We may collect different types of information depending on how you interact with our website and services.
                  </p>
                  <div className="space-y-4 ml-0 sm:ml-4">
                    <h3 className="font-bold text-[17px]">1.1 Personal Information</h3>
                    <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                      When you fill out forms, contact us, or engage with our services, we may collect personal details such as your name, email address, phone number, company name, and any other information you voluntarily provide.
                    </p>
                    <h3 className="font-bold text-[17px]">1.2 Usage and Technical Data</h3>
                    <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                      We automatically collect certain technical information when you visit our website. This may include your IP address, browser type, device information, operating system, pages visited, time spent on pages, and referring URLs. This data helps us understand how users interact with our platform.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">2. How We Use Your Information</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    The information we collect is used to provide, improve, and personalize our services. Specifically, we use your data to respond to inquiries, communicate with you regarding your requests, and deliver relevant information about our services.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mt-4">
                    We may also use your data to analyze user behavior, improve website performance, enhance user experience, and ensure the security of our platform. In some cases, we may use your contact information to share updates, insights, or relevant business communication, which you can opt out of at any time.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">3. Sharing and Disclosure of Information</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Cindrel does not sell, rent, or trade your personal information to third parties. We only share your data in limited situations where it is necessary to operate our business or comply with legal obligations.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mt-4">
                    We may share your information with trusted third-party service providers who assist us in areas such as hosting, analytics, communication tools, and infrastructure. These providers are required to maintain the confidentiality and security of your data.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mt-4">
                    We may also disclose your information if required by law, regulation, or legal process, or to protect our rights, safety, and property.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">4. Data Security</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, misuse, alteration, or disclosure. These measures include secure servers, encryption practices, and restricted access controls.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mt-4">
                    However, it is important to note that no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">5. Cookies and Tracking Technologies</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Our website uses cookies and similar tracking technologies to enhance user experience, analyze traffic, and understand user behavior. Cookies help us remember your preferences and improve the overall functionality of our website.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mt-4">
                    For more detailed information on how cookies are used, please refer to our Cookie Policy.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">6. Your Rights and Choices</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    You have the right to access, update, or request deletion of your personal data. You may also choose to opt out of receiving communications from us at any time.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mt-4">
                    If you wish to exercise any of these rights, you can contact us using the details provided below. We will respond to your request within a reasonable timeframe.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">7. Third-Party Links</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Our website may contain links to third-party websites or services. These external websites are not operated by Cindrel, and we are not responsible for their privacy practices. We recommend reviewing their privacy policies before sharing any personal information.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">8. Changes to This Privacy Policy</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. Any updates will be posted on this page with the revised effective date.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">9. Contact Information</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    If you have any questions, concerns, or requests regarding this Privacy Policy, you can contact us at:
                  </p>
                  <div className="mt-4 text-lt-muted">
                    <p className="flex items-center gap-2">📧 <a href="mailto:contact@cindrel.com" className="hover:text-brand-ind transition-colors">contact@cindrel.com</a></p>
                    <p className="flex items-center gap-2">📍 Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default PrivacyPage
