"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { PAGE_BANNERS } from "@/lib/constants";

/* ------------------------------------------------------------------
 * FEATURED STORY — BorWin Gamma Hook-Up Project
 * Replace image paths with your real files in /public
 * ------------------------------------------------------------------ */
const featuredStories = {
  "Seamac - Engine Overhaul": {
    title: "Seamac - Engine Overhaul",
    tags: ["Operations"],
    description:
      "Comprehensive engine overhaul services performed at our Dubai facility, showcasing our technical expertise in marine engine maintenance and repair.",
    images: [
      "/images/20260203_110110_edited.webp",
      "/images/20260203_121830.webp",
      "/images/20260203_121431.webp",
      "/images/20260203_121119.webp",
      "/images/20260203_121105.webp",
    ],
  },

  "NOR Shipping 2025": {
    title: "NOR Shipping 2025",
    tags: ["Events"],
    description:
      "A great few days at Nor-Shipping 2025 meeting industryprofessionals, sharing ideas, and exploring what's next forthe maritime industry",
    images: [
      "/images/nor_shipping_2025_1.webp",
      "/images/nor shipping 2025 9.webp",
      "/images/nor shipping 2025 10.webp",
      "/images/nor shipping 2025 1 (1).webp",


    ],

  },

  "GF+ Piping Partnership Meeting": {
    title: "GF+ Piping Partnership Meeting",
    tags: ["Teams", "Workplace"],
    description:
      "Productive meeting with GF Piping Systems in Dubai, where we discussed current project requirements, technical considerations, and explored potential areas of collaboration moving forward across upcoming offshore and marine opportunities.",
    images: [
      "/images/1761909239111 copy.webp",
      "/images/1761909237088 copy.webp",
      "/images/1761909236859 copy.webp",
      "/images/1761909238256 copy.webp",




    ],
  },

  "Seatrade Maritime Logistics Middle East": {
    title: "Seatrade Maritime Logistics Middle East",
    tags: ["Events"],
    description:
      "Productive participation at Seatrade Maritime Logistics Middle East 2025, engaging with industry professionals, exchanging insights, and exploring key developments shaping the future of maritime and logistics operations across the region.",
    images: [
      "/images/Newsroom_EventsNpress_SMLmeCover.webp",
      "/images/WhatsApp Image 2025-05-08 at 12.55.13 PM 2.webp",
      "/images/WhatsApp Image 2025-05-08 at 12.55.13 PM copy 4.webp",


    ],
  },

  "Diwali 2025": {
    title: "Diwali 2025",
    tags: ["Teams", "Workplace"],
    description:
      "A wonderful Diwali 2025 celebration across our Dubai office and Fujairah workshop, bringing teams together to mark the occasion, foster stronger relationships, and celebrate the shared spirit that drives our continued success and collaboration.",
    images: [
      "/images/20251020_103813_Edited copy.webp",
      "/images/20251020_090202 copy.webp",
      "/images/20251017_145510_Edited.webp", 
      "/images/20251017_122648.webp",
      "/images/20251017_131636 copy.webp",
    ],
  },

  "BorWin Gamma Hook-Up Project": {
    title: "BorWin Gamma Hook-Up Project",
    tags: ["Operations","Teams"],
    description:
      "BorWin Gamma topside successfully hooked-up by our team at 130km offshore in the North Sea,marking a critical project milestone in the installation of the 900 MW HVDC converter platform. installed using the float-over method, the structure was precisely aligned and secured to its jacket 40m belowe sea level, completing a complex offshore operation under challenging North Sea conditions. This achievement supports the transmission of renewable energy to over one million homes through the german national grid",
    images: [
      "/images/offshore_asset_inspectio.webp",
      "/images/PHOTO-2022-07-09-20-04-35.webp",
      "/images/IMG_9666.webp",
      "/images/IMG_9660.webp",
      "/images/IMG_9652.webp",
      "/images/20220711_063417306_iOS.webp",
      "/images/20220710_153258546_iOS.webp",
    ],
  },
} as const;
/* ------------------------------------------------------------------
 * CATEGORY FILTERS
 * ------------------------------------------------------------------ */
const CATEGORIES = [
  "All",
  "Events",
  "Operations",
  "Facilities",
  "Fleets / Assets",
  "Teams / Workplace",
] as const;

type Category = (typeof CATEGORIES)[number];

/* ------------------------------------------------------------------
 * GALLERY COLLECTION
 * Replace image paths with your real files in /public
 * ------------------------------------------------------------------ */
const galleryItems: {
  title: string;
  location: string;
  category: Exclude<Category, "All">;
  image: string;
}[] = [
    {
      title: "Seamac - Engine Overhaul",
      location: "Dubai, UAE",
      category: "Operations",
      image: "/images/20260203_110110_edited.webp",
    },
    {
      title: "NOR Shipping 2025",
      location: "Oslo, Norway",
      category: "Events",
      image: "/images/nor_shipping_2025_1.webp",
    },
    {
      title: "GF+ Piping Partnership Meeting",
      location: "Dubai, UAE",
      category: "Teams / Workplace",
      image: "/images/1761909239111 copy.webp",
    },
    {
      title: "Seatrade Maritime Logistics Middle East",
      location: "Dubai, UAE",
      category: "Events",
      image: "/images/Newsroom_EventsNpress_SMLmeCover.webp",
    },
    {
      title: "Diwali 2025",
      location: "Dubai, UAE",
      category: "Teams / Workplace",
      image: "/images/20251020_103813_Edited copy.webp",
    },
    {
      title: "BorWin Gamma Hook-Up Project",
      location: "North Sea",
      category: "Fleets / Assets",
      image: "/images/offshore_asset_inspectio.webp",
    },
  ];

