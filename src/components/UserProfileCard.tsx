import Image from "next/image"

const UserProfileCard = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="w-full h-64 relative">
                <Image src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="rounded-md object-cover" fill />
                <Image src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10" width={128} height={128} />
            </div>
            <div className="mt-20 mb-6 flex flex-col gap-2 h-24 items-center">
                <span className="font-semibold text-2xl ">Andrea Piacquadio </span>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center text-xs">
                        <span className="font-medium">125</span>
                        <span className="text-sm">Posts</span>
                    </div>
                    <div className="flex flex-col items-center  text-xs ">
                        <span className="font-medium">1.3K</span>
                        <span className="text-sm">Followers</span>
                    </div>
                    <div className="flex flex-col items-center  text-xs ">
                        <span className="font-medium">5.1K</span>
                        <span className="text-sm">Followering</span>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default UserProfileCard