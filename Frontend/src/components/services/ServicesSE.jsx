// eslint-disable-next-line no-unused-vars
import  react  from "react";
import Heading from "../common/Heading";
import {  service } from "../data/Data";
import { scroller } from 'react-scroll';
import { useNavigate} from "react-router-dom";

// import Portfolio from "../portfolioBC/Portfolio";
import "./Services.css";
// import Services from "./Services";
const ServicesSE = () => {


    // eslint-disable-next-line no-unused-vars
    const scrollToTarget = () => {
        scroller.scrollTo('targetElement', {
          smooth: true,
          duration: 500,
        });
      };


      const navigate = useNavigate();
  
    const handleClick = (index) => {
    navigate(`/services?section=${index}`);
    };
  return (
    <>
   <div className='services'>
  <div id="targetElement" className='container' data-aos="fade-down-right" >
          <Heading name="targetElement" title='Services' data-aos="fade-down-right" />
          <div className='content grid3' >
            {service.map((item, i) => (
              <div className='box' key={i} data-aos="fade-up" data-aos-duration="2000" onClick={() => handleClick(i)}>
                <i data-aos="fade-up" data-aos-duration="2000">{item.icon}</i>
                <h3 data-aos="fade-up" data-aos-duration="2000">{item.title}</h3>
                <p data-aos="fade-up" data-aos-duration="2000" onClick={() => handleClick(i)}>{item.Desc}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
    </>
  )
}

export default ServicesSE
