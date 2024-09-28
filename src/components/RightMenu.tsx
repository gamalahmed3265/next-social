import Ad from "./Ad"
import BirthDays from "./BirthDays"
import FriendRequest from "./FriendRequest"
import UserInfo from "./UserInfo"
import UserMediaCard from "./UserMediaCard"

const RightMenu = ({ userrId }: { userrId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userrId ? (
        <>
          <UserInfo userrId={userrId} />
          <UserMediaCard userrId={userrId} />
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