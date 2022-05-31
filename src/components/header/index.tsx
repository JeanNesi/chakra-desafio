import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justify='center' align='center' w='100%' h={['50','75',"100"]} bg='white'>
      <Image src="/img/logo.png" alt="Logo" w={['20','8rem','11rem']} h={['5','37','46']}/>
    </Flex>
  )
}