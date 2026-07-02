"use client";

import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PAGE_BANNERS } from "@/lib/constants";
import { COMPANY  } from '@/lib/constants'

/* ------------------------------------------------------------------
 * RECOMMENDED IMAGE DIMENSIONS:
 * hero images  →  1200 × 750 px  (landscape, 16:10 ratio)
 * midImage     →  400 × 120 px   (logo, transparent bg preferred)
 * extraImage   →  1800 × 600 px  (wide panoramic banner)
 * ------------------------------------------------------------------ */

const partnerships = [
  {
    title: "Shore Power Hydrogen\nDerivatives with",
    midImage: "/images/TE_Logo.webp",
    description: `Advancing Clean Port Energy with
Hydrogen Derivatives
In partnership with Transformational Energy, we
support next-generation shore power through
scalable hydrogen carrier and energy derivative solutions.
By removing high-pressure and cryogenic
requirements, these systems enable safe,
cost-effective operations.delivering grid-parity
shore-power,vessel electrification,and
zero-emission ports`,
    hero: "/images/partnerships_shorePower 1 1.webp",
    extraImage: "/images/partnerships_shorePower4.webp",
    reverse: false,
  },
  {
    title: "Piping Systems with",
    midImage: "/images/gf_piping systems copy.webp",
    description: `As a trusted partner, GF Piping Systems brings
world-class piping technology and expertise to our
projects.Their innovative solutions enable safe,
efficient, and sustainable fluid transport, helping us
deliver reliable perfomance across marine,
offshore, and industrial applications`,
    hero: "/images/partnerships_gfpiping1 1.webp",
    extraImage: "/images/partnerships_gfpiping8.webp",
    reverse: true,
  },
  {
    title: "Hydrogen Fuel\nCells with",
    midImage: "/images/Vinssen-Logo.webp",
    description: `Advancing Clean Marine Power
in Partnership with vinssen, a leader in hydrogen
fuel cell technology, we support the transition
toward zero-emission maritime operations.
Hydrogen fuel cells provide clean and efficient
onboard power genration, offering scalable
solutions that can supplement or replace conventional marine energy sytstems, reducing
greenhouse gas emissions and advancing
sustainable shipping`,
    hero: "/images/partnerships_vinssen1 1.webp",
    extraImage: "/images/partnerships_vinssen4.webp",
    reverse: false,
  },
  {
    title: "Wind Sail Rotor\nSystems with",
    midImage: "/images/logo-a9f6529e copy.webp",
    description: `Harnessing Wind and Steering Sustainability
We're proudly partnered with Dealfeng, We deliver
advanced Wind Sail Rotor technology that reduces
fuel consumption, lowers emissions, and improves
vessel effiency through wind-assisted propulsion
for sustainable shipping`,
    hero: "/images/partnerships_dealfeng 1 1.webp",
    extraImage: "/images/partnerships_dealfeng 4.webp",
    reverse: true,
  },
];

