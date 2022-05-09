import React from 'react'
import { Box, Image, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


const Content = () => {
    const property = {
        imageUrl: 'https://static.turbosquid.com/Preview/2019/06/28__11_12_46/A.jpgE6A8F7E3-3558-4AA6-8838-A73EA2612580Large.jpg',
        imageAlt: 'Jack Daniels Liquor Section',
        beds: 3,
        baths: 2,
        title: 'Jack Daniels',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }
  
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='lg'>
        
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} Liquor &bull; {property.baths} Tenesse Whiskey
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
        
  )
}

export default Content