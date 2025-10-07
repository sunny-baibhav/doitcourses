import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Faq = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // added home page
  const isEcomPage = location.pathname === "/products/ecom";
  const isAgencyPage = location.pathname === "/products/agency";
  const isAmazonPage = location.pathname === "/products/amazon";
  const isSixfigurePage = location.pathname === "/products/sixfigure";
  const isEntrepreneursPage = location.pathname === "/products/entrepreneurs";
  const isGhostPage = location.pathname === "/products/ghost";
  const isMarketPage = location.pathname === "/products/market";
  const isCopyPage = location.pathname === "/products/copy";
  const isMoneyPage = location.pathname === "/products/money";
  const isClickaffiliatePage =
    location.pathname === "/products/1-click-affiliate";

  // Manage open/close state
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I get to keep 100% of the Profit?",
      answer:
        "Yes, you get to keep 100% of the profit you earn from your sales! There are no additional commissions or hidden charges—everything you make is entirely yours to keep.",
    },
    {
      question: "How do I get paid?",
      answer:
        "We make getting paid simple and flexible! DropCourse integrates with major payment providers such as Stripe, PayPal, and RazorPay. Once connected, all your payments are processed seamlessly, allowing you to focus on growing your business.",
    },
    {
      question: "Do I have to pay extra for the courses?",
      answer:
        "Nope! All courses are included free with the DropCourse All-Access plan. You also get access to the pre-built community, content library, landing-page templates, and more, all bundled into the single subscription.",
    },
    {
      question: "How can I cancel my subscription?",
      answer:
        "Canceling your subscription is super easy! With just two clicks in your dashboard, you can cancel anytime—no hassle, no complications. We’ve made the process straightforward so you have complete control over your account.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="section no-bottom"
      style={{
        backgroundColor: isHomePage
          ? "#ffffff"
          : isEcomPage
          ? "#1a2603"
          : isAgencyPage
          ? "#000d1e"
          : isAmazonPage
          ? "#251000"
          : isSixfigurePage
          ? "#002b29"
          : isEntrepreneursPage
          ? "#2b1f00"
          : isGhostPage
          ? "#2b0001"
          : isMarketPage
          ? "#001706"
          : isCopyPage
          ? "#001e09"
          : isMoneyPage
          ? "#20002b"
          : isClickaffiliatePage
          ? "#2b0020"
          : "#000d1e",
      }}
    >
      <div className="w-layout-blockcontainer container w-container">
        <div className="wrap-v-regular align-center margin-s">
          <a href="#" className="header-badge w-inline-block">
            <div className="wrap-h-x-small">
              <p className="badge-p">FAQs</p>
            </div>
          </a>
          <h2
            style={{
              color: isHomePage
                ? "#000000"
                : isEcomPage
                ? "#ffffff"
                : isAgencyPage
                ? "#ffffff"
                : isAmazonPage
                ? "#ffffff"
                : isSixfigurePage
                ? "#ffffff"
                : isEntrepreneursPage
                ? "#ffffff"
                : isGhostPage
                ? "#ffffff"
                : isMarketPage
                ? "#ffffff"
                : isCopyPage
                ? "#ffffff"
                : isMoneyPage
                ? "#ffffff"
                : isClickaffiliatePage
                ? "#ffffff"
                : "#000000",
            }}
          >
            Frequently asked questions
          </h2>
        </div>

        <div
          className="outline-div faqs"
          style={{
            backgroundColor: isHomePage
              ? "#ffffff"
              : isEcomPage
              ? "#1a2603"
              : isAgencyPage
              ? "#000d1e"
              : isAmazonPage
              ? "#251000"
              : isSixfigurePage
              ? "#002b29"
              : isEntrepreneursPage
              ? "#2b1f00"
              : isGhostPage
              ? "#2b0001"
              : isMarketPage
              ? "#001706"
              : isCopyPage
              ? "#001e09"
              : isMoneyPage
              ? "#20002b"
              : isClickaffiliatePage
              ? "#2b0020"
              : "#000d1e",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq w-dropdown"
              style={{
                backgroundColor: isHomePage
                  ? "#ffffff"
                  : isEcomPage
                  ? "#1a2603"
                  : isAgencyPage
                  ? "#000d1e"
                  : isAmazonPage
                  ? "#251000"
                  : isSixfigurePage
                  ? "#002b29"
                  : isEntrepreneursPage
                  ? "#2b1f00"
                  : isGhostPage
                  ? "#2b0001"
                  : isMarketPage
                  ? "#001706"
                  : isCopyPage
                  ? "#001e09"
                  : isMoneyPage
                  ? "#20002b"
                  : isClickaffiliatePage
                  ? "#2b0020"
                  : "#000d1e",
                borderBottom: "1px solid #ccc",
              }}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              {/* Title */}
              <div
                className="faq-title w-dropdown-toggle"
                role="button"
                tabIndex={0}
                onClick={() => toggleFaq(index)}
                style={{
                  cursor: "pointer",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h5
                  style={{
                    color: isHomePage
                      ? "#000000"
                      : isEcomPage
                      ? "#ffffff"
                      : isAgencyPage
                      ? "#ffffff"
                      : isAmazonPage
                      ? "#ffffff"
                      : isSixfigurePage
                      ? "#ffffff"
                      : isEntrepreneursPage
                      ? "#ffffff"
                      : isGhostPage
                      ? "#ffffff"
                      : isMarketPage
                      ? "#ffffff"
                      : isCopyPage
                      ? "#ffffff"
                      : isMoneyPage
                      ? "#ffffff"
                      : isClickaffiliatePage
                      ? "#ffffff"
                      : "#000000",
                  }}
                >
                  {faq.question}
                </h5>
                <div className="faq-icon-2">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      color: isHomePage
                        ? "#000000"
                        : isEcomPage
                        ? "#ffffff"
                        : "#251000",
                    }}
                  >
                    <path
                      d="M8.00045 8.78092L11.3003 5.48111L12.2431 6.42392L8.00045 10.6666L3.75781 6.42392L4.70063 5.48111L8.00045 8.78092Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div
                className="faq-content"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                  backgroundColor: isHomePage
                    ? "#f9f9f9"
                    : isEcomPage
                    ? "#263a0a"
                    : "#f9f9f9",
                  padding: openIndex === index ? "15px" : "0px 15px",
                  opacity: openIndex === index ? 1 : 0,
                  color: isHomePage
                    ? "#000000"
                    : isEcomPage
                    ? "#ffffff"
                    : "#251000",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
