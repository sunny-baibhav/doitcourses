import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SamllSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Background colors for individual logo boxes
  const logoBoxColors = [
    "#0077B5", // LinkedIn blue
    "#EB001B", // Mastercard red
    "#F2F2F2", // Microsoft white/grey
    "#FFFB00", // Notion yellow-ish
    "#4A154B", // Slack purple
    "#00A7E1", // Stripe blue
    "#0077B5",
    "#EB001B",
  ];

  // Logos with direct public path
  const logos = [
    { src: "/logos/linkedin-svgrepo-com.svg", alt: "LinkedIn" },
    { src: "/logos/mastercard-svgrepo-com.svg", alt: "Mastercard" },
    { src: "/logos/microsoft-svgrepo-com.svg", alt: "Microsoft" },
    { src: "/logos/notion-svgrepo-com.svg", alt: "Notion" },
    { src: "/logos/slack-svgrepo-com.svg", alt: "Slack" },
    { src: "/logos/stripe-svgrepo-com.svg", alt: "Stripe" },
    { src: "/logos/linkedin-svgrepo-com.svg", alt: "LinkedIn" },
    { src: "/logos/mastercard-svgrepo-com.svg", alt: "Mastercard" },
  ];

  return (
    <section style={{ padding: "40px 0", background: "#fffefe" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ marginBottom: "30px", fontWeight: 600 }}>
          Trusted by companies of all sizes
        </h2>

        <Slider {...settings}>
          {logos.map((logo, index) => {
            const boxStyle = {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: logoBoxColors[index],
              padding: "20px",
              borderRadius: "20px",
              width: "80px",
              height: "80px",
              margin: "0 auto",
            };

            return (
              <div key={index}>
                <div style={boxStyle}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: "40px", width: "auto" }}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SamllSlider;
