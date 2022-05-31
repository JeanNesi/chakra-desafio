import { Divider, Flex } from "@chakra-ui/react";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import Slide from "../components/slide";
import { TravelTypes } from "../components/travelTypes";

export default function Home() {
  return (
      <Flex direction='column' align='center' mb='10'>
        <Header/>
        <Banner/>
        <TravelTypes/>
        <Divider color='black' borderStyle='solid' width='90px' borderWidth='5' border='2px'/>
        <Slide/>
      </Flex>
  )
}
