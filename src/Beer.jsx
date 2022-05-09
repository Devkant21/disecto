import React from 'react'
import { Box, Image, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


const Beer = () => {
    const property = {
        imageUrl: 'https://i0.wp.com/liquorgenie.in/wp-content/uploads/2020/08/Bira-Boom-Qt.jpg?fit=500%2C500&ssl=1',
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

export default Beer;

// https://www.bigbasket.com/media/uploads/p/l/40218157_3-bira-original-91-white-beer.jpg
// https://i0.wp.com/liquorgenie.in/wp-content/uploads/2020/08/Bira-Boom-Qt.jpg?fit=500%2C500&ssl=1