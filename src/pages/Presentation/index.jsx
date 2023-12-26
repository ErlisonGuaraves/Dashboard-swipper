import { db } from '../../connection/firebase';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { doc, getDoc } from "firebase/firestore";




const Presentation = ({links, time}) =>{

  const [presentation, setPresentation] = useState()
  const parametros = useParams()
  
 

  useEffect(() => {

    const present1 = document.getElementById("presentation1")
    const present2 = document.getElementById("presentation2")
    
    async function getPresentations(){
      setPresentation("")
      const docRef = doc(db, "dashboards", parametros.id);
      const docSnap = await getDoc(docRef);
      setPresentation(docSnap.data())
      present1.innerHTML = docSnap.data().links[0]
      present2.innerHTML = docSnap.data().links[1]
    }

    getPresentations()
  }, [])

 
  return(
      <main id='container-apresentation'>
              <Swiper
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