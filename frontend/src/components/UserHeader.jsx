import React from 'react'
import { Avatar, Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, useToast, VStack } from '@chakra-ui/react'
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

function UserHeader() {
    const toast = useToast()

    const copyLink = ()=>{
        const currentUrl = window.location.href
        navigator.clipboard.writeText(currentUrl).then(()=>{
            toast({
                title: 'Url Copied.',
                status: 'success',
                duration: 6000,
                isClosable: true,
              })
        })
    }
  return <>
        <VStack gap={4} alignItems={'start'} >
            <Flex justifyContent={'space-between'} w={'full'}>
                <Box>
                    <Text fontWeight={"Bold"} fontSize={'2xl'}>
                        Ahmed Ragab
                    </Text>
                    <Flex>
                        <Text fontSize={'sm'}>
                            @ABinRagab
                        </Text>
                    </Flex>
                </Box>

                <Box>
                    <Avatar 
                        name='Ahmed Ragab'
                        src='./Ahmed.jpg'
                        size={'xl'}
                    />
                </Box>
            </Flex>


                <Text>
                    MERN Stack Developer
                </Text>

            <Flex justifyContent={'space-between'} w={'full'}>
                <Flex alignItems={'center'} gap={2}>
                            <Text color={'gray.light'}>
                                3.2k followers
                            </Text>
                            <Box w={1} h={1} borderRadius={'full'} bg={'gray.light'}>

                            </Box>
                            <Link color={'gray.light'}>
                                instagram.com
                            </Link>
                </Flex>

               <Flex>
                    <Flex className='bg-Icon' justifyContent={'center'} alignItems={'center'}> 
                        <BsInstagram size={24} cursor={'pointer'}/>
                    </Flex>
                    <Flex className='bg-Icon' justifyContent={'center'} alignItems={'center'}>
                        <Menu>
                            <MenuButton>
                                 <CgMoreO size={24} cursor={'pointer'}/>
                            </MenuButton>
                            <Portal>
                                <MenuList bg={'gray.dark'}>
                                    <MenuItem bg={'gray.dark'} onClick={copyLink}>
                                        Copy Link
                                    </MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Flex>
               </Flex>
            </Flex>
            <Flex w={"full"}>
                <Flex justifyContent={"center"} flex={1} borderBottom={'1.5px solid white'} pb={2} cursor={'pointer'}>
                    <Text fontWeight={'bold'}>
                        Threads
                    </Text>
                </Flex>
                <Flex justifyContent={"center"} flex={1} borderBottom={'1.5px solid gray'} pb={2} cursor={'pointer'}>
                    <Text fontWeight={'bold'} color={"gray.light"}>
                        Replies
                    </Text>
                </Flex>
               
            </Flex>
        </VStack>
  </>
}

export default UserHeader