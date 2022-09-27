import { Avatar } from '@chakra-ui/react'

// https://www.svgrepo.com/collection/circle-avatar-vectors/1

function UserAvatar({ user, selectable = false, ...props }) {
  return (
    <Avatar
      {...props}
      name={`${user?.name} ${user?.lastname}`}
      src='https://www.svgrepo.com/show/420362/avatar-cacti-cactus.svg'
      bg='transparent'
      _hover={selectable && {
        filter: 'brightness(0.8)',
        cursor: 'pointer'
      }}
    />
  )
}

export default UserAvatar
