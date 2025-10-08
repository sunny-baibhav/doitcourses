import React from 'react'
import { useLocation } from 'react-router-dom'

const AllAccess = () => {
  const location = useLocation();
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
  return (
    <section
      style={{
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
      }}
      className="section no-padding"
    >
    <div className="container-footer">
      <div className="outline-div blur">
        <div className="cta-block-d right">
          <div
            id="w-node-af042092-3e63-bb99-f41d-e1f289aed014-194faa41"
            className="cta-content-wrapper _2-grid"
          >
            <div className="wrap-v-large">
              <img
                src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6868cb51d74e445c7fd5a2c3_Group%2029.png"
                loading="lazy"
                sizes="230.140625px"
                height={50}
                alt=""
                srcSet="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6868cb51d74e445c7fd5a2c3_Group%2029-p-500.png 500w, https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6868cb51d74e445c7fd5a2c3_Group%2029.png 626w"
                className="h3-image"
              />
              <div>
                <h3 className="white">Your one ultimate plan,</h3>
                <div className="pricing-price-block">
                  <h3 className="pricing white">
                    {" "}
                    just <span className="change-price">$17</span>
                    <span className="discount">-30%</span>
                  </h3>
                  <div className="pricing-price-detail white">
                    <p className="paragraph-small-2 month">/month</p>
                  </div>
                </div>
              </div>
              <a
                data-wf-native-id-path="eb524bb1-8f65-e148-2dd7-eb0dbc85dd5a"
                data-wf-ao-click-engagement-tracking="true"
                data-wf-element-id="eb524bb1-8f65-e148-2dd7-eb0dbc85dd5a"
                href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
                data-wf-event-ids={157035618}
                className="button-primary white w-inline-block"
                rel="noopener"
              >
                <div>
                  Get instant access <span className="arrow">→</span>
                </div>
              </a>
            </div>
            <div className="outline-div blur">
              <img
                src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/688ca93db3df9eadeff75fb8_Frame%20179.avif"
                loading="lazy"
                sizes="(max-width: 2634px) 100vw, 2634px"
                srcSet="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/688ca93db3df9eadeff75fb8_Frame%20179-p-500.avif 500w, https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/688ca93db3df9eadeff75fb8_Frame%20179-p-800.avif 800w, https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/688ca93db3df9eadeff75fb8_Frame%20179-p-1080.avif 1080w, https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/688ca93db3df9eadeff75fb8_Frame%20179.avif 2634w"
                alt=""
                className="image-cover highlight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default AllAccess