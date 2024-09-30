import AddPost from "@/components/AddPost"
import Feed from "@/components/feed/Feed"
import LeftMenu from "@/components/leftMenu/LeftMenu"
import RightMenu from "@/components/rightMenu/RightMenu"
import Strories from "@/components/Strories"

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6' >
      <div className="hidden xl:block  w-[20%]">
        <LeftMenu type="home"/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] flex flex-col gap-6">
        <Strories/>
        <AddPost/>
        <Feed/>
      </div>
      <div className="hidden lg:block  w-[30%]">
        <RightMenu/>
      </div>
    </div>
  )
}

export default Homepage