import React from 'react';
import Slider from '../Slider'
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Testimonials from './Testimonials';

function Home() {
    return (
        <div>
        
        {/* header */}
      
        {/* end header */}
        <Slider/>
        {/* plant */}
       <Products/>
        {/* end plant */}
        {/*about */}
     <About/>
        {/* end about */}
        {/*Our  Clients */}
     <Testimonials/>
        {/* end Our  Clients */}
        {/* start Contact Us*/}
 <Contact/>
        {/* end Contact Us*/}
        {/* footer start*/}
      </div>
    );
}

export default Home;