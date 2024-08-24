import Image from "next/image"
import Comment from "./Comment"

const Comments = () => {
    return (
        <div className="">
            {/* Write */}
            <div className="flex items-center justify-between gap-4">
                <Image src="https://media.istockphoto.com/id/1278518477/photo/the-camel-caravan-is-in-front-of-the-egyptian-pyramids.jpg?s=612x612&w=is&k=20&c=m1dVzbl9PLy0n7lANdnNUwBSPlnwQIWlbzAY_AIFtm0=" className="w-8 h-8 object-cover rounded-full" width={32} height={32} alt="" />
                {/* Add Post */}
                <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input name="" placeholder="Write a Comment" className="bg-transparent outline-none flex-1" id=""></input>
                    <Image src="/emoji.png" className="cursor-pointer" width={16} height={16} alt="" />
                </div>
            </div>

            {/* Comments */}
            <div className="">
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </div>
    )
}

export default Comments