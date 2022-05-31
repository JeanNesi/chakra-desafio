import { Box, Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner(){
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true
  })

  return(
    <Flex
      h={['163','335']}
      w='100%'
      maxWidth={1440}
      bg="url('/img/Background.svg')"
      position='relative'
      px={['4','10','20','40']}
      align='center'
      >
      <Stack color='white' width='100%' >
        <Text
          as='h2'
          fontSize={['20','28','36']}
          fontWeight='500'
        >
          5 Continentes, <br/> infinitas possibilidades.
        </Text>
        <Text
          as='p'
          fontSize={['14','20']}
          fontWeight='400'
          color='#DADADA;'
          width={['21rem','26rem','34rem']}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </Text>
      </Stack>
        {isWideVersion && <Image
          src="/img/Airplane.svg"
          position='absolute'
          top='76'
          right='140'
        />
        }
    </Flex>
  )
}