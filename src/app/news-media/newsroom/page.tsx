"use client";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from '@/components/ui/SectionHeading'
import { COMPANY, PAGE_BANNERS } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



interface SocialFeedItem {
  id: number;
  platform: string;
  summary: string;
  likes: number;
  comments: number;
  time: string;
  link: string;
  image_url: string;
}




const galleryHighlights = [
  {
    title: 'NOR Shipping 2025',
    location: 'Oslo, Norway',
    tag: 'Events',
    image: '/images/nor_shipping_2025_1.webp',
    description:
      "A great few days at Nor-Shipping 2025 meeting industry professionals, sharing ideas, and exploring what's next for the maritime industry.",
  },
  {
    title: 'Seatrade Maritime Logistics Middle East',
    location: 'Dubai, UAE',
    tag: 'Events',
    image: '/images/Newsroom_EventsNpress_SMLmeCover.webp',
    description:
      'Engaging with industry professionals and exploring key developments shaping the future of maritime and logistics operations across the region.',
  },
  {
    title: 'GF+ Piping Partnership Meeting',
    location: 'Dubai, UAE',
    tag: 'Partnerships',
    image: '/images/1761909239111 copy.webp',
    description:
      'Productive discussions with GF Piping Systems in Dubai, exploring technical requirements and collaboration opportunities across upcoming projects.',
  },
]




function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const PAGE_SIZE = 6;

interface NewsItem {
  id: number;
  Title: string;
  slug: string;
  Category: string;
  summary: string;
  image_url: string;
  published_at: string;
  Date: string;
}

