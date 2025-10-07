import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Liveresults = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: (
      <div className="custom-arrow custom-arrow-right">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"
            fill="currentColor"
          />
        </svg>
      </div>
    ),
    prevArrow: (
      <div className="custom-arrow custom-arrow-left">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
            fill="currentColor"
          />
        </svg>
      </div>
    ),
    appendDots: (dots) => (
      <div style={{ bottom: "-30px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#f5f9ff",
          margin: "0 6px",
        }}
      />
    ),
  };

  const slides = [
    {
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68b6b606f86027808ddb6f88_ecom%20prodigy%20box.avif",
      title: "Dropshipping Course",
      revenue: "$45,760.99",
      sales: "683",
      link: "https://www.dropcourse.com/products/ecom-prodigy",
    },
    {
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68b6b6075b39d538ac9c9a4e_copywriting%20catalyst%20box.avif",
      title: "Copywriting Course",
      revenue: "$42,823.29",
      sales: "652",
      link: "https://www.dropcourse.com/products/copywriting-catalyst",
    },
    {
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68b6b607cbf0feb290d3fd18_entrepreneurs%20academy%20box.avif",
      title: "Done-for-you Community",
      revenue: "$57,631.26",
      sales: "596",
      link: "https://www.dropcourse.com/products/entrepreneurs-academy",
    },
    {
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68b6b606d208e42ea8f5023e_Agency%20blueprint%20box.avif",
      title: "SMMA Course",
      revenue: "$44,842.94",
      sales: "701",
      link: "https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04",
    },
    {
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68b6b60631eb5949732d8f4a_six%20figure%20closer%20box.avif",
      title: "High Ticket Closer Course",
      revenue: "$39,857.77",
      sales: "685",
      link: "https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04",
    },
    {
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68b6b606407252a620486be1_market%20mastery%20box.avif",
      title: "Day Trading Course",
      revenue: "$49,786.10",
      sales: "672",
      link: "https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04",
    },
    {
      img: "",
      title: "Explore all courses →",
      revenue: "",
      sales: "",
      link: "/products",
      isButton: true,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="w-layout-grid heading-grid">
          <div className="column-regular-2">
            <a href="#" className="header-badge w-inline-block">
              <div className="wrap-h-x-small">
                <p className="badge-p">Live Results</p>
              </div>
            </a>
            <h2>See what's being sold in real time</h2>
            <p className="paragraph-large">
              A live look at popular courses being hosted on our platform and
              sold online. All courses come <em>free</em> with DropCourse.
            </p>
            <div className="price-increase-div green">
              <div className="wrap-h-small">
                <div className="dot red green" />
                <div>
                  Live Data Refreshing In: <span className="count">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {slides.map((slide, index) =>
            slide.isButton ? (
              <a
                key={index}
                href={slide.link}
                className="button-secondary _100 w-inline-block"
              >
                <div>
                  {slide.title} <span className="arrow">→</span>
                </div>
              </a>
            ) : (
              <a
                key={index}
                href={slide.link}
                className="testimonial-slide-item w-inline-block"
                style={{ borderColor: "#e6e6e7" }}
              >
                <img src={slide.img} alt="" className="image-cover-2" />
                <div className="drop-shadow" />
                <p className="paragraph-regular-8">{slide.title}</p>
                <div className="column-small flip">
                  <div>
                    <div>Revenue Today:</div>
                    <div className="h6-heading-2 revenue">
                      <span className="random-rev">{slide.revenue}</span>
                    </div>
                  </div>
                  <div>
                    <div>Sales Today:</div>
                    <div className="h6-heading-2 revenue">
                      <span className="sales">{slide.sales}</span>
                    </div>
                  </div>
                </div>
              </a>
            )
          )}
        </Slider>
      </div>
      <style>{`
        .custom-arrow { cursor: pointer; }
        .custom-arrow-right { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); z-index: 1; }
        .custom-arrow-left { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); z-index: 1; }
        .slick-dots li button:before { font-size: 12px; color: #f5f9ff; }
        .slick-dots li.slick-active button:before { color: #235ae9; }
      `}</style>
    </section>
  );
};

export default Liveresults;
