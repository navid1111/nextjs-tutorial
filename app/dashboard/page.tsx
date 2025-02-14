import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from '../lib/data';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';


const page = async () => {
  const{
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices

  }=await fetchCardData()
  const revenue = await fetchRevenue();
  const latestInvoices=await fetchLatestInvoices();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>DashBoard</h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Card title='Collected' value={totalPaidInvoices} type='collected' />
        <Card title='Pending' value={totalPendingInvoices} type='pending' />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={numberOfCustomers} type="customers" />
      </div>
      <div className='mt-6 flex flex-col gap-6 md:flex-row lg:flex-row'>
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices}/>
      </div>
    </main>
  );
}

export default page;
