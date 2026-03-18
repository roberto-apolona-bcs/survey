import { Head } from '@inertiajs/react';
import React, { Component, createRef, useEffect } from "react";
import AppLayout from '@/layouts/app-layout';
import { surveyadd } from '@/routes';
import type { BreadcrumbItem } from '@/types';



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Survey Form',
        href: surveyadd(),
    },
];

let firstRun = true;

export default function Dashboard(  ) {
    useEffect(() => {
        if (firstRun) {
            firstRun = false;
            jQuery('#formBuilerKo').formBuilder();
        }
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
               <div id="formBuilerKo"></div>
            </div>
        </AppLayout>
    );
}
