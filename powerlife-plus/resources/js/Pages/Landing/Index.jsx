import { motion } from 'framer-motion';
import { Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function LandingPage() {

    const { props } = usePage();

    const user = props.auth?.user;

    useEffect(() => {
        if (props.flash?.success) {
            toast.success(props.flash.success);
        }
    }, [props.flash]);

    return (
        <div className="bg-dark min-h-screen text-white overflow-hidden">

            {/* Navbar */}
            <nav className="flex items-center justify-between px-8 py-6">

                <h1 className="text-3xl font-bold text-accent">
                    Powerlife+
                </h1>

                <div className="flex items-center gap-4">

                    {user ? (
                        <div className="flex items-center gap-3 bg-[#241F1C] px-5 py-3 rounded-full border border-[#3b322d]">

                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                                {user.name.charAt(0)}
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Welcome
                                </p>

                                <p className="font-semibold text-white">
                                    {user.name}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="px-5 py-2 rounded-full border border-accent hover:bg-accent hover:text-dark transition"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/register"
                                className="px-5 py-2 rounded-full bg-primary hover:bg-secondary transition"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Hero */}
            <section className="grid lg:grid-cols-2 gap-10 items-center px-8 lg:px-20 py-20">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        Stream Movies.
                        <span className="text-accent block">
                            Experience Stories.
                        </span>
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Discover premium movies, inspirational stories,
                        trending entertainment, and cinematic experiences
                        all in one place.
                    </p>

                    <div className="flex gap-4">

                        <Link
                            href="/register"
                            className="bg-primary hover:bg-secondary px-8 py-4 rounded-full text-lg transition"
                        >
                            Start Watching
                        </Link>

                        <button className="border border-accent px-8 py-4 rounded-full hover:bg-accent hover:text-dark transition">
                            Watch Trailer
                        </button>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >

                    <img
                        src="/images/hero-movie.jpg"
                        alt="movie"
                        className="rounded-3xl shadow-2xl"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent rounded-3xl"></div>

                </motion.div>
            </section>

            {/* Features */}
            <section className="px-8 lg:px-20 py-20 bg-[#241F1C]">

                <div className="grid md:grid-cols-3 gap-8">

                    {[
                        'Unlimited Streaming',
                        'Watch Anywhere',
                        'Personalized Recommendations',
                    ].map((feature, index) => (

                        <div
                            key={index}
                            className="bg-dark p-8 rounded-3xl border border-[#3b322d]"
                        >

                            <h3 className="text-2xl font-semibold mb-4 text-accent">
                                {feature}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                Enjoy immersive cinematic experiences across all your devices.
                            </p>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}