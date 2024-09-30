"use client";
import { switchFollow } from "@/lib/actions";
import { useState } from "react";

const UserInfoCardInteraction = ({
    userId,
    currentUserId,
    isUserBlocked,
    isUserFollower,
    isUserrFollowingSent,
}: {
    userId: string;
    currentUserId: string;
    isUserBlocked: boolean;
    isUserFollower: boolean;
    isUserrFollowingSent: boolean;
}) => {
    const [userState, setUserState] = useState({
        blocked: isUserBlocked,
        folloewer: isUserFollower,
        following: isUserrFollowingSent
    });

    const follow=async()=>{
        try {
            await switchFollow(userId);
            setUserState(prev=>({
                ...prev,
                following:prev.following&&false,
                folloewer:!prev.following&&!prev.folloewer?true:false
            }))
        } catch (error) {
            
        }
    }

    return (
        <>
            <form action={follow}>
                <button className="w-full rounded-md text-sm bg-blue-500 text-white p-2">{userState.folloewer ? "Following" : userState.following ? "isUserrFollowingSent" : "Following"}</button>
            </form>
            <form action="" className="self-end ">
                <span className="text-red-400 flex text-sx cursor-pointer">{userState.blocked ? "UnBlock user" : "Block user"}</span>
            </form>
        </>
    )
}

export default UserInfoCardInteraction