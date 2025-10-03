import React from 'react'

const ProfitCalculator = () => {
  return (
    <section style={{ backgroundColor: "#1a2603" }} className="section products">
    <div className="w-layout-blockcontainer container w-container">
      <div className="wrap-v-regular align-center">
        <a
          data-wf-native-id-path="47eb230b-7d5f-ddae-1f5f-1a46a2cd06e3"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="47eb230b-7d5f-ddae-1f5f-1a46a2cd06e3"
          href="#"
          className="header-badge products w-inline-block"
        >
          <div className="wrap-h-x-small">
            <p>Profit Calculator</p>
          </div>
        </a>
        <h2 className="no-botton">Calculate your monthly reselling profit</h2>
        <div className="note margin-regular">*Drag the sliders</div>
        <div className="outline-div blur">
          <div className="calculator">
            <div
              style={{ backgroundColor: "#1a2603" }}
              className="outline-div slider"
            >
              <div className="box has-8-gap">
                <div
                  id="w-node-bbda398e-b885-494f-7fb0-8af1e4f29184-194faa41"
                  className="pricing-header"
                >
                  <div>
                    You resell{" "}
                    <span
                      data-product-name="Ecom Prodigy"
                      className="products-name"
                    >
                      Ecom Prodigy
                    </span>{" "}
                    for
                  </div>
                  <div
                    style={{ backgroundColor: "#a4d54a", color: "#1a2603" }}
                    className="user-number"
                  >
                    <span className="cost-value">$100</span>
                  </div>
                </div>
                <div
                  id="w-node-bbda398e-b885-494f-7fb0-8af1e4f2918b-194faa41"
                  className="box has-8-gap"
                >
                  <input
                    id="w-node-bbda398e-b885-494f-7fb0-8af1e4f2918c-194faa41"
                    type="range"
                    min={0}
                    max={1000}
                    step={5}
                    className="cost-slider"
                  />
                  <div
                    id="w-node-bbda398e-b885-494f-7fb0-8af1e4f2918d-194faa41"
                    className="range-box"
                  >
                    <div>$0</div>
                    <div className="range-line" />
                    <div>$200</div>
                    <div className="range-line" />
                    <div>$400</div>
                    <div className="range-line" />
                    <div>$600</div>
                    <div className="range-line" />
                    <div>$800</div>
                    <div className="range-line" />
                    <div>$1000+</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#1a2603" }}
              className="outline-div slider"
            >
              <div className="box has-8-gap">
                <div
                  id="w-node-_94323d53-9ad5-b36c-71e9-4a65cb73c51f-194faa41"
                  className="pricing-header"
                >
                  <div
                    style={{ color: "#1a2603", backgroundColor: "#a4d54a" }}
                    className="user-number"
                  >
                    <span className="students-value">100</span>
                  </div>
                  <div>
                    students buy{" "}
                    <span
                      data-product-name="Ecom Prodigy"
                      className="products-name"
                    >
                      Ecom Prodigy
                    </span>{" "}
                    monthly
                  </div>
                </div>
                <div
                  id="w-node-_94323d53-9ad5-b36c-71e9-4a65cb73c526-194faa41"
                  className="box has-8-gap"
                >
                  <input
                    id="w-node-_94323d53-9ad5-b36c-71e9-4a65cb73c527-194faa41"
                    type="range"
                    min={0}
                    max={1000}
                    step={5}
                    className="students-slider"
                  />
                  <div
                    id="w-node-_94323d53-9ad5-b36c-71e9-4a65cb73c528-194faa41"
                    className="range-box"
                  >
                    <div>0</div>
                    <div className="range-line" />
                    <div>200</div>
                    <div className="range-line" />
                    <div>400</div>
                    <div className="range-line" />
                    <div>600</div>
                    <div className="range-line" />
                    <div>800</div>
                    <div className="range-line" />
                    <div>1000+</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#1a2603" }}
              className="outline-div slider"
            >
              <div className="div-block-10">
                <h3 className="no-padding">Monthly profit:</h3>
                <h2 className="no-padding">
                  <span className="total-profit small">$9,950.01</span>
                </h2>
              </div>
              <p className="margin-regular">
                *Minus DropCourse <span className="change-price">$17</span>{" "}
                Monthly Investment
              </p>
              <a
                data-wf-native-id-path="f4404438-8689-6665-6a62-8327212b3490"
                data-wf-ao-click-engagement-tracking="true"
                data-wf-element-id="f4404438-8689-6665-6a62-8327212b3490"
                style={{ backgroundColor: "#a4d54a", color: "#1a2603" }}
                href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
                data-wf-event-ids={157035618}
                className="button-primary products w-inline-block"
                rel="noopener"
              >
                <div>
                  Claim your profit now <span className="arrow">→</span>
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

export default ProfitCalculator