import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type UsserModelFriendRequest={
    img:string;
    name:string;
}

const FriendRequest = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className='rounded-lg bg-white p-4 shadow-md text-sm flex flex-col gap-4'>
        {/* TOP */}
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>Friend Request</span>
            <Link href="/" className='text-blue-500 text-xs'>see all</Link>
        </div>
        <UserFriendRequest img="https://images.pexels.com/photos/5588224/pexels-photo-5588224.jpeg?auto=compress&cs=tinysrgb&w=600" name="Tony Schnagl"/>
        <UserFriendRequest img="https://images.pexels.com/photos/27741900/pexels-photo-27741900/free-photo-of-woman-lying-down-at-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" name="Maria Soltan"/>
        <UserFriendRequest img="https://images.pexels.com/photos/5661644/pexels-photo-5661644.jpeg?auto=compress&cs=tinysrgb&w=600" name="Rich Ortiz"/>
        <UserFriendRequest img="https://images.pexels.com/photos/5199747/pexels-photo-5199747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name="Tony Schnagl"/>
    </div>
    )
}

const UserFriendRequest:React.FC<UsserModelFriendRequest> = ({img,name}) => {
  return (
    <div className='flex justify-between items-center'>
    {/* User */}
    <div className='flex justify-center items-center gap-2'>
        <Image src={img} alt='Person in window' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
        <span>{name}</span>
    </div>
    <div className='flex justify-between items-center gap-2'>
        <Image alt='' src="/accept.png" width={20} height={20} className='w-5 h-5 rounded-full object-cover cursor-pointer'/>
        <Image alt='' src="/reject.png" width={20} height={20} className='w-5 h-5 rounded-full object-cover cursor-pointer'/>
    </div>
</div>
  )
}

export default FriendRequest