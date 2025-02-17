'use client'
import Navbar from './navbar'
import Searchbar from './searchbar'
import Users from './Users'
import ProfileSummary from './activeprofile'
import AttendanceTable from './chart'
 
const Landing = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Searchbar />
      <div className="p-0 m-0 flex flex-row">
        <Users />
        <div className='flex flex-col'>
        <ProfileSummary />
        <AttendanceTable />
        </div>
      </div>    
    </div>
  )
}

export default Landing