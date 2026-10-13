import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({
    children,
}) {

    const { url } = usePage();

    const navItems = [
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
    ];

    return (
        <div className="min-h-screen bg-[#1E1A17] text-white flex">

            {/* Sidebar */}

            <aside className="w-[280px] bg-[#241F1C] border-r border-[#3b322d] p-8">
                <h1 className="text-4xl font-bold text-accent mb-14">
                    Powerlife+
                </h1>


                <nav className="space-y-4">

                    {navItems.map((item) => (

                        <Link
                            key={item.name}
                            href={item.href}
                            className={`
                                block
                                px-5
                                py-4
                                rounded-2xl
                                transition-all
                                duration-300
                                border
                                font-medium

                                ${
                                    url.startsWith(
                                        item.href
                                    )
                                        ? `
                                            bg-primary
                                            border-primary
                                            text-white
                                          `
                                        : `
                                            bg-[#1E1A17]
                                            border-[#3b322d]
                                            text-[#C8B6A6]
                                            hover:bg-primary
                                            hover:text-white
                                          `
                                }
                            `}
                        >

                            {item.name}

                        </Link>

                    ))}

                </nav>

            </aside>

            {/* Main Content */}

            <main className="flex-1 p-10 overflow-y-auto">

                {children}

            </main>

        </div>
    );
}