import { Flex } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dynamic from "next/dynamic";

import '../../styles/slider.scss'

const Continent = dynamic(() => import('./continent'),{
  ssr: false
})

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slide(){
  return  (
    <Flex
      w='100%'
      maxWidth={1240}
      mx='auto'
      mb={["5",'10']}
      h={["250px",'450px']}
    >
      <Swiper 
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay:4000
        }}
        style={{width:'100%', flex:'1'}}
      >
        <SwiperSlide>
          <Continent
            name="Europa"
            description="O Continente mais antigo"
            image="url(img/sliderImg/Europa.svg)"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Continent
            name="Asia"
            description="O maior continente do mundo"
            image="url(https://images.unsplash.com/photo-1621584728858-616080e4bd01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
          />
        </SwiperSlide>
      </Swiper>

    </Flex>
  )
}