/* ------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------ */
function GalleryPageInner() {
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [selectedStory, setSelectedStory] =
    useState<keyof typeof featuredStories>("Seamac - Engine Overhaul");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const story = searchParams.get("story");
    if (story && story in featuredStories) {
      const key = story as keyof typeof featuredStories;
      setSelectedStory(key);
      // Also set the matching category filter
      const matchingItem = galleryItems.find((item) => item.title === story);
      if (matchingItem) {
        setActiveCategory(matchingItem.category as Category);
      }
    }
  }, [searchParams]);

  const currentStory = featuredStories[selectedStory];

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="bg-neutral-50 relative">
      {/* HERO */}
      <Hero
        variant="page"
        title="Gallery"
        subtitle="A VISUAL COLLECTION OF OUR OPERATIONS, EVENTS, AND INDUSTRY PRESENCE."
        backgroundImage={PAGE_BANNERS.gallery}
        breadcrumbs={[
          {
            label: "News & Media",
            href: "/news-media",
          },
          {
            label: "Gallery",
            href: "/news-media/gallery",
          },
        ]}
      />

      {/* FEATURED STORY */}
      <section className="bg-white py-20">
        <div className="container mx-auto w-full px-6 lg:px-12">
          <div className="max-w-7xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-accent" />

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                {currentStory.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {currentStory.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs md:text-sm font-medium px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-primary-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="font-body text-lg leading-relaxed text-primary-300 mt-6">
              {currentStory.description}
            </p>
          </div>

          {/* Carousel */}
          <div className="mt-8 md:mt-10">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".borwin-prev",
                nextEl: ".borwin-next",
              }}
              pagination={{
                clickable: true,
                el: ".borwin-pagination",
              }}
              spaceBetween={4}
              slidesPerView={1.15}
              centeredSlides
              breakpoints={{
                768: {
                  slidesPerView: 1.6,
                  spaceBetween: 8,
                },
                1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 12,
                },
              }}
              className="!overflow-visible md:!overflow-hidden"
            >
              {currentStory.images.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative group">
                    <img
                      src={src}
                      alt={`${currentStory.title} photo ${i + 1}`}
                      className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] object-cover rounded-lg md:rounded-xl"
                    />
                    {/* Expand icon — wire up lightbox here if needed */}
                    <button
                      type="button"
                      aria-label="Expand image"
                      className="absolute bottom-3 right-3 bg-primary/80 text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex hover:bg-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"
                        />
                      </svg>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Controls row: arrows + dots */}
            <div className="flex items-center justify-between mt-5 md:mt-6">
              <button
                type="button"
                aria-label="Previous"
                className="borwin-prev w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="borwin-pagination flex items-center justify-center gap-2 flex-1 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:bg-neutral-300 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet]:inline-block [&_.swiper-pagination-bullet]:mx-1" />

              <button
                type="button"
                aria-label="Next"
                className="borwin-next w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE OUR COLLECTION — filterable grid */}
      <section className="bg-primary py-20 relative">
        <div className="container mx-auto w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
            <div>
              <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                Explore Our Collection
              </h2>
              <p className="font-body text-lg text-white/80">
                From events and operations to facilities, assets, and team
                moments.
              </p>
            </div>

            {/* Category filter dropdown */}
            <div className="relative lg:self-start">
              <button
                type="button"
                onClick={() => setDropdownOpen((open) => !open)}
                className="flex items-center justify-between gap-3 bg-white text-primary font-semibold px-5 py-3 rounded-lg min-w-[220px] hover:bg-neutral-50 transition-colors"
              >
                Explore by Category
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""
                    }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-20 ring-1 ring-black/5">
                  {CATEGORIES.map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-3 px-5 py-2.5 cursor-pointer hover:bg-neutral-50 text-sm text-primary-700 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={activeCategory === category}
                        onChange={() => {
                          setActiveCategory(category);
                          setDropdownOpen(false);
                        }}
                        className="w-4 h-4 rounded border-neutral-300 accent-primary"
                      />
                      <span
                        className={
                          activeCategory === category
                            ? "text-primary font-semibold"
                            : ""
                        }
                      >
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>


          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedStory(
                    item.title as keyof typeof featuredStories
                  );

                  // Don't change the category if "All" is selected
                  // This keeps the filter state intact when user returns
                  if (activeCategory !== "All") {
                    setActiveCategory(
                      item.category as Category
                    );
                  }

                  window.scrollTo({
                    top: 250,
                    behavior: "smooth",
                  });
                }}
              >
                <div className="relative overflow-hidden rounded-lg md:rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-heading text-white font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-white/80 text-sm">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="font-body text-white/80 text-base mt-8 text-center">
              No items found in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Press & Media Enquiries"
        description="Looking to connect with us for a media opportunity, interview, or publication feature?"
        primaryCTA={{
          label: "Get in Touch",
          href: "mailto:info@ctsom.com",
        }}
      />
    </main>
  );
}

export default function GalleryPage() {
  return (
    <Suspense>
      <GalleryPageInner />
    </Suspense>
  );
}