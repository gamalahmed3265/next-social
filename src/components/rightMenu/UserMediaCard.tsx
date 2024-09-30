import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({user}:{user: User})  => {
    return (
        <div className='rounded-lg bg-white p-4 shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>User Media</span>
                <Link href="/" className='text-blue-500 text-xs'>see all</Link>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/28374775/pexels-photo-28374775/free-photo-of-serene-urban-courtyard-with-archway-and-foliage.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/18923568/pexels-photo-18923568/free-photo-of-teapot-on-a-tree-trunk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/28297576/pexels-photo-28297576/free-photo-of-a-forest-with-many-trees-and-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/28572713/pexels-photo-28572713/free-photo-of-modern-building-with-vertical-gardens-and-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/24871914/pexels-photo-24871914/free-photo-of-red-poppies-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/28441116/pexels-photo-28441116/free-photo-of-hikers-exploring-dolomites-in-trentino-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="object-cover rounded-md" fill />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/27200831/pexels-photo-27200831/free-photo-of-a-laptop-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="object-cover rounded-md" fill />
                </div>
                
            </div>
        </div>
    )
}

export default UserMediaCard