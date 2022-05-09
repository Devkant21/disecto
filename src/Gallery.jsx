import React, { useState } from 'react';
import Menu from './features/menu';
import { Container, VStack, Stack, Flex, Button, Heading, HStack } from '@chakra-ui/react';
import Content from './Content';


const Gallery = () => {
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
                                <Button colorScheme='green' variant='outline'>
                                    Groceries
                                </Button>
                                <Button colorScheme='teal' variant='outline'>
                                    Skincare
                                </Button>
                                <Button colorScheme='teal' variant='outline'>
                                    Household items
                                </Button>
                                <Button colorScheme='teal' variant='outline'>
                                    Liquor
                                </Button>
                            </Stack>
                        </Heading>
                    </VStack>
                    <VStack>
                        <HStack>
                            <Content />
                            <Content />
                            <Content />
                        </HStack>
                        <HStack>
                            <Content />
                            <Content />
                            <Content />
                        </HStack>
                        <HStack>
                            <Content />
                            <Content />
                            <Content />
                        </HStack>
                        
                    </VStack>
                    
                </VStack>
            </Flex>
            
        </Container>   
    )
}

export default Gallery

//     const [model,setModel] = useState(false)
//     const [tempimgSrc,setTempImgSrc] = useState('');

//     const getImg = (imgSrc) => {
//         setTempImgSrc(imgSrc);
//         setModel(true)
//     }
//     return (
//         <>
//             <h1>Gallery</h1>
//             <div className={model? "model open" : "model"}>
//                 <img src={tempimgSrc} />
//             </div>
//             {data.map((item, index) => {
//                 return (
//                     <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
//                         <img src={item.imgSrc} style={{width: '100%' }} />
//                     </div>
//                 )
//             })}
//         </> 
//    */}
