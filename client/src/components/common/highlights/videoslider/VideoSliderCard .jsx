import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoSliderCard = () => {
  const videos = [
    'assets/img/highlithsvideo/lego.mp4',
    'assets/img/highlithsvideo/WhatsApp Video 2024-02-01 at 14.58.16_a2bd0008.mp4',
    'assets/img/highlithsvideo/video.mp4',
    // Add more video URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };

  return (

    <>  <div> 
    <h2 style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>Activities Of Our School</h2>
</div>
    <div  style={{ backgroundImage: `url('assets/img/highlithsvideo/event.jpg')`, backgroundSize: 'cover', }}>
  
    <div>

      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index}>
            <video width="100%" height="auto" style={{ maxHeight: '500px',maxWidth:'2000px' }} controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
};

export default VideoSliderCard;
 