import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative" >
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        showIndicators={false}
        autoPlay={true}
        emulateTouch
      >
        <div>
          <img src="https://i.ibb.co/FYxMt3h/image.png" alt="" />
        </div>
        <div>
          🄿
          <img src="https://i.ibb.co/7GG5X8N/image.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/pXCX2yZ/image.png" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
