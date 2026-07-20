"use client";
import { Download, Share2 } from "lucide-react";
const resources = [
    {
        title: "Middle East & Africa Brochure",
        image: "/images/ME-AFRICA-PDF-COVER-PAGE.jpg",
        fileUrl: "/ME_Africa.pdf",
        size: "3.17 MB",

    },
    {
        title: "Europe Brochure",
        image: "/images/Europe-pdf-cover-page.jpg",
        fileUrl: "/EU.pdf",
        size: "2.90 MB",
    },
    {
        title: "Southeast Asia Brochure",
        image: "/images/south-east-asia-pdf-cover-page.jpg",

        fileUrl: "/SE-Asia.pdf",
        size: "2.83 MB",
    },
    {
        title: "India Brochure",
        image: "/images/india mobile brochure cover.jpg",
        fileUrl: "/india.pdf",
        size: "3.30 MB",
    },
    {
        title: "CTS Official Icons",
        image: "/images/ctslogo_cover_resource.webp",
        fileUrl: "/CTS_Logos.pdf",
        size: "1.2 MB",
    },
];
const handleDownload = (fileUrl: string, title: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const handleShare = async (item: any) => {
    const shareUrl = `${window.location.origin}${item.fileUrl}`;

    try {
        // Check support first
        if (navigator.share) {
            await navigator.share({
                title: item.title,
                text: `Download: ${item.title}`,
                url: shareUrl,
            });
        } else {
            await navigator.clipboard.writeText(shareUrl);
            alert("Link copied to clipboard");
        }
    } catch (error) {
        console.error("Share failed:", error);

        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard");
    }
};
export default function ResourcesPage() {
    return (
        <main className="bg-white">

            {/* HERO */}
            <section className="relative h-[380px]">

                <img
                    src="/images/resources banner 1.webp"
                    alt="hero"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-primary/70" />

                <div className="relative z-10 container mx-auto w-full h-full px-2 lg:px-2 flex items-center">

                    <div  className="mb-4 ml-6">

                        <p className="uppercase tracking-[2px] text-accent font-body font-semibold mb-5">
                            Download our brochures, logos and corporate materials
                        </p>

                        <h1 className="font-heading text-5xl md:text-6xl text-white font-bold">
                            Resources
                        </h1>

                    </div>

                </div>

            </section>

            {/* MEDIA KIT */}
            <section className="bg-white py-20 ml-4">

                <div className="container mx-auto w-full px-2 lg:px-2">

                    <div className="mb-12">

                        <div className="w-12 h-1 bg-accent mb-4" />

                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                            Media Kit
                        </h2>

                        <p className="font-body text-lg text-primary-300 max-w-8xl">
                            The photos and videos in this section may be used by
                            journalists for editorial purposes, including articles
                            and reports. No attribution is required for such use.
                        </p>

                    </div>

                    {/* CARDS */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {resources.map((item) => (
                            <div
                                key={item.title}
                                className="overflow-hidden rounded-xl bg-[#e8e8e8] border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-[300px] w-full object-cover"
                                />

                                <div className="p-6">

                                    <h3 className="font-heading text-lg font-bold text-primary mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="font-body text-sm text-neutral-900 mb-6">
                                        Mobile Version | PDF | {item.size}
                                    </p>

                                    <div className="border-t border-neutral-700 pt-4 flex justify-between items-center">

                                        <span className="font-body text-xs text-neutral-800">
                                            05/06/2026
                                        </span>

                                        <div className="flex gap-4">

                                            <button
                                                onClick={() => handleDownload(item.fileUrl, item.title)}
                                                className="text-primary hover:text-primary-600 transition-colors"
                                                aria-label="Download"
                                            >
                                                <Download size={20} />
                                            </button>

                                            <button
                                                onClick={() => handleShare(item)}
                                                className="text-primary hover:text-primary-900 transition-colors"
                                                aria-label="Share"
                                            >
                                                <Share2 size={20} />
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* PRESS */}
            <section className="bg-[#e8e8e8] py-20">

                <div className="container mx-auto w-full px-2 lg:px-2">
                    <div className="text-center max-w-2xl mx-auto">

                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                            Press & Media Enquiries
                        </h2>

                        <p className="font-body text-lg text-primary-320">
                            Looking to connect with us for a media opportunity,
                            interview, or publication feature?
                        </p>

                        <button className="mt-8 rounded-lg bg-primary px-8 py-3 font-heading text-sm font-bold text-white hover:bg-primary-600 transition-colors">
                            Get in touch
                        </button>

                    </div>
                </div>

            </section>

        </main>
    );
}