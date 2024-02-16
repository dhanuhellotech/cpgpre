import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Callto from '../common/Home/cta/Callto'
import Testimonial from '../common/Home/Testimonial/Testimonial'
import sumiimg from '../assets/sumimam.jpg'
import './About.css'
import Classcard from '../common/curriculum/cards/Cards'
import About from '../common/curriculum/cards/About/About'
import WhatsApp from '../whatsapp/WhatsApp'
import FloatingMailIcon from './email floating icon/Floating'
export default function Curriculum() {
  return (
    <div>
        <div>
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar Start */}
<Navbar/>
  {/* Navbar End */}
  {/* Page Header End */}
  <div>
       <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">

      <nav aria-label="breadcrumb animated slideInDown">
        {/* <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Curriculum </li>
        </ol> */}
      </nav>
      <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-2 text-white animated slideInDown mb-4">The Best Kindergarten School For Your Child</h1>
                                    <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</a>
                                    <a href="" class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</a>
                                </div>
                            </div>
    </div>
  </div>
    </div>
  {/* Page Header End */}
{/* about  */}
 
  {/* About Start */}
  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-4"> Our Vision</h1>
          <p>Our vision is to provide the fundamental of Education for at an affordable cost and
no royalty model to empower Women entrepreuners.</p>
<p>To Provide quality early Years of education in a warm, safe and creative setting</p>
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <img className="rounded-circle flex-shrink-0"src ={sumiimg} alt style={{width: 45, height: 45}} />
                <div className="ms-3">
                  <h6 className="text-primary mb-1">Sumi Mam</h6>
                  <small>CEO &amp; Founder</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
          <div className="row">
            <div className="col-12 text-center">
              <img className="img-fluid w-75 rounded-circle bg-light p-3" src ="assets/img/about-1.jpg" alt />
            </div>
            <div className="col-6 text-start" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src ="assets/img/about-2.jpg" alt />
            </div>
            <div className="col-6 text-end" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src ="assets/img/about-3.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* About End */}
    {/* About Start */}
  <About/>
  {/* About End */}
  {/* Call To Action Start */}






  {/* Call To Action End */}
  <Classcard/>
  {/* Team Start */}

  {/* Team End */}
  {/* Footer Start */}
<Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>
{/* JavaScript Libraries */}
{/* Template Javascript */}

    </div>

    <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services."/>

    <FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 

    </div>
  )
}
