import Image from "next/image"
import ProfileCard from "./ProfileCard"
import Link from "next/link"
import Ad from "./Ad"

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-2 rounded-lg bg-white shadow-md text-sm text-gray-500 flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/posts.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>MyPosts</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/activity.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>Activity</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/market.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>Marketplace</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/events.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>Events</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/albums.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>Albums</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/videos.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>Videos</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/news.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>News</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/courses.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>Courese</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/lists.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>Lists</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 font-medium">
            <Image src="/settings.png" alt="" className="w-5 h-5" width={20} height={20} />
            <span>Settings</span>
          </Link>

      </div>
      <Ad size="sm"/>
    </div>
  )
}

export default LeftMenu