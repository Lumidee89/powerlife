import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />

            <div className="min-h-screen bg-dark flex items-center justify-center px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-lg bg-[#241F1C] border border-[#3b322d] rounded-[30px] p-10 shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-5xl font-bold text-accent mb-3">
                            Powerlife+
                        </h1>

                        <p className="text-gray-400 text-lg">
                            Create your streaming account
                        </p>
                    </div>
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label className="text-sm text-gray-300 block mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="John Doe"
                                className="w-full bg-dark border border-[#3b322d] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent"
                            />

                            {errors.name && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="text-sm text-gray-300 block mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="example@email.com"
                                className="w-full bg-dark border border-[#3b322d] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent"
                            />

                            {errors.email && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm text-gray-300 block mb-2">
                                Password
                            </label>
                        <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="********"
                                className="w-full bg-dark border border-[#3b322d] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent"
                            />

                            {errors.password && (
                                <p className="text-red-400 text-sm mt-2">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm text-gray-300 block mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                placeholder="********"
                                className="w-full bg-dark border border-[#3b322d] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-primary hover:bg-secondary transition-all duration-300 py-4 rounded-2xl text-white font-semibold text-lg"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="text-center mt-8 text-gray-400">
                        Already have an account?

                        <Link
                            href="/login"
                            className="text-accent ml-2 font-semibold"
                        >
                            Sign In
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    );
}