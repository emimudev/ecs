import { useSelector } from 'react-redux'
import {
  Center,
  Flex, Icon,
  IconButton,
  useColorModeValue,
  VStack,
  Text,
  Divider,
  Badge
} from '@chakra-ui/react'
import { RiSettings4Fill } from 'react-icons/ri'
import UserAvatar from 'components/UserAvatar'

function AuthenticatedHeader() {
  const { user } = useSelector(store => store.auth)
  return (
    <>
      <Flex
        cursor='pointer'
        py={3}
        px={4}
        borderRadius='xl'
        bg={useColorModeValue('gray.100', 'rgba(22, 28, 40, 0.85)')}
        variant='solid'
        w='full'
        h='fit-content'
        justifyContent='flex-start'
        display={{ base: 'flex', md: 'none' }}
      >
        <Flex justify='space-between' w='full'>
          <Flex gap={4}>
            <UserAvatar user={user} />
            <VStack align='flex-start' justify='center'>
              <Text noOfLines={1} fontWeight='semibold' fontSize='md' lineHeight='1.2'>
                {`${user.name} ${user.lastname}`}
              </Text>
              <Text noOfLines={1} fontWeight='normal' style={{ marginTop: 0 }}>
                <Badge colorScheme='pink' fontFamily='body' textTransform='capitalize'>
                  Personal
                </Badge>
              </Text>
            </VStack>
          </Flex>
          <Center>
            <IconButton
              variant='link'
              minW='0'
              icon={<Icon h={5} w={5} as={RiSettings4Fill} />}
            />
          </Center>
        </Flex>
      </Flex>
      <Divider style={{ margin: '12px 0 8px' }} />
    </>
  )
}

export default AuthenticatedHeader
