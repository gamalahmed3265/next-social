import Image from "next/image"
import Link from "next/link"

const UserInfo = ({ userrId }: { userrId?: string }) => {
    return (
        <div className='rounded-lg bg-white p-4 shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>User Infomation</span>
                <Link href="/" className='text-blue-500 text-xs'>see all</Link>
            </div>
            <div className="flex items-center gap-2">
                <h2 className="text-xl text-block">Gamal Ahmed</h2>
                <span className="text-gray-500 text-sm">@gmail.com</span>
            </div>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className="flex gap-2">
                <Image src="/map.png" alt="" className="w-4 h-4" width={16} height={16} />
                <span className="text-gray-500">
                    Linving in <span className="font-bold">Egypt</span>
                </span>
            </div>
            <div className="flex gap-2">
                <Image src="/school.png" alt="" className="w-4 h-4" width={16} height={16} />
                <span className="text-gray-500">
                    went to <span className="font-bold">high school</span>
                </span>
            </div>
            <div className="flex gap-2">
                <Image src="/work.png" alt="" className="w-4 h-4" width={16} height={16} />
                <span className="text-gray-500">
                    works at <span className="font-bold">Apple Com</span>
                </span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex">
                    <Image src="/link.png" alt="" className="w-4 h-4" width={16} height={16} />
                    <Link href="/gamal" className="text-blue-500 font-medium">gamal.html</Link>
                </div>
                <div className="flex text-gray-500">
                    <Image src="/date.png" alt="" className="w-4 h-4" width={16} height={16} />
                    <span>
                        Joined at novermer 2024
                    </span>
                </div>
            </div>
            <button className="rounded-md text-sm bg-blue-500 text-white p-2">Following</button>
            <span className="text-red-400 flex self-end text-sx cursor-pointer">Block user</span>
        </div>
    )
}

export default UserInfo