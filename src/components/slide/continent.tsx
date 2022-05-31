import { Flex, Heading, Link, Text } from "@chakra-ui/react";

interface ContinentProps{
  name: string
  description: string
  image: string
}

export default function Continent({name, description, image}: ContinentProps){
  return(
    <Flex
      w='100%'
      h='100%'
      align='center'
      justify='center'
      bgImage={image}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPosition='center'
      color='white'
      textAlign='center'
      backdropBlur="10px"
    >
      <Link href={`/continet/${name}`}>
        <a>
          <Heading >{name}</Heading>
          <Text>{description}</Text>
        </a>
      </Link>
    </Flex>
  )
}