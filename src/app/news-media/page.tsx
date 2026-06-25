"use client";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";

const tabs = [
  { name: "Newsroom", path: "/news-media/newsroom" },
  { name: "Gallery", path: "/news-media/gallery" },
  { name: "Partnerships", path: "/news-media/partnerships" },
  { name: "Resources", path: "/news-media/resources" },
];

export default function NewsMedia() {
  const [active, setActive] = useState("Gallery");
  const router = useRouter();

  const handleTabClick = (tabName: string, tabPath: string) => {
    setActive(tabName);
    router.push(tabPath);
  };

  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-[250px_1fr_320px] gap-10">

          {/* LEFT */}
          <div className="border-r pr-10">
            <h2 className="text-4xl font-bold text-primary mb-8">
              News <br /> & Media
            </h2>
            <div className="space-y-5">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name, tab.path)}
                  className={`block text-left text-lg transition hover:text-primary ${
                    active === tab.name
                      ? "text-primary font-bold"
                      : "text-gray-500"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* CENTER */}
          <div className="border-r pr-10">
            <article className="overflow-hidden rounded-xl border shadow-sm">
              <img
                src="/images/nor_shipping_2025_1.webp"
                alt="news"
                className="h-[300px] w-full object-cover"
              />
              <div className="h-1 bg-gradient-to-r from-blue-700 to-lime-400" />
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3">
                  NOR Shipping 2025
                </h3>
                <p className="text-gray-500">
                  A great few days at Nor-Shipping 2025 meeting industry professionals, sharing ideas, and exploring what's next for the maritime industry
                </p>
                  <Link
    href="/news-media/gallery?story=NOR+Shipping+2025"
    className="mt-5 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
  >
    View Gallery →
  </Link>
              </div>
            </article>
          </div>

          {/* RIGHT — Zoho form via iframe, zero React involvement */}
          <div className="flex justify-center items-start">
            <iframe
              src="/zoho-form.html"
              title="Newsletter signup — The CTS Current"
              width="302"
              height="437"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
            />
          </div>

        </div>
      </div>
    </section>
  );
}