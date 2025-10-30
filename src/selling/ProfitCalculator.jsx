import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProfitCalculator = () => {
  const location = useLocation();

  // Identify page path
  const path = location.pathname;
  const bgColors = {
    "/products/ecom": "#1a2603",
    "/products/agency": "#000d1e",
    "/products/amazon": "#251000",
    "/products/sixfigure": "#002b29",
    "/products/entrepreneurs": "#2b1f00",
    "/products/ghost": "#2b0001",
    "/products/market": "#001706",
    "/products/copy": "#001e09",
    "/products/money": "#20002b",
    "/products/1-click-affiliate": "#2b0020",
  };
  const bgColor = bgColors[path] || "#251000";

  // States for sliders
  const [price, setPrice] = useState(100);
  const [students, setStudents] = useState(100);

  // Calculate profit dynamically
  const totalProfit = price * students - 17; // Minus DropCourse $17 monthly investment

  // For product name
  const isSixfigurePage = path === "/products/sixfigure";
  const productName = isSixfigurePage ? "Profit Up" : "Ecom Prodigy";

  return (
    <section style={{ backgroundColor: bgColor }} className="section products">
      <div className="w-layout-blockcontainer container w-container">
        <div className="wrap-v-regular align-center">
          <a
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

              {/* Resell price slider */}
              <div style={{ backgroundColor: bgColor }} className="outline-div slider">
                <div className="box has-8-gap">
                  <div className="pricing-header">
                    <div>
                      You resell{" "}
                      <span data-product-name={productName} className="products-name">
                        {productName}
                      </span>{" "}
                      for
                    </div>
                    <div
                      style={{ backgroundColor: "#a4d54a", color: bgColor }}
                      className="user-number"
                    >
                      <span className="cost-value">${price}</span>
                    </div>
                  </div>

                  <div className="box has-8-gap">
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      step={5}
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="cost-slider"
                    />
                    <div className="range-box">
                      <div>$0</div><div className="range-line" />
                      <div>$200</div><div className="range-line" />
                      <div>$400</div><div className="range-line" />
                      <div>$600</div><div className="range-line" />
                      <div>$800</div><div className="range-line" />
                      <div>$1000+</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Students slider */}
              <div style={{ backgroundColor: bgColor }} className="outline-div slider">
                <div className="box has-8-gap">
                  <div className="pricing-header">
                    <div
                      style={{ color: bgColor, backgroundColor: "#a4d54a" }}
                      className="user-number"
                    >
                      <span className="students-value">{students}</span>
                    </div>
                    <div>
                      students buy{" "}
                      <span data-product-name={productName} className="products-name">
                        {productName}
                      </span>{" "}
                      monthly
                    </div>
                  </div>

                  <div className="box has-8-gap">
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      step={5}
                      value={students}
                      onChange={(e) => setStudents(Number(e.target.value))}
                      className="students-slider"
                    />
                    <div className="range-box">
                      <div>0</div><div className="range-line" />
                      <div>200</div><div className="range-line" />
                      <div>400</div><div className="range-line" />
                      <div>600</div><div className="range-line" />
                      <div>800</div><div className="range-line" />
                      <div>1000+</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profit display */}
              <div style={{ backgroundColor: bgColor }} className="outline-div slider">
                <div className="div-block-10">
                  <h3 className="no-padding">Monthly profit:</h3>
                  <h2 className="no-padding">
                    <span className="total-profit small">
                      ${totalProfit.toLocaleString()}
                    </span>
                  </h2>
                </div>
                <p className="margin-regular">
                  *Minus DropCourse <span className="change-price">$17</span> Monthly Investment
                </p>
                <a
                  style={{ backgroundColor: "#a4d54a", color: bgColor }}
                  href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
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
  );
};

export default ProfitCalculator;
