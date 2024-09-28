import Image from "next/image"
import { UsserModelFriendRequest } from "./FriendRequest"
import Link from "next/link"

const BirthDays = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className='rounded-lg bg-white p-4 shadow-md text-sm flex flex-col gap-4'>
      <span className='text-gray-500'>BirthDays</span>
      <UserBirthDays img="https://images.pexels.com/photos/5588224/pexels-photo-5588224.jpeg?auto=compress&cs=tinysrgb&w=600" name="Tony Schnagl"/>
      <div className="flex items-center gap-4 rounded-lg bg-slate-50 p-4 shadow-md">
        <Image src="/gift.png" alt="" width={24} height={24} className="w-6  h-6"/>
        <Link href="/" className="flex flex-col text-xs gap-1">
          <h2 className="text-gray-700">UPCOMMING BIRTHDAYS</h2>
          <p className="text-sm text-gray-500">see other 16 have upcomme BirthDays</p>
        </Link>
      </div>
    </div>
  )
}
const UserBirthDays:React.FC<UsserModelFriendRequest> = ({img,name}) => {
  return (
    <div className='flex justify-between items-center'>
    {/* User */}
    <div className='flex justify-center items-center gap-2'>
        <Image src={img} alt='Person in window' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
        <span>{name}</span>
    </div>
    <span className="rounded-md bg-blue-500 px-2 py-1 shadow-md text-xs text-white cursor-pointer">Congratulate</span>
</div>
  )
}

export default BirthDays