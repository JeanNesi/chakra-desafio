import { Flex } from "@chakra-ui/react";
import { TravelType } from "./travelType";

export function TravelTypes(){
  return (
    <Flex
      w='100%'
      maxWidth={1440}
      position='relative'
      pt={['9','115']}
      pb='20'
      px='6'
      align='center'
      justify='center'
      >
      <Flex width='100%' maxWidth={1160} flexWrap='wrap' justify='space-around' gap='15'>
        <TravelType title="vida noturna" src="/img/cocktail.svg"/>
        <TravelType title="praia" src="/img/surf.svg"/>
        <TravelType title="moderno" src="/img/building.svg"/>
        <TravelType title="clássico" src="/img/museum.svg"/>
        <TravelType title="e mais" src="/img/earth.svg"/>
      </Flex>
    </Flex>
  )
}