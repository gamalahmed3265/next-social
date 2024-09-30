
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
    return (
        <>
            <button className="w-full rounded-md text-sm bg-blue-500 text-white p-2">{isUserFollower ? "Following" : isUserrFollowingSent ? "isUserrFollowingSent" : "Following"}</button>
            <span className="text-red-400 flex self-end text-sx cursor-pointer">{isUserBlocked ? "UnBlock user" : "Block user"}</span>

        </>
    )
}

export default UserInfoCardInteraction