import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, Grid } from '@chakra-ui/react';
import {baseUrl, fetchApi} from '../utils/fetchApi'
import Property from '../components/Property'




const Banner = ({purpose, title1, title2, desc1, desc2,imageUrl, buttonText, linkName,}) =>(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
 <Image src={imageUrl} width={500} height={300}  alt="banner"/>
    <Box p="5">
      <Text color="#d1d7e0" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" color="#802bb1" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text color="d1d7e0" paddingTop="3" paddingBottom="3" fontSize="lg">{desc1}</Text>
      <Text color="d1d7e0" paddingTop="3" paddingBottom="3" fontSize="lg">{desc2}</Text>
      <Button fontSize="xl" bg="#802bb1" color="#2d283e">
        <Link href={linkName}>{buttonText}</Link>
        </Button> 
    </Box>
  </Flex>
)



export default function Home({propertyForSale, propertyForRent}) {
  console.log(propertyForSale, propertyForRent);
  return (
    <>
    
    
    <Box>

        <Banner
        purpose = "RENT A HOME"
        title1 = "Rental Homes for"
        title2 = "Everyone"
        desc1= "Explore Apartments, Houses, Villas"
        desc2=" and more"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        buttonText="Click Here"
        linkName="/search?purpose=for-rent"/>
        <Flex flexWrap="wrap" ml="8%" mt="5%" mb="5%">
          <Grid templateColumns='repeat(3,1fr)'gap={40}>
          {propertyForRent.map((property)=> <Property property={property} key={property.id}/>)}
          </Grid>
        </Flex>



        <Banner
        purpose = "BUY A HOME"
        title1 = "Buy your own place"
        title2 = "to call Home"
        desc1= "Explore Apartments, Houses, Villas"
        desc2=" and more"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        buttonText="Click Here"
        linkName="/search?purpose=for-sale"/>
        <Flex flexWrap="wrap" ml="8%" mt="5%" mb="5%">
          <Grid templateColumns='repeat(3,1fr)'gap={40}>
        {propertyForSale.map((property)=> <Property property={property} key={property.id}/>)}
        </Grid>
        </Flex>
    </Box>
    </>
  )
}

export async function getStaticProps(){
  const propForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props:{
      propertyForSale: propForSale?.hits,
      propertyForRent: propForRent?.hits,
    }
  }
}