import Image from "next/image"

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className='rounded-lg bg-white p-4 shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium text-gray-500'>
                <span>Sponspored ADS</span>
                <Image alt='' src="/more.png" width={16} height={16} className='w-4 h-4 object-cover cursor-pointer' />
            </div>
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/2099737/pexels-photo-2099737.jpeg?cs=srgb&dl=pexels-suju-2099737.jpg&fm=jpg" alt="" fill className="rounded-lg object-cover" />

                </div>
                <div className='flex gap-4 items-center'>
                    {/* User */}
                    <Image src="/courses.png" alt='' width={24} height={24} className='w-6 h-6 rounded-full object-cover' />
                    <span className="text-blue-500 font-medium">BigChef Lounge </span>

                </div>
                <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
                    {size === "sm" ?
                        " Lorem ipsum dolor sit amet consectetur adipisicing elit." :
                        size === "md" ?

                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit" :

                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit  Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    }
                </p>
                <button className="bg-gray-200 rounded-lg p-2 text-gray-500 text-xs">Learn More</button>
            </div>
        </div>
    )
}

export default Ad