import { Container, Flex, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Container maxWidth="container.lg" padding="10">
        <Flex h='100vh' py="20">
            <VStack 
                w="full" 
                h="full" 
                p="10" 
                spacing={10} 
                alignItems="flex-start">
                <Heading>Credentials
                </Heading>
            </VStack>
            <VStack 
                bg='pink.100'
                w="full" 
                h="full" 
                p="10" 
                spacing={10} 
                alignItems="flex-start">
            </VStack>
        </Flex>
    </Container>
  )
}

export default Login