import { useState } from 'react';

import { router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import toast from 'react-hot-toast';

export default function AddMovie() {

    const [data, setData] = useState({
        title: '',
        description: '',
        category: '',
        featured: false,
    });

    const [thumbnail, setThumbnail] =
        useState(null);

    const [video, setVideo] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        setLoading(true);

        const formData = new FormData();

        formData.append(
            'title',
            data.title
        );

        formData.append(
            'description',
            data.description
        );

        formData.append(
            'category',
            data.category
        );

        formData.append(
            'featured',
            data.featured ? 1 : 0
        );

        formData.append(
            'thumbnail',
            thumbnail
        );

        formData.append(
            'video',
            video
        );

        router.post(
            '/admin/movies',
            formData,
            {
                forceFormData: true,

                onSuccess: () => {

                    toast.success(
                        'Movie uploaded successfully'
                    );

                    setData({
                        title: '',
                        description: '',
                        category: '',
                        featured: false,
                    });

                    setThumbnail(null);

                    setVideo(null);

                    setLoading(false);
                },

                onError: (errors) => {

                    console.log(errors);

                    toast.error(
                        'Upload failed'
                    );

                    setLoading(false);
                },
            }
        );
    };

    return (
        <AdminLayout>
        <div className="min-h-screen bg-[#1E1A17] text-white px-8 py-12">

            <div className="max-w-4xl mx-auto">

                <h1 className="text-5xl font-bold mb-12">
                    Upload Movie
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    encType="multipart/form-data"
                >

                    <input
                        type="text"
                        placeholder="Movie title"
                        value={data.title}
                        onChange={(e) =>
                            setData({
                                ...data,
                                title:
                                    e.target.value,
                            })
                        }
                        className="w-full h-16 rounded-2xl bg-[#241F1C] border border-[#3b322d] px-6 outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={data.category}
                        onChange={(e) =>
                            setData({
                                ...data,
                                category:
                                    e.target.value,
                            })
                        }
                        className="w-full h-16 rounded-2xl bg-[#241F1C] border border-[#3b322d] px-6 outline-none"
                    />

                    <textarea
                        placeholder="Movie description"
                        value={data.description}
                        onChange={(e) =>
                            setData({
                                ...data,
                                description:
                                    e.target.value,
                            })
                        }
                        className="w-full h-44 rounded-2xl bg-[#241F1C] border border-[#3b322d] p-6 outline-none resize-none"
                    />

                    <div>

                        <p className="mb-3 text-[#C8B6A6]">
                            Thumbnail
                        </p>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setThumbnail(
                                    e.target.files[0]
                                )
                            }
                        />

                    </div>

                    <div>

                        <p className="mb-3 text-[#C8B6A6]">
                            Video
                        </p>

                        <input
                            type="file"
                            accept="video/*"
                            onChange={(e) =>
                                setVideo(
                                    e.target.files[0]
                                )
                            }
                        />

                    </div>

                    <div className="flex items-center gap-4">

                        <input
                            type="checkbox"
                            checked={data.featured}
                            onChange={() =>
                                setData({
                                    ...data,
                                    featured:
                                        !data.featured,
                                })
                            }
                        />

                        <p>
                            Featured Movie
                        </p>

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            h-16
                            rounded-2xl
                            bg-primary
                            hover:bg-secondary
                            transition-all
                            duration-300
                            font-semibold
                        "
                    >

                        {loading
                            ? 'Uploading...'
                            : 'Upload Movie'}

                    </button>
                </form>
            </div>
        </div>
        </AdminLayout>
    );
}