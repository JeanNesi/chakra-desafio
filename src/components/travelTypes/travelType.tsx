import { Text, Image, Flex, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps{
  title: string
  src: string
}

export function TravelType({title, src, ...rest}: TravelTypeProps){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg:true,
    xl: true
  })
  
  if(isWideVersion){
  return(
    <Flex direction='column' align='center' gap='6'>
      <Image src={src}/>
      <Text
        color="#47585B"
        fontWeight='600'
        fontSize='24'
        {...rest}
      >
        {title}
      </Text>
    </Flex>
  )
}

return (
  <Flex direction='row' align='center' gap='2'>
  <Image src='img/Ellipse.svg'/>
  <Text
    color="#47585B"
    fontWeight='600'
    fontSize='24'
    {...rest}
  >
    {title}
  </Text>
</Flex>
)
}