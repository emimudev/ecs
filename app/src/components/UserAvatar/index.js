import { Avatar } from '@chakra-ui/react'

// https://www.svgrepo.com/collection/circle-avatar-vectors/1

function UserAvatar({ user, ...props }) {
  return (
    <Avatar
      {...props}
      name={`${user?.name} ${user?.lastname}`}
      src='https://www.svgrepo.com/show/420362/avatar-cacti-cactus.svg'
    />
  )
}

export default UserAvatar
