// ─── COOKIE POLICY ───────────────────────────────────────────────────────────
import { Reveal, PageHero } from '@/components/ui'

export function CookiePolicyPage() {
  return (
    <>
      <PageHero 
        badge="Legal"
        title="Cookie Policy"
        sub="This Cookie Policy explains how Cindrel uses cookies and similar technologies when you visit our website."
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
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    By continuing to use our website, you agree to the use of cookies as described in this policy.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">1. What Are Cookies</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Cookies are small text files that are stored on your device when you visit a website. They help websites recognize your device and store information about your preferences or actions over time.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mt-4">
                    Cookies play an important role in improving the functionality and usability of modern websites.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">2. How We Use Cookies</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    Cindrel uses cookies to ensure that our website functions properly and to enhance your overall browsing experience. Cookies allow us to understand how users interact with our site, identify areas for improvement, and deliver a smoother and more personalized experience.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mt-4">
                    We also use cookies to analyze traffic patterns, monitor performance, and support our internal analytics processes.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">3. Types of Cookies We Use</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-[17px] mb-2">3.1 Essential Cookies</h3>
                      <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                        These cookies are necessary for the basic functionality of the website. Without them, certain features of the site may not work properly.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[17px] mb-2">3.2 Analytics Cookies</h3>
                      <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                        These cookies help us understand how visitors interact with our website by collecting information such as page visits, time spent, and user behavior. This data is used to improve our services and user experience.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[17px] mb-2">3.3 Functional Cookies</h3>
                      <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                        Functional cookies allow the website to remember your preferences, such as language settings or previously entered information, to provide a more personalized experience.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[17px] mb-2">3.4 Marketing Cookies (If Applicable)</h3>
                      <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                        These cookies may be used to deliver relevant content, measure campaign effectiveness, or support marketing activities.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">4. Managing and Controlling Cookies</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    You have the ability to manage or disable cookies through your browser settings. Most web browsers allow you to control cookies through their settings preferences.
                  </p>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8] mt-4">
                    Please note that disabling cookies may affect the functionality and performance of certain parts of our website.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">5. Third-Party Cookies</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    In some cases, third-party services used on our website (such as analytics tools) may place cookies on your device. These cookies are governed by the respective third-party privacy policies, and we do not have direct control over them.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">6. Updates to This Cookie Policy</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with the revised effective date.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] mb-4">7. Contact Information</h2>
                  <p className="text-[14.5px] sm:text-[16px] text-lt-muted leading-[1.8]">
                    If you have any questions regarding our use of cookies, you can contact us at:
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

export default CookiePolicyPage
