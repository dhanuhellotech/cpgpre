import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Callto from '../common/Home/cta/Callto'
import Testimonial from '../common/Home/Testimonial/Testimonial'
import sumiimg from '../assets/sumimam.jpg'
import './About.css'
import ImageGallery from '../common/highlights/ImageGallery'
import VideoSliderCard from '../common/highlights/videoslider/VideoSliderCard '
import WhatsApp from '../whatsapp/WhatsApp'
import FloatingMailIcon from './email floating icon/Floating'

export default function Highlights() {
  const handleButtonClick = (eventName) => {
    // Handle button click logic based on the event name
    console.log(`Button clicked for event: ${eventName}`);
    // You can perform any other actions you need here
  };


  
  return (
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
          <li className="breadcrumb-item text-white active" aria-current="page">Our Story </li>
        </ol> */}
      </nav>
      <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-2 text-white animated slideInDown mb-4">The Best Kindergarten School For Your Child</h1>
                                    <a href="curriculum" class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</a>
                                    <a href="admission" class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">For Admission</a>
                                </div>
                            </div>
    </div>
  </div>
    </div>
  {/* Page Header End */}
{/* about  */}

  {/* About Start */}
 
  {/* About End */}
    {/* About Start */}

  {/* About End */}
  {/* Call To Action Start */}
  {/* <div className="container-xxl py-5">
  <div className="container">
    <div className="bg-light rounded">
      <div className="row g-0 align-items-center">
        <div className="wow fadeIn text-center" data-wow-delay="0.5s">
          <div className="h-100 d-flex flex-column text-center justify-content-center p-5">
            <h1 className="mb-4">Game Schooling</h1>
            <h1 className="mb-4">5 Step Teaching Method</h1>

            <div className="row g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <button className="btn btn-primary" onClick={() => handleButtonClick("ANNUAL DAY")}>
                      ANNUAL DAY
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <button className="btn btn-primary" onClick={() => handleButtonClick("SPORTS DAY")}>
                      SPORTS DAY
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <button className="btn btn-primary" onClick={() => handleButtonClick("TEACHERS DAY")}>
                      TEACHERS DAY
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <button className="btn btn-primary" onClick={() => handleButtonClick("CHILDRENS DAY")}>
                      CHILDRENS DAY
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <button className="btn btn-primary" onClick={() => handleButtonClick("REPUBLIC DAY")}>
                      REPUBLIC DAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
<ImageGallery/>

<VideoSliderCard/>



  {/* Call To Action End */}
  {/* Team Start */}


  {/* Footer Start */}
<Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>
<WhatsApp phoneNumber="88075 15122" message="Hello! I'm interested in your services."/>
<FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 
{/* JavaScript Libraries */}
{/* Template Javascript */}

    </div>
  )
}
