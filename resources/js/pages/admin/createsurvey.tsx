import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { surveyadd } from '@/routes';
import type { BreadcrumbItem } from '@/types';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Survey Form',
        href: surveyadd(),
    },
];


export default function Dashboard(  ) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
               <div id="fb-editor"></div>
            </div>
        </AppLayout>
    );
}
