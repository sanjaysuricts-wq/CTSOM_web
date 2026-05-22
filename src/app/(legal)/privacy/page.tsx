import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import { COMPANY } from '@/lib/constants'
export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY.shortName}`,
  description:
    'Privacy Policy for CTS Offshore and Marine Limited. Learn how we collect, use, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Privacy Policy"
        breadcrumbs={[
          { label: 'Privacy Policy', href: '/privacy' },
        ]}
      />
      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="mx-auto max-w-3xl">
            {/* Last updated */}
            <p className="mb-10 text-sm text-neutral-500">
              Last updated: 1 January 2025
            </p>

            {/* Introduction */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Introduction
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                {COMPANY.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting
                and respecting your privacy. This Privacy Policy explains how we
                collect, use, store, and protect your personal data when you visit
                our website, use our services, or otherwise interact with us. This
                policy is in accordance with the UK General Data Protection
                Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Information We Collect
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                We may collect and process the following types of personal data:
              </p>
              <ul className="ml-6 list-disc space-y-2 font-body text-base leading-relaxed text-neutral-700">
                <li>
                  <strong>Identity Data:</strong> Full name, job title, and company
                  name when you submit an enquiry or contact form.
                </li>
                <li>
                  <strong>Contact Data:</strong> Email address, telephone number,
                  and postal address.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type and
                  version, time zone setting, browser plug-in types and versions,
                  operating system and platform, and other technology on the devices
                  you use to access our website.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website, including pages visited, time spent on pages, and
                  navigation patterns.
                </li>
                <li>
                  <strong>Communications Data:</strong> Any information you provide
                  in correspondence with us, including emails, contact form
                  submissions, and telephone conversations.
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                How We Use Your Information
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                We use your personal data for the following purposes:
              </p>
              <ul className="ml-6 list-disc space-y-2 font-body text-base leading-relaxed text-neutral-700">
                <li>
                  To respond to your enquiries and provide you with information
                  about our services.
                </li>
                <li>
                  To manage and administer our business relationship with you or
                  your organisation.
                </li>
                <li>
                  To provide, maintain, and improve our website and services.
                </li>
                <li>
                  To send you marketing communications where you have given your
                  consent or where we have a legitimate interest to do so.
                </li>
                <li>
                  To comply with legal obligations and protect our legal rights.
                </li>
                <li>
                  To analyse website usage and improve our online experience.
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Data Sharing
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                We do not sell your personal data to third parties. We may share
                your personal data with the following categories of recipients:
              </p>
              <ul className="ml-6 list-disc space-y-2 font-body text-base leading-relaxed text-neutral-700">
                <li>
                  <strong>Service Providers:</strong> Third-party companies that
                  provide services on our behalf, such as website hosting, email
                  delivery, and analytics. These providers are contractually bound
                  to protect your data.
                </li>
                <li>
                  <strong>Group Companies:</strong> Other entities within the CTS
                  group of companies, where necessary for the purposes described in
                  this policy.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Where we are required to
                  disclose your data by law, regulation, or court order.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your data may be transferred as
                  part of that transaction.
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Cookies
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                Our website uses cookies to distinguish you from other users and to
                provide a better browsing experience. For detailed information about
                the cookies we use and the purposes for which we use them, please
                see our{' '}
                <a
                  href="/cookies"
                  className="font-semibold text-primary underline decoration-accent underline-offset-2 transition-colors hover:text-accent-600"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Data Security
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                We have implemented appropriate technical and organisational
                measures to protect your personal data against unauthorised access,
                alteration, disclosure, or destruction. These measures include
                encryption of data in transit using SSL/TLS, access controls
                limiting data access to authorised personnel, regular security
                assessments and penetration testing, and secure data storage with
                appropriate backup procedures. While we strive to protect your
                personal data, no method of transmission over the internet or
                electronic storage is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            {/* Your Rights (GDPR) */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Your Rights (GDPR)
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                Under the UK GDPR, you have the following rights in relation to
                your personal data:
              </p>
              <ul className="ml-6 list-disc space-y-2 font-body text-base leading-relaxed text-neutral-700">
                <li>
                  <strong>Right of Access:</strong> You have the right to request a
                  copy of the personal data we hold about you.
                </li>
                <li>
                  <strong>Right to Rectification:</strong> You have the right to
                  request that we correct any inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Right to Erasure:</strong> You have the right to request
                  that we delete your personal data in certain circumstances.
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> You have the right
                  to request that we restrict the processing of your personal data
                  in certain circumstances.
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> You have the right to
                  receive your personal data in a structured, commonly used, and
                  machine-readable format.
                </li>
                <li>
                  <strong>Right to Object:</strong> You have the right to object to
                  the processing of your personal data in certain circumstances,
                  including direct marketing.
                </li>
              </ul>
              <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                To exercise any of these rights, please contact us using the details
                provided below. We will respond to your request within one month of
                receipt.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Contact Us
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                If you have any questions about this Privacy Policy or wish to
                exercise your data protection rights, please contact us at:
              </p>
              <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <p className="font-heading font-semibold text-primary">
                  {COMPANY.name}
                </p>
                <p className="mt-2 font-body text-sm text-neutral-600">
                  Data Protection Officer
                </p>
                <p className="mt-1 font-body text-sm text-neutral-600">
                  Email:{' '}
                  <a
                    href={`mailto:privacy@ctsom.com`}
                    className="font-semibold text-primary underline decoration-accent underline-offset-2 transition-colors hover:text-accent-600"
                  >
                    privacy@ctsom.com
                  </a>
                </p>
                <p className="mt-1 font-body text-sm text-neutral-600">
                  Phone: {COMPANY.phone}
                </p>
              </div>
              <p className="mt-6 font-body text-sm text-neutral-500">
                You also have the right to lodge a complaint with the Information
                Commissioner&apos;s Office (ICO) if you believe that your data protection
                rights have not been respected. The ICO can be contacted at{' '}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline decoration-accent underline-offset-2 transition-colors hover:text-accent-600"
                >
                  ico.org.uk
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
