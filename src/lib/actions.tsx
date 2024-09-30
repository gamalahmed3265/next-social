import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const switchFollow =async (userId:string) => {
    const {userId:currentId}=auth();

    if(!currentId){
        return new Error("User not Authenticated");
    }
    try {
        const existingFollower=await prisma.follower.findFirst({
            where:{
                followerId:currentId,
                followingId:userId
            }
        });
        if(existingFollower){
            await prisma.follower.delete({
                where:{
                    id:existingFollower.id
                }
            });
        }else{
            const existingFollowerRequest=await prisma.followerRequest.findFirst({
                where:{
                    sendId:currentId,
                    receiverId:userId
                }
            });
            if(existingFollowerRequest){
                await prisma.followerRequest.delete({
                    where:{
                        id:existingFollowerRequest.id
                    }
                });
            }else{
                await prisma.followerRequest.create({
                    data:{
                        sendId:currentId,
                        receiverId:userId
                    }
                });
            }
        }
    } catch (error) {
        return new Error("Something went wrong");
    }
}
