import {useEffect} from "react"
import Header from "../common/header/Header"
import { Routes,Route } from "react-router-dom"
import Home from "../home/Home"
 import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Contact from "../contact/contactpage"
// import video from '../../video.mp4';
// import Services from "../services/Services"
import Portfolio from "../portfolioBC/Portfolio"

import Singlepost  from "../blog/singlepost"
import Servicepage from "../services/Servicepage"
import ReactGA from 'react-ga';
import Partnership from "../partnership/Partnership"
import Tenders from "../tenders/Tenders"
import TendersPage from "../tenders/TendersPage"
const Pages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[]);

  ReactGA.event({
  })
  
  return (
    <>
    <div >
        <Header />
        <Routes>
          <Route exact path='/' component ={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path='/services' component={Servicepage} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/partnership' component={Partnership} />
          <Route exact path='/contact' component={Contact} />  
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/tenders' component={Tenders} />
          <Route exact path='/tenderspage' component={TendersPage} />

          <Route path="/blog/singlepost/:id"  component={Singlepost} key={Route.path} />
          <Route path="/blog/singlepost/"  component={Singlepost} key={Route.path} />
        </Routes>     
        <Footer />
      </div>
    </>
  )
}

export default Pages
