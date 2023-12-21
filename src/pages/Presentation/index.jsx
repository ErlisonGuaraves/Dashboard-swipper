// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import { useEffect } from 'react';


const Presentation = ({links, time}) =>{
 

  useEffect(() => {
    const present1 = document.getElementById("presentation1")
    const present2 = document.getElementById("presentation2")
    present1.innerHTML = links[0]
    present2.innerHTML = links[1]
  }, [])

 
  return(
      <main id='container-presentation'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: time * 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide id='presentation1'></SwiperSlide>
            <SwiperSlide id='presentation2'></SwiperSlide>
      </Swiper>
      </main>
  )
}


export default Presentation