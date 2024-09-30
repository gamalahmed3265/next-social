import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu"
import RightMenu from "@/components/rightMenu/RightMenu"
import UserProfileCard from "@/components/UserProfileCard"
import prisma from "@/lib/client";

import { auth } from "@clerk/nextjs/server";

import { notFound } from "next/navigation";



const ProfilePge = async ({ params }: { params: { username: string } }) => {
    const username = params.username
    const user = await prisma.user.findFirst({
        // where: {
        //     username
        // },
        include: {
            _count: {
                select: {
                    followers: true,
                    followings: true,
                    posts: true
                }
            }
        }
    });


    if (!user) return notFound();

    const { userId: currentId } = auth();
    let isBlocked;

    if (currentId) {
        const res = await prisma.block.findFirst({
            where: {
                sendId: user.id,
                receiverId: currentId
            }
        });

        if (res) isBlocked = true;
    } else {
        isBlocked = true;
    }

    if (isBlocked) return notFound();

    return (
        <div className='flex gap-6 pt-6' >
            <div className="hidden xl:block  w-[20%]">
                <LeftMenu type="profile" />
            </div>
            <div className="w-full lg:w-[70%] xl:w-[50%] flex flex-col gap-6">
                <UserProfileCard user={user} />
                <Feed/>
            </div>
            <div className="hidden lg:block  w-[30%]">
                <RightMenu user={user} />
            </div>
        </div>
    )
}

export default ProfilePge