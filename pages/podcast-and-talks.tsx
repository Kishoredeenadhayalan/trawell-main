import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MoveLeft, Mic, Video, Users } from "lucide-react";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

const PodcastPage = () => {
    return (
        <>
            <Head>
                <title>Podcast & Talks | Trawell India</title>
                <meta name="description" content="Explore our latest podcasts and talks on Indian heritage, culture, and history." />
            </Head>
            <Navbar darkText={true} />
            <main className="min-h-screen bg-brand-soft pt-24 md:pt-32 pb-12">
                <div className="max-w-6xl mx-auto px-6">
                    <Link
                        href={"/"}
                        className="mb-8 flex items-center gap-2 text-base font-medium text-brand-dark hover:text-brand-accent transition-colors"
                    >
                        <MoveLeft className="w-6 h-6" /> Back
                    </Link>

                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark mb-6">
                            Podcast & Talks
                        </h1>
                        <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Stay tuned! We are curating a series of insightful discussions, expert talks, and immersive podcasts exploring the depths of Bharat's civilizational heritage.
                        </p>
                    </div>

                    {/* Featured Video Section */}
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-brand-accent rounded-lg">
                                <Video className="w-6 h-6 text-brand-dark" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark">
                                Featured Talk: Cultural Heritage of India
                            </h2>
                        </div>
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/m8pdQW84j4U"
                                title="Cultural Heritage of India"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-4 text-brand-dark">
                                <Mic className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">Engaging Podcasts</h3>
                            <p className="text-slate-500">Immersive audio journeys through history and tradition.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-warm/10 rounded-full flex items-center justify-center mb-4 text-brand-dark">
                                <Video className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">Expert Talks</h3>
                            <p className="text-slate-500">Video sessions led by renowned researchers and historians.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-dark/10 rounded-full flex items-center justify-center mb-4 text-brand-dark">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">Interactive Sessions</h3>
                            <p className="text-slate-500">Live Q&A and group discussions on civilizational studies.</p>
                        </div>
                    </div>

                    <div className="mt-20 text-center p-12 bg-brand-dark rounded-3xl text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Coming Soon</h2>
                        <p className="text-brand-soft/80 mb-8 max-w-xl mx-auto">
                            Our first episode is in production. Subscribe to our newsletter or follow us on social media to be the first to know when we launch.
                        </p>
                        <Link href="/#contact">
                            <button className="bg-brand-accent text-brand-dark px-10 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors">
                                Notify Me
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PodcastPage;
