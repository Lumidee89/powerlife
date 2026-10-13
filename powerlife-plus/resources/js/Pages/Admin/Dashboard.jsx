import { motion } from 'framer-motion';
import {
    FiFilm,
    FiUsers,
    FiTrendingUp,
    FiPlayCircle,
} from 'react-icons/fi';
import { Link } from '@inertiajs/react';

export default function Dashboard({ stats, recentMovies }) {
    return (
        <div className="min-h-screen bg-dark text-white flex">
            {/* Sidebar */}
            <aside className="w-[280px] bg-[#241F1C] border-r border-[#3b322d] p-8">
                <h1 className="text-4xl font-bold text-accent mb-14">
                    Powerlife+
                </h1>

                <nav className="space-y-4">
                {[
                    {
                        name: 'Dashboard',
                        href: '/dashboard',
                    },

                    {
                        name: 'Movies',
                        href: '/admin/movies',
                    },

                    {
                        name: 'Categories',
                        href: '/admin/categories',
                    },

                    {
                        name: 'Users',
                        href: '/admin/users',
                    },

                    {
                        name: 'Subscriptions',
                        href: '/admin/subscriptions',
                    },

                    {
                        name: 'Analytics',
                        href: '/admin/analytics',
                    },

                    {
                        name: 'Settings',
                        href: '/admin/settings',
                    },
                ].map((item, index) => (

                    <Link
                        key={index}
                        href={item.href}
                        className="
                            block
                            px-5
                            py-4
                            rounded-2xl
                            bg-[#241F1C]
                            hover:bg-primary
                            transition-all
                            duration-300
                            border
                            border-[#3b322d]
                            hover:border-primary
                            text-[#C8B6A6]
                            hover:text-white
                            font-medium
                        "
                    >
                        {item.name}
                    </Link>

                ))}

            </nav>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-10 overflow-y-auto">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-5xl font-bold mb-2">
                            Dashboard
                        </h2>

                        <p className="text-gray-400">
                            Welcome back, Admin.
                        </p>
                    </div>

                    <Link
                        href="/admin/movies/add"
                        className="bg-primary hover:bg-secondary px-6 py-4 rounded-2xl transition-all duration-300 inline-flex items-center justify-center"
                    >
                        Add New Movie
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#241F1C] border border-[#3b322d] rounded-3xl p-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-accent">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-gray-400 text-lg mb-2">
                                {stat.title}
                            </h3>

                            <p className="text-4xl font-bold">
                                {stat.value}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Movies */}
                <div className="bg-[#241F1C] border border-[#3b322d] rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-bold">
                            Recently Added Movies
                        </h3>

                        <button className="text-accent hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#3b322d] text-left text-gray-400">
                                    <th className="pb-4">Movie</th>
                                    <th className="pb-4">Category</th>
                                    <th className="pb-4">Year</th>
                                    <th className="pb-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {recentMovies.map((movie) => (

                                    <tr
                                        key={movie.id}
                                        className="border-b border-[#2f2926]"
                                    >

                                        <td className="py-6">

                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={movie.thumbnail}
                                                    className="
                                                        w-16
                                                        h-16
                                                        rounded-xl
                                                        object-cover
                                                    "
                                                />

                                                <p>
                                                    {movie.title}
                                                </p>

                                            </div>

                                        </td>

                                        <td className="py-6">
                                            {movie.category}
                                        </td>

                                        <td className="py-6">
                                            {movie.release_year || 'N/A'}
                                        </td>

                                        <td className="py-6">

                                            <span className="
                                                bg-green-700/30
                                                text-green-400
                                                px-4
                                                py-2
                                                rounded-full
                                                text-sm
                                            ">
                                                Published
                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}