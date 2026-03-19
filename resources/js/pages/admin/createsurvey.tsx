import { Head, useForm } from '@inertiajs/react';
import React, { Component, createRef, useEffect, useCallback, useRef  } from "react";
import AppLayout from '@/layouts/app-layout';
import { surveyadd, surveystore } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Survey Form',
        href: surveyadd(),
    },
];

export default function CreateSurvey(  ) {
    const checkboxRef = useRef(null);

    const handleJQueryClick = useCallback(() => {
        setData( 'isForTemplate', jQuery('#checkbox-template').is('checked') );
        jQuery('#formbuildercanvas').submit();
    }, []); 

    useEffect(() => {
        jQuery('#formBuilerKo').formBuilder();
        setTimeout(() => {
            jQuery('button.save-template').on('click', handleJQueryClick);
        }, 3000);
        
        return () => {
            jQuery('button.save-template').off('click', handleJQueryClick);
        };
    }, [handleJQueryClick]);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        isForTemplate : '',
        formJson: ''
    });

    const handleSubmit = (e :any) => {
        e.preventDefault();
        post(surveystore().url);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <form id="formbuildercanvas" onSubmit={handleSubmit} method="POST">
                <div className="flex items-start sm:items-center p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft border border-danger-subtle" role="alert">
                    <svg className="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                    <p><span className="font-medium me-1">Danger alert!</span> Change a few things up and try submitting again.</p>
                </div>

                <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-2">
                    <div className="sm:col-span-3">
                        <label className="block text-sm/6 font-medium text-gray-900">Name</label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input id="survey" type="text" name="surveyname" placeholder="Survey Name" onChange={(e) => setData('name', e.target.value)}  className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center ps-3">
                        <input id="checkbox-template" type="checkbox" value="1" ref={checkboxRef}  className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" />
                        <label  className="w-full py-3 ms-2 text-sm font-medium text-heading">Save as a template?</label>
                    </div>
                </div>
                
               <div id="formBuilerKo"></div>
               </form>
            </div>
        </AppLayout>
    );
}

