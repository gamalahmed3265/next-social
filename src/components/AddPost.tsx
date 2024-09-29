import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"

const AddPost = () => {

  const {userId}=auth();
  const testAction=async(formData:FormData)=>{
    "use server"

    if(!userId) return;
    try{
      const desc=formData.get("desc") as string;
      
      const res=await prisma.post.create({
        data:{
          userId:userId,
          desc:desc
        }
      });
      
      console.log("*".repeat(90));
      console.log(res);
      console.log("*".repeat(90));
      
    }catch(err){
      console.log(err);
      
    }
    
  }
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avaterr */}
      <div className="">
        <Image src="https://media.istockphoto.com/id/1278518477/photo/the-camel-caravan-is-in-front-of-the-egyptian-pyramids.jpg?s=612x612&w=is&k=20&c=m1dVzbl9PLy0n7lANdnNUwBSPlnwQIWlbzAY_AIFtm0=" className="w-12 h-12 object-cover rounded-full" width={48} height={48} alt=""/>
      </div>
      {/* Add Post */}
      <div className="flex-1">
        {/* Text Input */}
        <form action={testAction} className="flex gap-4">
          <textarea name="desc" placeholder="What`s Your Mind" className="bg-slate-100 rounded-lg p-2 flex-1" id=""></textarea>
          <Image src="/emoji.png" className="w-5 h-5 cursor-pointer self-end" width={20} height={20} alt=""/>
          <button>Send</button>
        </form>
        {/* Post Options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20}/>
            Image
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20}/>
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20}/>
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/events.png" alt="" width={20} height={20}/>
            Events
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost