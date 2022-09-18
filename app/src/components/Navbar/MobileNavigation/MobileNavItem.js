import { Link as RouterLink } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { MdExpandMore } from 'react-icons/md'
import MobileItemSubNav from './MobileItemSubNav'

const { useDisclosure, Flex, useColorModeValue, Collapse, Icon } = require('@chakra-ui/react')
const { default: useNavItem } = require('./useNavItem')

function MobileNavItem({ label, children, href, icon, onClick }) {
  const { isOpen, onToggle } = useDisclosure()
  const { match } = useNavItem({ href })

  const handleClick = () => {
    children && onToggle()
    onClick?.()
  }

  return (
    <Flex direction='column'>
      <Flex
        borderRadius='lg'
        p={2}
        as={href ? RouterLink : 'button'}
        to={href ?? '#'}
        justify='space-between'
        align='center'
        _hover={{
          textDecoration: 'none'
        }}
        _dark={{ _hover: { bg: !match && 'blackAlpha.300' }, bg: match && 'blue.900' }}
        _light={{ _hover: { bg: !match && 'blackAlpha.100' }, bg: match && 'blue.50' }}
        onClickCapture={handleClick}
      >
        <Flex gap={4} direction='row' align='center'>
          {icon && <Icon as={icon} h={5} w={5} />}
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
        </Flex>
        {children && (
          <Icon
            as={MdExpandMore}
            transition='all .25s ease-in-out'
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ paddingLeft: '16px' }}>
        <Flex
          mt={2}
          borderLeft={1}
          borderStyle='solid'
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderLeftWidth='3px'
          direction='column'
          gap={2}
        >
          {children && children.map((child) => (
            <MobileItemSubNav key={child.label} href={child.href} label={child.label} />
          ))}
        </Flex>
      </Collapse>
    </Flex>
  )
}

export default MobileNavItem
