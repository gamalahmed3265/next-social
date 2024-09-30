import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"

const ProfileCard = async() => {
    const {userId}=auth();
    if(!userId)return;

    const user=await prisma.user.findFirst({
        where:{
            id:userId
        },
        include:{
            _count:{
                select:{
                    followers:true
                }
            }
        }
    })

    if(!user)return null;
    return (
        <div className="p-2 rounded-lg bg-white shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image src={user.cover||"noAvatar.png"} alt="" className="rounded-md" fill />
                <Image src={user.avater||"noAvatar.png"}  alt="" className="w-12 h-12 rounded-full absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10" width={48} height={48} />
            </div>
            <div className="flex flex-col gap-2 h-24 items-center">
                <span className="font-semibold">{(user.name&&user.surname)?user.name+" "+user.surname:user.username}</span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Image src="/courses.png" alt="" className="w-3 h-3 rounded-full object-cover " width={12} height={12} />
                        <Image src="/courses.png" alt="" className="w-3 h-3 rounded-full object-cover " width={12} height={12} />
                        <Image src="/courses.png" alt="" className="w-3 h-3 rounded-full object-cover " width={12} height={12} />
                    </div>
                    <span className="text-xs text-gray-500">{user._count.followers} Followers</span>
                </div>
                <button  className="bg-blue-500 text-white text-xs rounded-md w-fit p-2">
                    MyProfile
                </button>
            </div>
        </div>
    )
}

export default ProfileCard