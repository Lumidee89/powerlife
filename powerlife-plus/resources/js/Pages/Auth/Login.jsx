import { Head, Link, useForm } from '@inertiajs/react';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <>
      <Head title="Login" />

      <div className="min-h-screen flex items-center justify-center bg-dark px-6">
        <div className="w-full max-w-md bg-[#241F1C] p-10 rounded-3xl border border-[#3b322d] shadow-2xl">
          <h1 className="text-4xl font-bold text-accent mb-8 text-center">
            Powerlife+
          </h1>

          <form onSubmit={submit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="w-full bg-dark border border-[#3b322d] rounded-2xl px-5 py-4 text-white"
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                className="w-full bg-dark border border-[#3b322d] rounded-2xl px-5 py-4 text-white"
              />
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-primary hover:bg-secondary transition py-4 rounded-2xl text-white font-semibold"
            >
              Login
            </button>

            <div className="text-center text-gray-400">
              Don’t have an account?

              <Link
                href="/register"
                className="text-accent ml-2"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}