import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

const options = {
  chart: {
    type: 'line',
    height: 350
  },
  series: [{
    name: 'Sales',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  }
};

export default function Dashboard( { salesData } ) {
      // Prepare chart data
  const labels = salesData.map(item => item.month);
  const totals = salesData.map(item => item.total);

  
  const data = {
    labels,
    datasets: [
      {
        label: 'Monthly Sales',
        data: totals,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Sales Overview' }
    }
  };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">


                    <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-brand-softer text-fg-brand-strong">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900">Surveys</h5>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <Line data={data} options={options} />
                        </div>
                        <p className="text-5xl font-extrabold text-gray-900">12</p>
                        <p className="text-sm text-green-600 font-medium mt-1">Active Surveys</p>
                    </div>





                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    

<div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <div className="p-4 flex items-center justify-between space-x-4">
        <label className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>
            <input type="text" id="input-group-1" className="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search"></input>
        </div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="shrink-0 inline-flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none" type="button">
            <svg className="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/></svg>
            Filter by
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>

        <div id="dropdown" className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32">
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Color</a>
            </li>
            <li>
                <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Category</a>
            </li>
            <li>
                <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Price</a>
            </li>
            <li>
                <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
            </li>
            </ul>
        </div>
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input name="" id="table-checkbox-20" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                        <label className="sr-only">Table checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="table-checkbox-21" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                        <label className="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="table-checkbox-22" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                        <label className="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="table-checkbox-23" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                        <label className="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="table-checkbox-24" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                        <label className="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple Watch
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $179
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="table-checkbox-25" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                        <label className="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    iPad
                </th>
                <td className="px-6 py-4">
                    Gold
                </td>
                <td className="px-6 py-4">
                    Tablet
                </td>
                <td className="px-6 py-4">
                    $699
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="table-checkbox-26" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                        <label className="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple iMac 27"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    PC Desktop
                </td>
                <td className="px-6 py-4">
                    $3999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

                </div>
            </div>
        </AppLayout>
    );
}
