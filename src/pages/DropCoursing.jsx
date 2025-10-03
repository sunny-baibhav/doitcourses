import React from 'react'
import { useLocation } from "react-router-dom";

const DropCoursing = () => {
  const location = useLocation();
  const isEcomPage = location.pathname === "/products/ecom";
  return (
   <section className="section footer no-top bottom" style={{ backgroundColor: isEcomPage ? "#1a2603" : "#ffffff" }}>
  <div className="container-footer">
    <div className="outline-div">
      <div className="cta-block-d align-centre">
        <div
          id="w-node-bfcd9748-224e-b977-5545-473f86b820a5-86b820a1"
          className="cta-content-wrapper"
        >
          <div className="wrap-v-large align-centre">
            <div className="wrap-v-regular">
              <h3 className="white">
                Start DropCoursing today for{" "}
                <span className="change-price">$17</span>p/m 🔐
              </h3>
              <p className="paragraph-large white">
                Become part of the $1M+ on-platform earnings, start your
                plug-and-play premium course business today.
              </p>
              <div className="outline-div blur">
                <div className="flex-auto-h">
                  <div className="wrap-h-small">
                    <img
                      src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68131f1635fcaf6dc6a8b454_electric_bolt_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                    />
                    <p className="white">Get Instant Access</p>
                  </div>
                  <div className="dot white mobile-hide" />
                  <div className="wrap-h-small">
                    <img
                      src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68131f31bd59c3c7ef69e6a9_handshake_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                    />
                    <p className="white">24/7 Support</p>
                  </div>
                  <div className="dot white mobile-hide" />
                  <div className="wrap-h-small">
                    <img
                      src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68131f5335fcaf6dc6a8e397_back_hand_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg"
                      loading="lazy"
                      alt=""
                    />
                    <p className="white">Cancel Anytime</p>
                  </div>
                </div>
              </div>
              <div className="flex-auto-h align-centre margin-regular">
                <div className="wrap-h-small">
                  <p className="white mobile-hide">
                    <strong>Excellent</strong>
                  </p>
                  <img
                    src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/681327e6a9a4c00df6ee8ae5_star_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="trust-pilot"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/681327e6a9a4c00df6ee8ae5_star_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="trust-pilot"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/681327e6a9a4c00df6ee8ae5_star_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="trust-pilot"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/681327e6a9a4c00df6ee8ae5_star_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="trust-pilot"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/681327e6a9a4c00df6ee8ae5_star_24dp_FFFFFF_FILL1_wght400_GRAD0_opsz24.svg"
                    loading="lazy"
                    alt=""
                    className="trust-pilot"
                  />
                  <p className="white">4.8 out of 5</p>
                </div>
              </div>
            </div>
            <a
              data-wf-native-id-path="bfcd9748-224e-b977-5545-473f86b820ce:bfcd9748-224e-b977-5545-473f86b820c8"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="bfcd9748-224e-b977-5545-473f86b820c8"
              data-wf-component-context="%5B%7B%22componentId%22%3A%22bfcd9748-224e-b977-5545-473f86b820a1%22%2C%22instanceId%22%3A%22bfcd9748-224e-b977-5545-473f86b820ce%22%7D%5D"
              href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
              data-wf-event-ids={157035618}
              className="button-primary white w-inline-block"
              rel="noopener"
            >
              <div>
                Start now <span className="arrow">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default DropCoursing