export default function NewsroomPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const hasFetchedRef = useRef(false); // ← guards against Strict Mode double-invoke

  const [feed, setFeed] = useState<SocialFeedItem[]>([]);
  const [feedLoading, setFeedLoading] = useState(false);

  const fetchNews = async (pageIndex: number) => {
    if (loading) return;

    setLoading(true);

    const from = pageIndex * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, error } = await supabase
      .from("newsroom")
      .select("*")
      .order("id", { ascending: false })
      .range(from, to);

    if (error) {
      console.error("Supabase error:", error.message);
      setLoading(false);
      return;
    }

    if (!data || data.length === 0) {
      setHasMore(false);
      setLoading(false);
      return;
    }

    if (data.length < PAGE_SIZE) {
      setHasMore(false);
    }

    // Deduplicate before appending — safety net against any double fetch
    setNews((prev) => {
      const existingIds = new Set(prev.map((item) => item.id));
      const newItems = data.filter((item) => !existingIds.has(item.id));
      return [...prev, ...newItems];
    });

    setLoading(false);
  };

  const fetchSocialFeed = async () => {

    setFeedLoading(true);

    const { data, error } = await supabase
      .from("sociamediapost")
      .select("*")
      .order("time", { ascending: false })
      .limit(10);

    console.log("SOCIAL DATA:", data);
    console.log("SOCIAL ERROR:", error);


    if (error) {
      console.error("Social feed error:", error.message);
      setFeedLoading(false);
      return;
    }


    setFeed(data || []);
    setFeedLoading(false);
  };

  // ── Initial fetch (page 0) — runs once, guarded against Strict Mode ──
  useEffect(() => {
    if (hasFetchedRef.current) return;

    hasFetchedRef.current = true;

    fetchNews(0);
    fetchSocialFeed();

  }, []);

  // ── Infinite scroll observer — triggers pages 1, 2, 3... ──
  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => {
            const nextPage = prev + 1;
            fetchNews(nextPage);
            return nextPage;
          });
        }
      },
      { threshold: 0.1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, [hasMore, loading]);

  return (

    <main className="bg-white py-0">
      <Hero
        variant="page"
        title="Newsroom"
        subtitle="LATEST UPDATES, EVENTS, AND INDUSTRY ACTIVITY."
        backgroundImage={PAGE_BANNERS.newsroom}
        breadcrumbs={[
          { label: 'News & Media', href: '/news-media' },
          { label: 'Newsroom', href: '/news-media/newsroom' },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            title="Latest News"
            subtitle="Stay Informed"
            description="Keep up to date with the latest news, project updates, and industry insights from CTS Offshore."
            align="left"
          />

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news-media/newsroom/${item.slug}`}
                className="group block rounded-xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
              >

                <img
                  src={item.image_url}
                  alt={item.Title}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-accent/90 px-3 py-1 font-body text-xs font-semibold text-primary">
                      {item.Category}
                    </span>
                    <span className="font-body text-xs text-neutral-500">
                      {formatDate(item.Date)}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">
                    {item.published_at}
                  </p>
                  <h3 className="mb-2 font-heading text-lg font-bold text-primary line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {item.Title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-neutral-600 line-clamp-3">
                    {item.summary}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-primary group-hover:text-accent-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No results */}
          {!loading && news.length === 0 && (
            <p className="text-center text-neutral-400 text-sm mt-20">
              No articles found.
            </p>
          )}

          {/* Infinite scroll trigger */}
          {hasMore && (
            <div ref={loaderRef} className="mt-10 flex justify-center py-6">
              {loading && (
                <div className="w-8 h-8 border-4 border-[#0B2A69] border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          )}

          {/* End of results */}
          {!hasMore && news.length > 0 && (
            <p className="text-center text-neutral-900 text-sm mt-10">
              You've seen all {news.length} articles.
            </p>
          )}
        </div>
      </section>
      {/* Events & Press */}
      <section className="bg-primary  py-20">
        <div className="container mx-auto w-full px-2 lg:px-2">
          <SectionHeading
            title="Events & Press"
            subtitle=""
            description="A visual archive of exihibitions, conferences,and industry events we take part in, including recaps and highlights"
            align="left"
            light
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryHighlights.map((item) => (
              <Link
                key={item.title}
                href={`/news-media/gallery?story=${encodeURIComponent(item.title)}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                    // fill
                    // className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary">
                        {item.tag}
                      </span>
                      <span className="font-body text-xs text-neutral-500">{item.location}</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-primary group-hover:text-primary-600 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-body text-sm text-neutral-600 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="mt-4 text-sm font-semibold text-primary group-hover:text-accent-700">
                      View Gallery →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* In the feeeeeeeeed */}
      <section className="bg-[#f7f8fb] py-16">
        <div className="container mx-auto px-6">

          <div className="mb-10">
            <div className="h-[4px] w-12 bg-lime-400 mb-4" />

            <h2 className="text-4xl font-bold text-[#14387f]">
              In the Feed
            </h2>

            <p className="mt-2 text-gray-600">
              Stay connected through updates, highlights,
              and industry moments across our social channels.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
              clickable: true,
            }}
            spaceBetween={28}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {feed.map((item) => (
              <SwiperSlide key={item.id}>


                <article
                  className="
    relative
    rounded-2xl
    bg-[#e8e8e8]
    shadow-sm
    overflow-hidden
    hover:shadow-lg
    transition
  "
                >
                  <div className="p-5">

                    <div className="flex items-center gap-3 mb-4">

                      <div className="h-10 w-10 rounded-full  overflow-hidden flex items-center justify-center">
                        <img
                          src="/images/test email logo copy.png"
                          alt="Platform"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {item.platform}
                        </h4>

                        <span className="text-sm text-gray-500">

                          {formatDate(item.time)}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 line-clamp-3">
                      {item.summary}
                    </p>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-[#14387f] font-semibold"
                    >
                      Read More
                    </a>
                  </div>

                  <div className="relative h-[250px]">

                    <img
                      src={item.image_url}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>


                  <div className="flex justify-between items-center -t p-4  bg-[#e8e8e8] text-gray-600">

                    <button className="flex items-center gap-2 text-base hover:text-blue-500 transition">
                      <span className="text-xl">♡</span>
                      <span>{item.likes}</span>
                    </button>

                    <button className="flex items-center gap-2 text-base hover:text-blue-500 transition">
                      <span className="text-xl">💬</span>
                      <span>{item.comments}</span>
                    </button>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base hover:text-[#14387f] transition"
                    >
                      <span className="text-xl inline-block rotate-[-40deg]">
                        ➤
                      </span>
                      <span>Share</span>
                    </a>

                  </div>
                </article>
                <div className="absolute top-5 right-3 z-10">
                  <img
                    src={`/images/social/${item.platform}.webp`}
                    alt={item.platform}
                    className="h-8 w-8 object-contain"
                  />
                </div>


              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Press Contact */}
      <section className="bg-[#e8e8e8] py-16">
        <div className="container mx-auto w-full px-2 lg:px-2">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-primary">Press & Media Enquiries</h2>
            <p className="mt-4 font-body text-base text-neutral-700">
              Looking to connect with us for a media opportunity,
              interview, or publication feature
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
    </main>
  );

}
