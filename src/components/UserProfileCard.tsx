import Image from "next/image"
import { User } from "@prisma/client";

const UserProfileCard = ({user}:{user: User}) => {

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="w-full h-64 relative">
                <Image src={user.cover || "noAvatar.png"} alt="" className="rounded-md object-cover" fill />
                <Image src={user.avater || "noAvatar.png"} alt="" className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10" width={128} height={128} />
            </div>
            <div className="mt-20 mb-6 flex flex-col gap-2 h-24 items-center">
                <span className="font-semibold text-2xl ">{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</span>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center text-xs">
                        <span className="font-medium">{`${user._count.posts}`}</span>
                        <span className="text-sm">Posts</span>
                    </div>
                    <div className="flex flex-col items-center  text-xs ">
                        <span className="font-medium">{`${user._count.followers}`}</span>
                        <span className="text-sm">Followers</span>
                    </div>
                    <div className="flex flex-col items-center  text-xs ">
                        <span className="font-medium">{`${user._count.followings}`}</span>
                        <span className="text-sm">Followering</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserProfileCard