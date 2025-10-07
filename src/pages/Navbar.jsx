import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isEcomPage = location.pathname === "/products/ecom";

  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const featuresRef = useRef(null);
  const coursesRef = useRef(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const listener = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener ? mql.addEventListener("change", listener) : mql.addListener(listener);
    return () => {
      mql.removeEventListener ? mql.removeEventListener("change", listener) : mql.removeListener(listener);
    };
  }, []);

  // Close dropdowns on outside tap (mobile)
  useEffect(() => {
    if (!isMobile) return;
    const onDocClick = (e) => {
      const f = featuresRef.current;
      const c = coursesRef.current;
      const clickedInsideFeatures = f && f.contains(e.target);
      const clickedInsideCourses = c && c.contains(e.target);
      if (!clickedInsideFeatures && !clickedInsideCourses) {
        setFeaturesOpen(false);
        setCoursesOpen(false);
      }
    };
    document.addEventListener("click", onDocClick, true);
    return () => document.removeEventListener("click", onDocClick, true);
  }, [isMobile]);

  const popularFeatures = [
    {
      title: "Courses",
      desc: "Premium courses built by experts",
      icon: "📚",
      bgColor: "#FDB241",
      link: "/products",
    },
    {
      title: "Course Editor",
      desc: "Customise, white-label & make it yours",
      icon: "✏️",
      bgColor: "#4CAFE5",
      link: "/products",
    },
    {
      title: "Communities",
      desc: "Instant 2k+ member community",
      icon: "👥",
      bgColor: "#FDB241",
      link: "/products",
    },
    {
      title: "Content Library",
      desc: "25k+ pre-edited videos to go viral",
      icon: "📚",
      bgColor: "#3BB77E",
      link: "/products",
    },
    {
      title: "Landing Pages",
      desc: "Plug & play landing pages in 2 mins",
      icon: "📄",
      bgColor: "#E94E4E",
      link: "/products",
    },
    {
      title: "AI Instructors",
      desc: "Built-in AI course content assistants",
      icon: "✨",
      bgColor: "#9C27B0",
      link: "https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04",
    },
  ];

  const courses = [
    {
      name: "Ecom Prodigy",
      desc: "Dropshipping Course",
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6819bdbe100a54cf952ff077_ecom.jpg",
    },
    {
      name: "Copywriting Catalyst",
      desc: "Copywriting Course",
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6819e50b71cb8e13d42502fe_Frame%2056.avif",
    },
    {
      name: "Entrepreneur Academy",
      desc: "Paid Community",
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6819e5121026ac6ecfef6fd4_Frame%2064.avif",
    },
    {
      name: "Agency Blueprint",
      desc: "SMMA Course",
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6819e5121026ac6ecfef6fc8_Frame%2057.avif",
    },
    {
      name: "Market Mastery",
      desc: "Day Trading Course",
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6819e511f51e4b33f43b193f_Frame%2058.avif",
    },
    {
      name: "Ghost Creator",
      desc: "YouTube Automation Course",
      img: "https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6819e51155528a4510a79a5d_Frame%2062.avif",
    },
  ];

  return (
    <div className="navbar">
      {/* Top Banner */}
      {/* <div className="banner" style={{ backgroundColor: "#0a421e" }}>
    <a
      href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
      className="banner-wrapper w-inline-block"
      rel="noopener"
        >
        <div
  className="caption"
  style={{
    color: isEcomPage ? "#a4d54a" : "#ffffff", // text color changes dynamically
  }}
>
  NEW: Software update for{" "}
  <span className="change-month">October</span>!
      </div>
    </a>
    <img
      src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68cb830893353a116fc492d6_close_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
      loading="lazy"
      width={17}
          alt="close"
      className="x"
    />
      </div> */}

      {/* Main Navbar */}
      <div
        className="nav-bar w-nav"
        style={{
          willChange: "background",
          backgroundColor: isEcomPage ? "#1a2603" : "#ffffff",
        }}
      >
        <div className="nav-container">
          {/* Logo */}
          <a href="/" className="nav-logo-link w-inline-block w--current" style={{ textDecoration: "none", borderBottom: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Icon Box */}
              <div style={{
                width: "66px",
                height: "55px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #e9ecef",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}>
                <img
                  src="/home.svg"
                  loading="lazy"
                  alt="Doitcourse Logo"
                  className="logo"
                  style={{
                    width: "45px",
                    height: "45px",
                    objectFit: "contain",
                  }}
                />
              </div>
               <h3
                 style={{
                   margin: 0,
                   fontSize: "24px",
                   fontWeight: 900,
                   color: "#333",
                   textDecoration: "none !important",
                   fontFamily: "Arial, sans-serif",
                   borderBottom: "none !important",
                   outline: "none",
                 }}
               >
                 Doitcourse
               </h3>

            </div>
          </a>

          {/* Nav Menu */}
          <nav role="navigation" className="nav-menu w-nav-menu">
            {/* Features Dropdown */}
            <div
              className="nav-dropdown w-dropdown"
              ref={featuresRef}
              onMouseEnter={() => { if (!isMobile) { setFeaturesOpen(true); setCoursesOpen(false); } }}
              onMouseLeave={() => { if (!isMobile) setFeaturesOpen(false); }}
              onClick={() => { if (isMobile) { setFeaturesOpen((o) => !o); if (!featuresOpen) setCoursesOpen(false); } }}
              style={{
                position: "relative",
                backgroundColor: isEcomPage ? "#1a2603" : "#ffffff",
                width: isMobile ? "100%" : undefined,
              }}
            >
              <div className="nav-toggle w-dropdown-toggle">
                <div style={{ color: isEcomPage ? "#ffffff" : "#000000" }}>
                  Features
                </div>
                <div
                  className="icon-small w-embed"
                  style={{ color: isEcomPage ? "#ffffff" : "#000000" }}
                >
                  <ChevronDown
                    size={16}
                    style={{
                      transform: featuresOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
              </div>

              {featuresOpen && (
                <nav
                  className="nav-list w-dropdown-list"
                  style={{
                    opacity: 1,
                    display: "block",
                    position: isMobile ? "static" : "absolute",
                    top: isMobile ? undefined : "100%",
                    left: isMobile ? undefined : "0",
                    width: isMobile ? "100%" : "600px",
                    maxWidth: isMobile ? "100%" : "90vw",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    border: "1px solid #E5E7EB",
                    zIndex: 1000,
                    padding: isMobile ? "16px" : "24px",
                  }}
                >
                  <div className="nav-dropdown-base-c">
                    <div className="nav-bottom">
                      <div
                        className="paragraph-small black"
                        style={{
                          marginBottom: "20px",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        Popular Features
                      </div>

                      <div
                        className="_2-grid"
                        style={{
                          display: "grid",
                          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                          gap: "12px",
                        }}
                      >
                        {popularFeatures.map((feature, index) => (
                          <a
                            key={index}
                            href={feature.link}
                            className="wrap-v-regular menu-features w-inline-block"
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              padding: "12px",
                              borderRadius: "8px",
                              border: "1px solid #E5E7EB",
                              transition: "all 0.2s ease",
                              textDecoration: "none",
                              color: "inherit",
                              backgroundColor: "white",
                            }}
                            onClick={() => { if (isMobile) setFeaturesOpen(false); }}
                          >
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "8px",
                                backgroundColor: feature.bgColor,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "20px",
                                marginRight: "10px",
                                flexShrink: 0,
                              }}
                            >
                              {feature.icon}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div
                                style={{
                                  fontWeight: "600",
                                  marginBottom: "2px",
                                  fontSize: "13px",
                                  lineHeight: "1.3",
                                }}
                              >
                                {feature.title}
                              </div>
                              <div
                                style={{
                                  fontSize: "11px",
                                  color: "#6B7280",
                                  lineHeight: "1.3",
                                }}
                              >
                                {feature.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </nav>
              )}
            </div>

            {/* Courses Dropdown */}
            <div
              className="nav-dropdown w-dropdown"
              ref={coursesRef}
              onMouseEnter={() => { if (!isMobile) { setCoursesOpen(true); setFeaturesOpen(false); } }}
              onMouseLeave={() => { if (!isMobile) setCoursesOpen(false); }}
              onClick={() => { if (isMobile) { setCoursesOpen((o) => !o); if (!coursesOpen) setFeaturesOpen(false); } }}
              style={{
                position: "relative",
                backgroundColor: isEcomPage ? "#1a2603" : "#ffffff",
                width: isMobile ? "100%" : undefined,
              }}
            >
              <div className="nav-toggle w-dropdown-toggle">
                <div style={{ color: isEcomPage ? "#ffffff" : "#000000" }}>
                  Courses
                </div>
                <div
                  className="icon-small w-embed"
                  style={{ color: isEcomPage ? "#ffffff" : "#000000" }}
                >
                  <ChevronDown
                    size={16}
                    style={{
                      transform: coursesOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
              </div>

              {coursesOpen && (
                <nav
                  className="nav-list w-dropdown-list"
                  style={{
                    opacity: 1,
                    display: "block",
                    position: isMobile ? "static" : "absolute",
                    top: isMobile ? undefined : "100%",
                    left: isMobile ? undefined : "0",
                    width: isMobile ? "100%" : "700px",
                    maxWidth: isMobile ? "100%" : "90vw",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    border: "1px solid #E5E7EB",
                    zIndex: 1000,
                    padding: isMobile ? "16px" : "24px",
                  }}
                >
                  <div className="nav-dropdown-base-c">
                    <div className="nav-bottom">
                      <div
                        className="paragraph-small black"
                        style={{
                          marginBottom: "20px",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        Our Premium Courses & Communities
                      </div>

                      <div
                        className="grid menu"
                        style={{
                          display: "grid",
                          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                          gap: "12px",
                          marginBottom: "20px",
                        }}
                      >
                        {courses.map((course, index) => (
                          <a
                            key={index}
                            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
                            className="nav-feature-link-l w-inline-block"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              borderRadius: "8px",
                              border: "1px solid #E5E7EB",
                              overflow: "hidden",
                              transition: "all 0.2s ease",
                              textDecoration: "none",
                              color: "inherit",
                              backgroundColor: "white",
                            }}
                            onClick={() => { if (isMobile) setCoursesOpen(false); }}
                          >
                            <img
                              src={course.img}
                              alt={course.name}
                              className="nav-image"
                              style={{
                                width: "100%",
                                height: "80px",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="nav-link-icon"
                              style={{ padding: "10px" }}
                            >
                              <div>
                                <div
                                  className="nav-link-text"
                                  style={{
                                    fontWeight: "600",
                                    marginBottom: "2px",
                                    fontSize: "12px",
                                    lineHeight: "1.3",
                                  }}
                                >
                                  {course.name}
                                </div>
                                <div
                                  className="paragraph-small"
                                  style={{
                                    fontSize: "10px",
                                    color: "#6B7280",
                                    lineHeight: "1.3",
                                  }}
                                >
                                  {course.desc}
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>

                      <a
                        href="/products"
                        className="button-secondary nav _100 w-inline-block"
                        style={{
                          display: "inline-block",
                          padding: "10px 20px",
                          borderRadius: "6px",
                          border: "2px solid #235ae9",
                          color: "#235ae9",
                          fontWeight: "600",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                          fontSize: "14px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#235ae9";
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#235ae9";
                        }}
                        onClick={() => { if (isMobile) setCoursesOpen(false); }}
                      >
                        <div>Explore all courses</div>
                      </a>
                    </div>
                  </div>
                </nav>
              )}
            </div>

            {/* Pricing */}
            <a
              href="/"
              className="nav-link w-nav-link"
              style={{ color: isEcomPage ? "#ffffff" : "#000000" }}
            >
              Pricing
            </a>
          </nav>

          {/* Right Buttons */}
          <div className="nav-button-group">
            {isEcomPage ? (
              <a
                data-wf-native-id-path="6f244790-4ba3-360c-6ed5-bcdb081af4f6"
                data-wf-ao-click-engagement-tracking="true"
                data-wf-element-id="6f244790-4ba3-360c-6ed5-bcdb081af4f6"
                style={{
                  backgroundColor: "#a4d54a",
                  borderColor: "#1a2603",
                  color: "#1a2603",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.2s ease",
                }}
                href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
                data-wf-event-ids={157035618}
                className="button-primary products nav mobile-hide w-inline-block"
                rel="noopener"
              >
                <div>
                  Resell now <span className="arrow">→</span>
                </div>
              </a>
            ) : (
              <>
                <a
                  href="/login"
                  className="button-secondary nav mobile-hide w-inline-block"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "inline-block",
                    marginRight: "10px",
                  }}
                >
                  <div>Log in</div>
                </a>
                <a
                  href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
                  className="button-primary nav mobile-hide w-inline-block"
                  rel="noopener"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  <div>
                    Start now <span className="arrow">→</span>
                  </div>
                </a>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

