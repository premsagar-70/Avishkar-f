import React from 'react';
import { Target, Zap, Users, Trophy, Lightbulb, Rocket } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <div className="relative py-24 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 opacity-50"></div>
                {/* Abstract shapes/blobs could go here for "crazy background" feel if desired, keeping it clean but elegant for now */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Avishkar</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Where innovation meets tradition. The ultimate convergence of technology, culture, and creativity.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Our Story */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Rocket className="text-blue-600" /> The Journey
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Avishkar began as a humble initiative to bring together bright minds from across the region. Over the years, it has evolved into a massive techno-cultural phenomenon, attracting thousands of participants, industry experts, and creative talents.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            It is not just a fest; it's a celebration of engineering excellence, artistic expression, and the unyielding spirit of youth. From coding marathons to mesmerizing dance battles, Avishkar is the stage where legends are born.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                        <img
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                            alt="Collaboration"
                            className="relative rounded-2xl shadow-xl border border-gray-100"
                        />
                    </div>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                        <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                            <Lightbulb size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                        <p className="text-gray-600">
                            Pushing the boundaries of what's possible through cutting-edge technical competitions and hackathons.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                        <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                            <Target size={28} className="text-purple-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                        <p className="text-gray-600">
                            Striving for perfection in every event, ensuring a world-class experience for all participants.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                        <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors duration-300">
                            <Users size={28} className="text-pink-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                        <p className="text-gray-600">
                            Building connecting bridges between students, professionals, and alumni to foster lifelong network.
                        </p>
                    </div>
                </div>

                {/* Stats Section (Optional) */}
                {/* <div className="bg-gray-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">50+</div>
                            <div className="text-gray-400 uppercase tracking-widest text-sm">Events</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">5000+</div>
                            <div className="text-gray-400 uppercase tracking-widest text-sm">Footfall</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">10+</div>
                            <div className="text-gray-400 uppercase tracking-widest text-sm">Sponsors</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">₹2L+</div>
                            <div className="text-gray-400 uppercase tracking-widest text-sm">Prizes</div>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    );
};

export default About;
