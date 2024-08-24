import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image width={40} height={40} src="https://media.istockphoto.com/id/1808025787/photo/portrait-of-a-young-female-tourist-in-front-of-the-giza-pyramids.jpg?s=1024x1024&w=is&k=20&c=fN7NEQmCOz-DsoSjFTnOWSCYjotvGXfzdiCNilCmnKo=" className="rounded-full w-10 h-10" alt="" />
                    <span className="font-medium">Gamal Ahmed</span>
                </div>
                <Image src="/more.png" height={16} width={16} alt="" className="w-4 h-4 cursor-pointer" />
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://cdn.pixabay.com/photo/2018/03/11/19/04/desert-3217765_1280.jpg" fill className="object-cover rounded-md" alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus esse sapiente suscipit dolorem itaque quisquam illo earum assumenda veniam alias praesentium perferendis ab, sit vel! Molestias veritatis placeat quaerat.
                </p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/liked.png" className="cursor-pointer" alt="" height={16} width={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">190</span>
                        <span className="hidden md:inline"> Likes</span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/comment.png" className="cursor-pointer" alt="" height={16} width={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">382</span>
                        <span className="hidden md:inline"> Comment</span>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/share.png" className="cursor-pointer" alt="" height={16} width={16} />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">29</span>
                        <span className="hidden md:inline">Share</span>
                    </div>
                </div>
            </div>
            {/* Comment */}
            <Comments/>
        </div>
    )
}

export default Post