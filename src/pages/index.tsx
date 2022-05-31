import { Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/banner";
import { Divisor } from "../components/divisor";
import { Header } from "../components/header";
import Slide from "../components/slide";
import { TravelTypes } from "../components/travelTypes";

export default function Home() {
  return (
      <Flex direction='column' align='center' mb='10'>
        <Header/>
        <Banner/>
        <TravelTypes/>
        <Divisor/>
        <Text
          fontSize={['20px','36px']}
          fontWeight='500'
          color= '#47585B'
          textAlign='center'
          mb={['20px','52px']}
        >
        Vamos nessa?<br/>
        Então escolha seu continente
        </Text>
        <Slide/>
      </Flex>
  )
}
