import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "swiper/css";

const installationData = {
  description:
    "Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators.",
  slides: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231754/tulfa/Installation/happy-couple-carrying-furniture-into-their-new-apa-2023-11-27-05-33-12-utc_vgzpf3.jpg",
      title: "Living Room Setup",
      alt: "Modern living room furniture installation",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231905/tulfa/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-07-47-utc_f6jcu6.jpg",
      title: "Bedroom Collection",
      alt: "Contemporary bedroom set",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231949/tulfa/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-12-13-utc_ylckp8.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231982/tulfa/Installation/male-carpenter-making-wooden-designer-furniture-fo-2023-11-27-05-12-45-utc_yb1znh.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232010/tulfa/Installation/young-man-in-a-furniture-factory-2023-11-27-05-26-18-utc_rlvcx0.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231740/tulfa/Installation/closeup-professional-carpenter-hold-electric-circu-2024-01-04-21-15-19-utc_bf78o6.jpg",
      title: "Office Space",
      alt: "Professional office furniture layout",
    },
  ],
};

const Installation = () => {
  const [swiper, setSwiper] = React.useState(null);
  const { slides, description } = installationData;
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="relative h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title Section */}
        <h2 className="py-28 xl:py-24 font-['SF_Pro_Display'] text-5xl xl:text-6xl text-center font-semibold normal-case p-2 bg-gradient-to-r from-[#433E99] to-[#EF4832] bg-clip-text text-transparent relative z-10 bg-white">
          Lorem Ipsum
        </h2>

        {/* Carousel Section */}
        <div className="w-[80%] xl:w-full relative mb-12">
          <div className="aspect-[4/3] w-full relative overflow-hidden rounded-lg">
            <Swiper
              direction="vertical"
              onSwiper={setSwiper}
              speed={500}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              className="h-full"
              style={{ height: "100%" }}
              loop={true}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="h-full">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
              <button
                onClick={prevSlide}
                className="border-2 border-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-white/20 active:bg-white/30 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="border-2 border-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all hover:bg-white/20 active:bg-white/30 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/75 text-white px-4 py-2 rounded-full text-sm z-10">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <p className="text-center py-24 text-[#2A266A] mx-auto font-['SF_Pro_Display'] text-xl xl:text-[1.625rem] font-normal leading-relaxed px-12 xl:px-36 xl:max-w-6xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Installation;
