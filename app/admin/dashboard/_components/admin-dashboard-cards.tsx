import Card from '@/components/card'
import { UsersIcon } from 'lucide-react'



const AdminDashboardCards = () => {
  return (
    <div className='flex gap-3 flex-wrap justify-evenly'>
        <Card className='flex flex-col gap-4' icon={UsersIcon} label="Total Students">
         
          <span className='font-bold text-5xl'>100</span>
        </Card>
        <Card className=''>
            TEST
        </Card>
        <Card className=''>
            TEST
        </Card>
    </div>
  )
}

export default AdminDashboardCards