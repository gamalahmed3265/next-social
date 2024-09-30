import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import UserInfoCardInteraction from "./UserInfoCardInteraction";

const UserInfo = async ({ user }: { user: User }) => {
    console.log(user.createdAt);
    const createAtDate = new Date(user.createdAt);
    const formaterDate = createAtDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
    let isUserBlocked;
    let isUserFollower;
    let isUserrFollowingSent;

    const { userId: currentUserId } = auth();

    if (currentUserId) {
        const blocUser = await prisma.block.findFirst({
            where: {
                sendId: currentUserId,
                receiverId: user.id
            },
        })
        blocUser ? (isUserBlocked = true) : (isUserBlocked = false)
    }

    if (currentUserId) {
        const followerUser = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: user.id
            },
        })
        followerUser ? (isUserFollower = true) : (isUserFollower = false)
    }

    if (currentUserId) {
        const followingSentUser = await prisma.followerRequest.findFirst({
            where: {
                sendId: currentUserId,
                receiverId: user.id
            },
        })
        followingSentUser ? (isUserrFollowingSent = true) : (isUserrFollowingSent = false)
    }
    return (
        <div className='rounded-lg bg-white p-4 shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>User Infomation</span>
                <Link href="/" className='text-blue-500 text-xs'>see all</Link>
            </div>
            <div className="flex items-center gap-2">
                <h2 className="text-xl text-block">{(user.name && user.surname) ? user.name + " " + user.surname : user.username}</h2>
                <span className="text-gray-500 text-sm">{user.username}</span>
            </div>
            {user.descripation &&
                <p className="text-gray-500">{user.descripation}</p>
            }
            {user.city &&
                <div className="flex gap-2">
                    <Image src="/map.png" alt="" className="w-4 h-4" width={16} height={16} />
                    <span className="text-gray-500">
                        Linving in <span className="font-bold">{user.city}</span>
                    </span>
                </div>
            }
            {user.school &&
                <div className="flex gap-2">
                    <Image src="/school.png" alt="" className="w-4 h-4" width={16} height={16} />
                    <span className="text-gray-500">
                        went to <span className="font-bold">{user.school}</span>
                    </span>
                </div>
            }
            {user.work &&
                <div className="flex gap-2">
                    <Image src="/work.png" alt="" className="w-4 h-4" width={16} height={16} />
                    <span className="text-gray-500">
                        works at <span className="font-bold">{user.work}</span>
                    </span>
                </div>
            }
            <div className="flex items-center justify-between">
                {user.website &&
                    <div className="flex">
                        <Image src="/link.png" alt="" className="w-4 h-4" width={16} height={16} />
                        <Link href="/gamal" className="text-blue-500 font-medium">{user.website}</Link>
                    </div>}
                <div className="flex text-gray-500">
                    <Image src="/date.png" alt="" className="w-4 h-4" width={16} height={16} />
                    <span>
                        Joined at {formaterDate}
                    </span>
                </div>
            </div>
            <UserInfoCardInteraction
            userId={user.id}
            currentUserId={currentUserId}
            isUserBlocked={isUserBlocked}
            isUserFollower={isUserFollower}
            isUserrFollowingSent={isUserrFollowingSent}
            />
        </div>
    )
}

export default UserInfo