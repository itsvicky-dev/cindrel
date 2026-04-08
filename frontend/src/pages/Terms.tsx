// ─── TERMS & CONDITIONS ──────────────────────────────────────────────────────
import { Reveal, PageHero } from '@/components/ui'

export function TermsPage() {
  return (
    <>
      <PageHero 
        badge="Legal"
        title="Terms & Conditions"
        sub="These Terms & Conditions govern your access to and use of the website, services, products, and solutions provided by Cindrel."
      />

      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 bg-lt-bg">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="max-w-none">
              <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mb-8 italic">
                Effective Date: April 8, 2026
              </p>
              
              <div className="space-y-12 text-lt-text">
                <div>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    By accessing our website, engaging with our services, submitting information, or entering into any form of communication or agreement with us, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree, you must refrain from using our website or services.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">1. Nature and Scope of Services</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mb-4">
                    Cindrel provides professional services in AI automation, workflow engineering, system integrations, API development, and related consulting. All services are delivered based on defined business requirements, technical feasibility, and agreed timelines and scope.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Cindrel reserves the right to modify or improve service offerings, introduce new services or discontinue existing ones, and refuse service where requirements are not feasible or aligned.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">2. Website Usage and Acceptable Conduct</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mb-4">
                    You agree to use this website in a lawful and responsible manner. You must not attempt unauthorized access to systems, use the website for fraudulent activities, distribute malware, or interfere with website performance.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Any misuse may result in immediate suspension or restriction of access, without prior notice.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">3. Client Engagement and Agreement Structure</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    All client work may be governed by proposal documents, Statements of Work (SOW), or written approvals. These define the scope, deliverables, timelines, and pricing. In case of conflict, the signed agreement or SOW will take precedence over these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">4. Project Execution and Delivery</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Cindrel will make reasonable efforts to deliver services in accordance with agreed timelines. However, delivery is dependent on client responsiveness, availability of required inputs, and third-party dependencies. Cindrel shall not be held liable for delays beyond its control.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">5. Client Responsibilities</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Clients agree to provide accurate information, share necessary access credentials, ensure legal compliance of their operations, and provide timely feedback. The client is solely responsible for how automation systems are used within their business.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">6. Intellectual Property Rights</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    All intellectual property created by Cindrel remains the property of Cindrel unless otherwise agreed in writing. Upon full payment, the client may receive ownership or usage rights as specified. Cindrel retains the right to reuse non-confidential frameworks and methodologies.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">7. Confidentiality</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Both parties agree to maintain strict confidentiality of all sensitive, proprietary, or business-related information shared during the engagement. This remains in effect even after termination of the engagement.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">8. Third-Party Services</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Cindrel’s solutions may integrate with third-party platforms. Cindrel does not control or guarantee the availability, features, or data practices of these third parties.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">9. Fees and Payments</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Pricing and payment terms will be agreed upon prior to project initiation. Payments must be made within agreed timelines. All payments are non-refundable unless explicitly stated. Cindrel reserves the right to pause services due to non-payment.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">10. Limitation of Liability</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    To the fullest extent permitted by law, Cindrel shall not be liable for indirect, incidental, or consequential damages. Total liability shall not exceed the amount paid by the client for the specific service.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">11. Disclaimer of Warranties</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    All services are provided on an “as-is” basis. Cindrel does not guarantee error-free operation, specific business outcomes, or compatibility with all external systems.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">12. Indemnification</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    You agree to indemnify and hold harmless Cindrel from any claims arising from misuse of services, violation of laws, or infringement of third-party rights.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">13. Data Security</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Cindrel follows industry best practices to secure systems. However, clients are responsible for securing their credentials and managing permissions within their systems.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">14. Termination</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Either party may terminate the engagement with written notice. Cindrel may terminate services immediately for breach of terms, non-payment, or unethical use of services.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">15. Governing Law</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Chennai, Tamil Nadu.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">16. Contact Information</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    For any questions regarding these Terms:
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

export default TermsPage