export default function PartnershipsPage() {
  return (
    <main className="bg-neutral-50 relative">

      {/* HERO */}
      <Hero
        variant="page"
        title="Partnerships"
        subtitle="EXPLORE OUR STRATEGIC PARTNERSHIPS,COLLABORATIONS, AND INDUSTRY AFFILIATIONS"
        backgroundImage={PAGE_BANNERS.partnerships}
        breadcrumbs={[
          { label: "News & Media", href: "/news-media" },
          { label: "Partnerships", href: "/news-media/partnerships" },
        ]}
      />

      {/* PARTNERSHIP BLOCKS */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full px-1 lg:px-1">

          {partnerships.map((item, index) => (
            <div
              key={index}
              className="border-b-2 border-neutral-300 pb-4 mb-4 md:pb-5 md:mb-5 lg:pb-10 lg:mb-10 last:border-b-0 last:pb-0 last:mb-0"
            >

              {/* ── TWO COLUMN ROW ── */}
              {/* Layout logic:
                  - reverse=false → content left (col 1), image right (col 2)
                  - reverse=true  → image left (col 1), content right (col 2) */}
              <div
                className={`
                  flex flex-col lg:grid items-center
                  gap-0 md:gap-0 lg:gap-0
                  ${item.reverse ? "lg:grid-cols-[60%_40%]" : "lg:grid-cols-[30%_70%]"}
                `}
              >

                {/* HERO IMAGE */}
                <div
                  className={`
                    order-1 lg:order-none mt-6 lg:mt-0
                    ${item.reverse
                      ? "w-full lg:col-start-1 lg:ml-12"
                      : "w-full lg:w-[110%] lg:col-start-2 lg:-mr-12"
                    }
                  `}
                >
                  <img
                    src={item.hero}
                    alt={item.title.replace(/\n/g, " ")}
                    className="
                      w-full rounded-xl object-contain
                      h-[240px] sm:h-[300px] md:h-[420px] lg:h-[500px] xl:h-[560px]
                    "
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`
                    w-full order-2 lg:order-none
                    flex flex-col
                    ${item.reverse
                      ? "lg:col-start-2 lg:row-start-1 items-end text-right lg:mr-12 lg:pr-8 xl:pr-12"
                      : "lg:col-start-1 lg:row-start-1 items-start text-left lg:ml-12"
                    }
                  `}
                >
                  {/* Accent bar */}
                  <div className={`mb-4 h-1 w-12 rounded-full bg-accent ${item.reverse ? "ml-auto mr-0" : ""}`} />

                  {/* Title */}
                  <h2 className={`font-heading text-3xl md:text-4xl font-bold text-primary whitespace-pre-line leading-tight mb-4 ${item.reverse ? "mr-0" : ""}`}>
                    {item.title}
                  </h2>

                  {/* Mid Image / Logo */}
                  {item.midImage && (
                    <div className={`mb-4 ${item.reverse ? "ml-auto mr-0" : ""}`}>
                      <img
                        src={item.midImage}
                        alt="Partner logo"
                        className="w-auto h-14 md:h-16 lg:h-20 object-contain"
                      />
                    </div>
                  )}

                  {/* Description */}
                  <p className={`mt-4 font-body text-base leading-relaxed text-neutral-600 whitespace-pre-line max-w-2xl ${item.reverse ? "ml-auto mr-0" : ""}`}>
                    {item.description}
                  </p>

                  {/* Enquire button */}
                  <div className={`mt-8 ${item.reverse ? "ml-auto mr-0" : ""}`}>
                    <a
                      href="mailto:info@ctsom.com"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-heading text-sm font-bold text-accent transition-all hover:bg-primary-600"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>

              </div>

              {/* Extra image: reduced width and right-aligned, no cropping */}
              {item.extraImage && (
                <div className="hidden md:flex mt-8 md:mt-10 lg:mt-12 justify-end">
                  <img
                    src={item.extraImage}
                    alt="Partnership detail"
                    className="
                      w-[95%] md:w-[88%] lg:w-[97%] max-w-[1300px] rounded-xl object-contain
                      h-[300px] md:h-[380px] lg:h-[420px]
                    "
                  />
                </div>
              )}

            </div>
          ))}

        </div>
      </section>

            <section className="bg-[#e8e8e8] py-16">
              <div className="container mx-auto w-full px-2 lg:px-2">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="font-heading text-2xl font-bold text-primary">Partnerships Enquiries</h2>
                  <p className="mt-4 font-body text-base text-neutral-700">
                    Interested in partnering or collaborating with us ?
                    Reach out to explore opportunities across the maritime and energy sectors
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-bold text-white transition-all hover:bg-primary-600"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </section>

      {/* CTA */}
      {/* <CTASection
        title="Partnership Enquiries"
        description="Interested in partnering or collaborating with us? Reach out to explore opportunities across maritime and energy sectors."
        primaryCTA={{
          label: "Get in Touch",
          href: "mailto:info@ctsom.com",
        }}
      /> */}

    </main>
  );
}