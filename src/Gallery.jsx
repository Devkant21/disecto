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
        <Container maxW="container.xl" padding="10" bg="white" >
            <Flex h="full">
                <VStack 
                    w="full" 
                    h="full" 
                    p="10" 
                    spacing={10} 
                    align="center"
                >
                    <VStack spacing={5} >
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
                        <HStack>
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='lg'> 
                            {
                                items.map((elem) => {
                                    const {id, image, name, category, price} = elem;
                                    return (
                                        <>
                                            <Image src={image} alt={name} />
                                            <Box p='6'>
                                                <Box display='flex' alignItems='baseline'>
                                                {/* <Badge borderRadius='full' px='2' colorScheme='orange'>
                                                    New {name}
                                                </Badge> */}
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
                                                </Box>
                                                </Box>
                                            </Box>  
                                        </> 
                                    )   
                                })
                            } 
                            </Box>     
                        </HStack>
                    </VStack>     
                </VStack>
            </Flex>
        </Container>   
    )
}

export default Gallery
