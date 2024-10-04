import DashboardCard from '@/components/dashboard/DashboardCard';
import { CreditCard, Folder, House, HousePlus, MessageCircle, Newspaper, User, User2, Users } from 'lucide-react';


export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify gap-5 mb-5'>
        <DashboardCard
          title='House'
          count={2}
          icon={<House className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Tenant'
          count={12}
          icon={<Users className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Payments'
          count={750}
          icon={<CreditCard className='text-slate-500' size={72} />}
        />
      </div>
    </>
  );
}
