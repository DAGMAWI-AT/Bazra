import { useEffect } from "react";
// import Heading from "../common/Heading";
import { Banservice } from "../data/Data";
import {  scroller } from 'react-scroll';
import "./Service1s.css";
// import ServicesSE from "./ServicesSE";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const scrollToTarget = () => {
    scroller.scrollTo('targetElement', {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <>
      <div className='services'>
       
       <section className="software_banner_area d-flex align-items-center">
       <div className="container">
         <div className="row">
           {Banservice.map((item, i) => (
             <>
             <div key={i} className="col-lg-6 d-flex align-items-center">
               <div className="software_banner_content">
                 <h1
                   data-aos="fade-up"
                   data-aos-duration="2000"
                   className="f_size_50  text-left heading "

                 >
                   Services
                 </h1>
                 <p
                   data-aos="fade-up"
                   data-aos-duration="2000"
                   className="service_p"
                  
                 >
BAZRA connect technology needs of clients for maximum business and personal exploitation supported with state of the art automotive and information technology.  
At BAZRA, we are dedicated to providing cutting-edge solutions tailored to meet the unique needs of the client in the automotive, agricultural machinery and IT arena. Our comprehensive range of services is designed to empower businesses and drive success in a rapidly evolving economic landscape.                 </p>
                 <div
                   className="action_btn d-flex align-items-center mt_40  fadeInLeft"
                   data--delay="0.6s"
                   style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}
                 >
                 <a href="/contact" className="software_banner_btn elementor-repeater-item-abf08bf" > Contact </a>
                 </div>
               </div>
             </div>
             <div key={i} className="col-lg-6">
               <div className="software_img  fadeInRight" data--delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInRight' }}>
                 {/* <img alt="TechFin" className=" lazyloaded box1" src={item.cover} /> */}
               </div>
             </div>
           </>
           ))}
         </div>
       </div>
     </section>
      </div>
     
    
    </>
  );
}

export default Services;
