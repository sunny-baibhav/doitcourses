import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const isEcomPage = location.pathname === "/products/ecom";
const isAgencyPage = location.pathname === "/products/agency";
const isAmazonPage = location.pathname === "/products/amazon";
const isSixfigurePage = location.pathname === "/products/sixfigure";
const isEntrepreneursPage = location.pathname === "/products/entrepreneurs";
const isGhostPage = location.pathname === "/products/ghost";
const isMarketPage = location.pathname === "/products/market";
const isCopyPage = location.pathname === "/products/copy";
const isMoneyPage = location.pathname === "/products/money";
const isClickaffiliatePage = location.pathname === "/products/1-click-affiliate";
const ProductsStats = () => {
  return (
    <section className="section products" style={{
      backgroundColor: isEcomPage
        ? "#1a2603" // when on /products/ecom
        : isAgencyPage
        ? "#000d1e" // when on /products/agency
        : isAmazonPage
        ? "#251000" // when on /products/amazon
        : isSixfigurePage
        ? "#002b29" // when on /products/sixfigure
        : isEntrepreneursPage
        ? "#2b1f00" // when on /products/entrepreneurs
        : isGhostPage
        ? "#2b0001" // when on /products/ghost
        : isMarketPage
        ? "#001706" // when on /products/market
        : isCopyPage
        ? "#001e09" // when on /products/copy
        : isMoneyPage
        ? "#20002b" // when on /products/money
        : isClickaffiliatePage
        ? "#2b0020" // when on /products/1-click-affiliate
        : "#251000", // default fallback
    }} >
  <div className="w-layout-blockcontainer container w-container">
    <div className="wrap-v-regular centre">
      <a
        data-utm-badge="comment"
        data-wf-native-id-path="7d71abaf-479d-aa5c-a68e-906d1c229847"
        data-wf-ao-click-engagement-tracking="true"
        data-wf-element-id="7d71abaf-479d-aa5c-a68e-906d1c229847"
        href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
        className="header-badge products w-inline-block"
        rel="noopener"
        
      >
        <div className="wrap-h-x-small">
          <p className="max-width-badge products">Product Stats</p>
        </div>
      </a>
      <h2>
        <span data-product-name="Ecom Prodigy" className="products-name">
          Ecom Prodigy
        </span>{" "}
        is packed with value
      </h2>
      <p className="h1-max-width">
        Each DropCourse info product is crafted by genuine experts, giving you a
        premium, value-packed offering that’s ready to sell to your audience.
      </p>
      <div className="_3-grid stats">
        <div href="#" className="testimonials-div products">
          <div style={{ backgroundColor: "#1a2603" }} className="stats-div">
            <h2
              style={{ backgroundColor: "#a4d54a", color: "#1a2603" }}
              className="stat"
            >
              40
            </h2>
            <h3>Premium Lessons</h3>
          </div>
        </div>
        <div
          href="#"
          data-forced-hover=""
          className="testimonials-div products"
        >
          <div style={{ backgroundColor: "#1a2603" }} className="stats-div">
            <h2
              style={{ backgroundColor: "#a4d54a", color: "#1a2603" }}
              className="stat"
            >
              6
            </h2>
            <h3>Expert Modules</h3>
          </div>
        </div>
        <div href="#" className="testimonials-div products">
          <div style={{ backgroundColor: "#1a2603" }} className="stats-div">
            <h2
              style={{ backgroundColor: "#a4d54a", color: "#1a2603" }}
              className="stat"
            >
              6.1
            </h2>
            <h3>Hours of Content</h3>
          </div>
        </div>
        <div
          href="#"
          className="testimonials-div products w-condition-invisible"
        >
          <div style={{ backgroundColor: "#1a2603" }} className="stats-div">
            <h3>Over</h3>
            <h2
              style={{ backgroundColor: "#a4d54a", color: "#1a2603" }}
              className="stat"
            >
              40
            </h2>
            <h3>High-Quality Members</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ProductsStats