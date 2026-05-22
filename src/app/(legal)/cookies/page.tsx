import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Cookie Policy | ${COMPANY.shortName}`,
  description:
    'Cookie Policy for CTS Offshore and Marine Limited. Learn about the cookies we use and how to manage your cookie preferences.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Cookie Policy"
        breadcrumbs={[
          { label: 'Cookie Policy', href: '/cookies' },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="mx-auto max-w-3xl">
            {/* Last updated */}
            <p className="mb-10 text-sm text-neutral-500">
              Last updated: 1 January 2025
            </p>

            {/* What Are Cookies */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                What Are Cookies
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently, to provide information to
                website owners, and to improve the user experience. Cookies allow
                websites to recognise your device and remember information about
                your visit, such as your preferred language, font size, and other
                display preferences.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                This Cookie Policy explains what cookies are used on the{' '}
                {COMPANY.shortName} website, the purposes for which they are used,
                and how you can manage your cookie preferences.
              </p>
            </div>

            {/* Types of Cookies We Use */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Types of Cookies We Use
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-neutral-700">
                We use the following categories of cookies on our website:
              </p>

              {/* Essential Cookies */}
              <div className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-primary">
                  Essential Cookies
                </h3>
                <p className="font-body text-sm leading-relaxed text-neutral-700">
                  These cookies are strictly necessary for the operation of our
                  website. They enable core functionality such as page navigation,
                  access to secure areas, and form submission. The website cannot
                  function properly without these cookies, and they cannot be
                  disabled. Essential cookies do not collect personal information
                  that could be used for marketing purposes.
                </p>
                <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-2 font-heading font-semibold">Cookie</th>
                        <th className="px-4 py-2 font-heading font-semibold">Purpose</th>
                        <th className="px-4 py-2 font-heading font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-neutral-200">
                        <td className="px-4 py-2 font-mono text-xs">session_id</td>
                        <td className="px-4 py-2">Maintains user session state</td>
                        <td className="px-4 py-2">Session</td>
                      </tr>
                      <tr className="border-t border-neutral-200 bg-neutral-50">
                        <td className="px-4 py-2 font-mono text-xs">csrf_token</td>
                        <td className="px-4 py-2">Security token for form submissions</td>
                        <td className="px-4 py-2">Session</td>
                      </tr>
                      <tr className="border-t border-neutral-200">
                        <td className="px-4 py-2 font-mono text-xs">cookie_consent</td>
                        <td className="px-4 py-2">Stores your cookie preferences</td>
                        <td className="px-4 py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-primary">
                  Analytics Cookies
                </h3>
                <p className="font-body text-sm leading-relaxed text-neutral-700">
                  These cookies help us understand how visitors interact with our
                  website by collecting and reporting information anonymously. They
                  allow us to measure and analyse traffic patterns, identify popular
                  content, and improve the overall user experience. Analytics data
                  is aggregated and does not identify individual visitors.
                </p>
                <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-2 font-heading font-semibold">Cookie</th>
                        <th className="px-4 py-2 font-heading font-semibold">Purpose</th>
                        <th className="px-4 py-2 font-heading font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-neutral-200">
                        <td className="px-4 py-2 font-mono text-xs">_ga</td>
                        <td className="px-4 py-2">Google Analytics - distinguishes users</td>
                        <td className="px-4 py-2">2 years</td>
                      </tr>
                      <tr className="border-t border-neutral-200 bg-neutral-50">
                        <td className="px-4 py-2 font-mono text-xs">_ga_*</td>
                        <td className="px-4 py-2">Google Analytics - maintains session state</td>
                        <td className="px-4 py-2">2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-primary">
                  Functional Cookies
                </h3>
                <p className="font-body text-sm leading-relaxed text-neutral-700">
                  These cookies enable enhanced functionality and personalisation,
                  such as remembering your preferences and settings. They may be set
                  by us or by third-party providers whose services we have added to
                  our pages. If you do not allow these cookies, some or all of these
                  features may not function properly.
                </p>
                <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="px-4 py-2 font-heading font-semibold">Cookie</th>
                        <th className="px-4 py-2 font-heading font-semibold">Purpose</th>
                        <th className="px-4 py-2 font-heading font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-neutral-200">
                        <td className="px-4 py-2 font-mono text-xs">locale</td>
                        <td className="px-4 py-2">Remembers your language preference</td>
                        <td className="px-4 py-2">1 year</td>
                      </tr>
                      <tr className="border-t border-neutral-200 bg-neutral-50">
                        <td className="px-4 py-2 font-mono text-xs">theme</td>
                        <td className="px-4 py-2">Stores display preferences</td>
                        <td className="px-4 py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Managing Cookies
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                You can control and manage cookies in several ways. Please note that
                removing or blocking cookies may impact your user experience and
                some parts of the website may no longer be fully accessible.
              </p>
              <ul className="ml-6 list-disc space-y-2 font-body text-base leading-relaxed text-neutral-700">
                <li>
                  <strong>Browser Settings:</strong> Most web browsers allow you to
                  manage cookies through their settings. You can set your browser to
                  refuse cookies, delete existing cookies, or alert you when a cookie
                  is being set. Consult your browser&apos;s help documentation for
                  specific instructions.
                </li>
                <li>
                  <strong>Cookie Consent Banner:</strong> When you first visit our
                  website, you will be presented with a cookie consent banner that
                  allows you to accept or decline non-essential cookies.
                </li>
                <li>
                  <strong>Opt-Out Links:</strong> For analytics cookies provided by
                  Google, you can opt out by installing the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline decoration-accent underline-offset-2 transition-colors hover:text-accent-600"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </li>
              </ul>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Third-Party Cookies
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                In addition to our own cookies, we may also use various third-party
                cookies to report usage statistics, deliver advertisements, and
                provide embedded content. Third-party cookies are governed by the
                respective third party&apos;s privacy policy. We use third-party
                services from providers including Google (Analytics), and may embed
                content from platforms such as YouTube and LinkedIn, which may set
                their own cookies. We recommend reviewing the cookie and privacy
                policies of these third-party providers for more information about
                their practices.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Contact Us
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                If you have any questions about our use of cookies, please contact
                us at:
              </p>
              <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="font-heading font-semibold text-primary">
                  {COMPANY.name}
                </p>
                <p className="mt-2 font-body text-sm text-neutral-600">
                  Email:{' '}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-semibold text-primary underline decoration-accent underline-offset-2 transition-colors hover:text-accent-600"
                  >
                    {COMPANY.email}
                  </a>
                </p>
                <p className="mt-1 font-body text-sm text-neutral-600">
                  Phone: {COMPANY.phone}
                </p>
              </div>
              <p className="mt-6 font-body text-sm text-neutral-500">
                For more information about your data protection rights, please see
                our{' '}
                <a
                  href="/privacy"
                  className="font-semibold text-primary underline decoration-accent underline-offset-2 transition-colors hover:text-accent-600"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
