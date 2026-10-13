import { Link } from '@inertiajs/react';

import AdminLayout from '@/Layouts/AdminLayout';

export default function Movies({
    movies,
}) {

    return (
        <AdminLayout>

            <div className="flex items-center justify-between mb-10">

                <div>

                    <h1 className="text-5xl font-bold">
                        Movies
                    </h1>

                    <p className="text-[#C8B6A6] mt-3">
                        Manage uploaded movies
                    </p>

                </div>

                <Link
                    href="/admin/movies/add"
                    className="
                        bg-primary
                        hover:bg-secondary
                        px-6
                        py-4
                        rounded-2xl
                        transition-all
                        duration-300
                        font-semibold
                    "
                >
                    Add Movie
                </Link>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

                {movies.map((movie) => (

                    <div
                        key={movie.id}
                        className="
                            bg-[#241F1C]
                            rounded-3xl
                            overflow-hidden
                            border
                            border-[#3b322d]
                        "
                    >

                        <img
                            src={movie.thumbnail}
                            className="
                                w-full
                                h-72
                                object-cover
                            "
                        />

                        <div className="p-6">

                            <h2 className="text-2xl font-bold mb-3">
                                {movie.title}
                            </h2>

                            <p className="text-[#C8B6A6] line-clamp-3">
                                {movie.description}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </AdminLayout>
    );
}