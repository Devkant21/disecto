import React, { useState } from 'react';
import Menu from './features/menu';
import { Container, VStack, Stack, Flex, Button, Heading, HStack } from '@chakra-ui/react'
import { Box, Image, Badge } from '@chakra-ui/react'



const Gallery = () => {
    
    const [items, setItems] = useState(Menu);
    const filterItem = (categItem) => {
        const updateItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updateItems)
    }

    return (
        <Container maxW="full" maxH="full" padding="10" bg="gray.100" >
            <Flex h="full" w="full">
                <VStack 
                    w="full" 
                    h="full" 
                    p="10" 
                    spacing={10} 
                    
                >
                    <VStack spacing={5} align="center">
                        <Heading fontStyle="normal"> Shopping Items
                            <Stack direction='row' spacing={4} py={5} align='center'>
                                <Button colorScheme='green' variant='outline' onClick={() => filterItem('Groceries')}>
                                    Groceries
                                </Button>
                                <Button colorScheme='teal' variant='outline' onClick={() => filterItem('Skincare')}>
                                    Skincare
                                </Button>
                                <Button colorScheme='teal' variant='outline' onClick={() => filterItem('Household Items')}>
                                    Household items
                                </Button>
                                <Button colorScheme='teal' variant='outline' onClick={() => filterItem('Liquor')}>
                                    Liquor
                                </Button>
                                <Button colorScheme='teal' variant='outline' onClick={() => setItems(Menu)}>
                                    All
                                </Button>
                            </Stack>
                        </Heading>
                    </VStack>
                    <VStack>
                        <VStack maxH="full" flexDirection="row" align="flex-start" spacing={4} py={5} justifyContent="space-between">
                            <Flex maxW='md' borderWidth='4px' borderRadius='md'  boxShadow='lg'spacing={4} justifyContent="space-between" >
                                <Box maxW='sm' borderWidth='1px' borderRadius='sm'  direction='row' justifyContent="space-between">
                                    <VStack direction='row' justifyContent="space-between">
                                    {
                                    items.map((elem) => {
                                        const {id, image, name, category, price} = elem;
                                        return (
                                            <>
                                                <Image src={image} alt={name} align="flex-start"/>
                                                <Box p='6'>
                                                    <Box display='flex' alignItems='baseline' direction='row'>
                                                        <Badge borderRadius='full' px='2' colorScheme='orange'>
                                                            New 
                                                        </Badge>
                                                        <Badge borderRadius='full' px='2' colorScheme='orange'>
                                                            {category}
                                                        </Badge>
                                                        <Box
                                                            mt='1'
                                                            fontWeight='semibold'
                                                            as='h4'
                                                            lineHeight='tight'
                                                            isTruncated
                                                            >   
                                                            {name}
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                    {price}
                                                    <Box as='span' color='gray.600' fontSize='sm'>
                                                        INR
                                                    </Box>
                                                    </Box>
                                                </Box>  
                                            </> 
                                        )   
                                    })
                                } 
                                    </VStack>
                                </Box>       
                            </Flex>
                        </VStack>
                    </VStack>     
                </VStack>
            </Flex>
        </Container>   
    )
}

export default Gallery
