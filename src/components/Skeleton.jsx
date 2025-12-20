import React from 'react';

export const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}></div>
);

export const CardSkeleton = () => (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
        <div className="relative h-48 bg-gray-200 animate-pulse">
            {/* Image placeholder */}
        </div>
        <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-1/4" />
            </div>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="pt-4 flex justify-between items-center">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-8 w-8 rounded-full" />
            </div>
        </div>
    </div>
);

export const DetailSkeleton = () => (
    <div className="min-h-screen bg-white">
        <div className="min-h-screen py-24 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                <Skeleton className="h-6 w-32" /> {/* Back button */}

                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    <div className="relative h-64 md:h-96 bg-gray-200 animate-pulse"></div>
                    <div className="p-8 space-y-6">
                        <Skeleton className="h-6 w-24 rounded-full" />
                        <Skeleton className="h-10 w-3/4" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                        </div>

                        <div className="space-y-4 pt-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const HomeSkeleton = () => {
    return (
        <div className="min-h-screen font-sans bg-black">
            {/* Hero Skeleton (Dark Mode) */}
            <section className="relative h-[90vh] flex items-center justify-center bg-black overflow-hidden border-b border-white/10">
                <div className="w-full max-w-6xl mx-auto px-4 text-center z-10">
                    <div className="h-8 w-64 bg-white/10 rounded-full mx-auto mb-10 animate-pulse"></div>
                    <div className="h-24 w-3/4 md:w-1/2 bg-white/10 rounded-lg mx-auto mb-8 animate-pulse"></div>
                    <div className="h-6 w-full max-w-2xl bg-white/10 rounded mx-auto mb-12 animate-pulse"></div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 inline-block shadow-2xl max-w-4xl w-full">
                        <div className="flex justify-center gap-4 md:gap-8">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`flex flex-col items-center mx-2 md:mx-4 ${i === 4 ? 'hidden md:flex' : ''}`}>
                                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-lg animate-pulse"></div>
                                    <div className="h-4 w-12 bg-white/10 rounded mt-2 animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Sections Skeleton (Light Mode/Mix, dependent on Home theme, Home is bg-white/50 roughly light) */}
            {/* Actually Home.jsx has `bg-white/50`, let's check Home theme. `bg-white/50` wrapper. */}
            <div className="space-y-12 py-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {[1, 2, 3].map((section) => (
                        <div key={section}>
                            <div className="h-8 w-48 bg-gray-300 rounded mb-8 animate-pulse"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[1, 2, 3].map((i) => (
                                    <CardSkeleton key={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
