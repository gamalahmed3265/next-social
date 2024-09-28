import Image from "next/image"

const ProfileCard = () => {
    return (
        <div className="p-2 rounded-lg bg-white shadow-md text-sm flex flex-col gap-6">
            <div className="h-20 relative">
                <Image src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="rounded-md" fill />
                <Image src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-12 h-12 rounded-full absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10" width={48} height={48} />
            </div>
            <div className="flex flex-col gap-2 h-24 items-center">
                <span className="font-semibold">Andrea Piacquadio </span>
                <div className="flex items-center gap-4">
                    <div className="flex">
                        <Image src="/courses.png" alt="" className="w-3 h-3 rounded-full object-cover " width={12} height={12} />
                        <Image src="/courses.png" alt="" className="w-3 h-3 rounded-full object-cover " width={12} height={12} />
                        <Image src="/courses.png" alt="" className="w-3 h-3 rounded-full object-cover " width={12} height={12} />
                    </div>
                    <span className="text-xs text-gray-500">500 Followers</span>
                </div>
                <button  className="bg-blue-500 text-white text-xs rounded-md w-fit p-2">
                    MyProfile
                </button>
            </div>
        </div>
    )
}

export default ProfileCard