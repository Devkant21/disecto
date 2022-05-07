import React, { useState } from 'react';
import Menu from './features/menu';
import { Container, HStack, VStack, Stack, Flex, Text, Button, Heading } from '@chakra-ui/react';

const Gallery = () => {
    return (
        <>
            <Container maxW="container.xl" padding="10">
                <Flex h="100vh" py={20}>
                    <VStack 
                        w="full" 
                        h="full" 
                        p="10" 
                        spacing={10} 
                        align="flex-start"
                    >
                        <VStack spacing={2} align="flex-start">
                            <Heading>Menu</Heading>
                            <Text></Text>
                                <Stack direction='row' spacing={4} align='center'>
                                    <Button colorScheme='teal' variant='outline'>
                                        Button
                                    </Button>
                                    <Button colorScheme='teal' variant='outline'>
                                        Button
                                    </Button>
                                    <Button colorScheme='teal' variant='outline'>
                                        Button
                                    </Button>
                                    <Button colorScheme='teal' variant='outline'>
                                        Button
                                    </Button>
                                </Stack>
                                <VStack>
                                    <HStack>
                                        <Container maxW="container.sm">
                                            Lunch
                                            
                                            <Flex w="50vw" h="50vh"
                                                bg="teal.200">
                                                <img src="assets/img1.jpg" w="20vw" h="20vh" alt="" className="src" />
                                                <p>MAggi</p>
                                            </Flex>

                                        </Container>
                                        
                                    </HStack>
                                    <HStack>
                                        Lunch
                                    </HStack>
                                    <HStack>
                                        Lunch
                                    </HStack>
                                    <HStack>
                                        Lunch
                                    </HStack>
                                </VStack>
                        </VStack>
                    </VStack>
                </Flex>
            </Container>
        </>
    )
}

export default Gallery

    
  
//     let data = [
//         {
//             id: 1,
//             imgSrc: img1,
//         },
//         {
//             id: 2,
//             imgSrc: img2,
//         },
//         {
//             id: 3,
//             imgSrc: img3,
//         },
//         {
//             id: 4,
//             imgSrc: img4,
//         }
//     ]

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
//   
