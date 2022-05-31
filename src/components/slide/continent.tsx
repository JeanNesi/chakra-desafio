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
    >
      <Link href={`/continet/${name}`}>
        <a>
          <Heading
            mb="16px"
            fontWeight='700'
            fontSize={['24px','48px']}
          >
            {name}
          </Heading>
          <Text
            fontWeight='700'
            fontSize={['14px','24px']}
            color='#DADADA'
          >
            {description}
          </Text>
        </a>
      </Link>
    </Flex>
  )
}