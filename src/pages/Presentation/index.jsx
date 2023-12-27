// Firestore database instance
import { db } from '../../connection/firebase';

//  Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Styles

import './styles.css';

// Hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData';

const Presentation = () =>{

  const [presentation, setPresentation] = useState()
  const { getDashById } = useFetchData()
  const params = useParams()


  useEffect(() => {

    const present1 = document.getElementById("presentation1")
    const present2 = document.getElementById("presentation2")

    async function getPresentations(){
      const dash = await getDashById(params.id) 
      console.log(dash)
      present1.innerHTML = dash.links[0]
      present2.innerHTML = dash.links[1]
      setPresentation(dash)
    }

    getPresentations()
  }, [])

 
  return(
      <main id='container-apresentation'>
              <Swiper
              id='swiper'
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: presentation ? presentation.time  * 1000 : 10000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper ajuste"
              >
                  <SwiperSlide id='presentation1' className="custom-slide ajuste"></SwiperSlide>
                  <SwiperSlide id='presentation2' className="custom-slide ajuste"></SwiperSlide>
              </Swiper>      

              
      </main>
  )
}


export default Presentation