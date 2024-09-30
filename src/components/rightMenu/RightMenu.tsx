import { User } from "@prisma/client"
import Ad from "../Ad"
import BirthDays from "./BirthDays"
import FriendRequest from "./FriendRequest"
import UserInfo from "./UserInfo"
import UserMediaCard from "./UserMediaCard"
import { Suspense } from "react"

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="Loading...">
            <UserInfo user={user} />
          </Suspense>
          <Suspense fallback="Loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) :
        null}
      <FriendRequest size="sm" />
      <BirthDays size="sm" />
      <Ad size="lg" />
      <div>

      </div>
    </div>
  )
}

export default RightMenu