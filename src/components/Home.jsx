import React from 'react';
import Categories from './Categories';
import "../styles/Home.css"

// import HelperComponent from './HelperComponent';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Images from './Images';
import Footer from './Footer';
function Home() {
    return (
        <div className='home'>
            <div className='main'>
            <Carousel
               showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            dynamicHeight={false}
              >
               {
                Images.map((image)=><div key={image.id}><img src={image.src} alt="image_info"/></div>)
               }
              </Carousel>
              
          <Categories category="men's clothing"/>
                <Categories category="women's clothing"/>
              <Categories category="jewelery"/>
              <Categories category="electronics"/>
              <Footer/>
        </div>
       </div>
    );
}

export default Home;