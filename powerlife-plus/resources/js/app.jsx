import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

const appName = import.meta.env.VITE_APP_NAME || 'Powerlife+';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        ),

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                            background: '#241F1C',
                            color: '#fff',
                            border: '1px solid #3b322d',
                        },
                    }}
                />

                <App {...props} />
            </>
        );
    },

    progress: {
        color: '#D4A373',
    },
});