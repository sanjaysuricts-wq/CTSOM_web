import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Terms & Conditions | ${COMPANY.shortName}`,
  description:
    'Terms and Conditions for the CTS Offshore and Marine Limited website. Please read these terms carefully before using our website.',
}

export default function TermsPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Terms & Conditions"
        breadcrumbs={[
          { label: 'Terms & Conditions', href: '/terms' },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container mx-auto w-full  px-6 lg:px-12">
          <div className="mx-auto max-w-3xl">
            {/* Last updated */}
            <p className="mb-10 text-sm text-neutral-500">
              Last updated: 1 January 2025
            </p>

            {/* Acceptance of Terms */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                1. Acceptance of Terms
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                By accessing and using the {COMPANY.name} website
                (&ldquo;the Website&rdquo;), you accept and agree to be bound by these
                Terms and Conditions. If you do not agree to these terms, you must
                not use the Website. We reserve the right to modify these terms at
                any time, and such modifications shall be effective immediately upon
                posting on the Website. Your continued use of the Website following
                any modifications constitutes your acceptance of the revised terms.
              </p>
            </div>

            {/* Use of Website */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                2. Use of Website
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                The content of the Website is provided for general information
                purposes only. It is not intended to amount to advice on which you
                should rely. You must obtain professional or specialist advice
                before taking, or refraining from, any action on the basis of the
                content on the Website.
              </p>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                You agree to use the Website only for lawful purposes and in a
                manner that does not infringe the rights of, or restrict or inhibit
                the use and enjoyment of the Website by, any third party. You must
                not:
              </p>
              <ul className="ml-6 list-disc space-y-2 font-body text-base leading-relaxed text-neutral-700">
                <li>
                  Use the Website in any way that breaches any applicable local,
                  national, or international law or regulation.
                </li>
                <li>
                  Use the Website in any way that is unlawful or fraudulent, or has
                  any unlawful or fraudulent purpose or effect.
                </li>
                <li>
                  Transmit, or procure the sending of, any unsolicited or
                  unauthorised advertising or promotional material.
                </li>
                <li>
                  Knowingly introduce viruses, trojans, worms, logic bombs, or
                  other material that is malicious or technologically harmful.
                </li>
                <li>
                  Attempt to gain unauthorised access to the Website, the server on
                  which the Website is stored, or any server, computer, or database
                  connected to the Website.
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                3. Intellectual Property
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                All intellectual property rights in the Website, including but not
                limited to text, graphics, logos, images, audio clips, digital
                downloads, data compilations, and software, are owned by or licensed
                to {COMPANY.name} and are protected by United Kingdom and
                international copyright, trademark, and other intellectual property
                laws.
              </p>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                You may print or download content from the Website for your
                personal, non-commercial use only, provided that you do not modify
                the content and that you retain all copyright and other proprietary
                notices. No part of the Website may be reproduced, distributed,
                modified, or incorporated into any other content or website without
                our prior written consent.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                4. Limitation of Liability
              </h2>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                While we endeavour to ensure that the information on the Website is
                correct, we do not warrant its completeness or accuracy, nor do we
                commit to ensuring that the Website remains available or that the
                material on the Website is kept up to date.
              </p>
              <p className="mb-4 font-body text-base leading-relaxed text-neutral-700">
                To the maximum extent permitted by law, {COMPANY.name} excludes all
                liability arising from or in connection with the use of the Website,
                including but not limited to:
              </p>
              <ul className="ml-6 list-disc space-y-2 font-body text-base leading-relaxed text-neutral-700">
                <li>
                  Any direct, indirect, incidental, consequential, or special
                  damages, including loss of profit, data, or goodwill.
                </li>
                <li>
                  Any loss or damage arising from your use of, or inability to use,
                  the Website or any content thereon.
                </li>
                <li>
                  Any loss or damage caused by viruses or other technologically
                  harmful material that may infect your computer equipment, programs,
                  data, or other proprietary material due to your use of the Website.
                </li>
                <li>
                  Any loss or damage arising from the use of any links to
                  third-party websites from the Website.
                </li>
              </ul>
              <p className="mt-4 font-body text-base leading-relaxed text-neutral-700">
                Nothing in these terms excludes or limits our liability for death or
                personal injury arising from our negligence, fraud or fraudulent
                misrepresentation, or any other liability that cannot be excluded or
                limited by English law.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                5. Third-Party Links
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                The Website may contain links to third-party websites. These links
                are provided for your convenience and do not signify our endorsement
                of such websites or their content. We have no control over the
                content of third-party websites and accept no responsibility for
                them or for any loss or damage that may arise from your use of them.
                Accessing any third-party websites linked from the Website is
                entirely at your own risk.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                6. Governing Law
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                These Terms and Conditions, their subject matter, and their
                formation are governed by and construed in accordance with the laws
                of England and Wales. You and we both agree that the courts of
                England and Wales will have exclusive jurisdiction to settle any
                dispute or claim arising out of or in connection with these Terms
                and Conditions or their subject matter or formation (including
                non-contractual disputes or claims).
              </p>
            </div>

            {/* Severability */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                7. Severability
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                If any provision of these Terms and Conditions is found to be
                invalid or unenforceable by a court of competent jurisdiction, the
                remaining provisions shall continue in full force and effect. The
                invalid or unenforceable provision shall be deemed replaced by a
                valid, enforceable provision that most closely matches the intent of
                the original provision.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                8. Contact
              </h2>
              <p className="font-body text-base leading-relaxed text-neutral-700">
                If you have any questions about these Terms and Conditions, please
                contact us at:
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
