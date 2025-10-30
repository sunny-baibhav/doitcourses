import React, { useState } from "react";

const Pricing = () => {
  const [coursePrice, setCoursePrice] = useState(100);
  const [students, setStudents] = useState(100);

  // Calculate profit dynamically
  const profit = coursePrice * students - 17; // minus $17 monthly investment

  return (
    <section className="section no-top pricing">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="no-top">One Ultimate Plan</h2>
          <p className="paragraph-large max-width-badge">
            A plan with so much value it seems too good to be true.
          </p>
        </div>

        {/* Profit Calculator Section */}
        <div className="wrap-v-regular align-center">
          <a href="#" className="header-badge w-inline-block">
            <div className="wrap-h-x-small">
              <p>Profit Calculator</p>
            </div>
          </a>

          <h2 className="no-botton">Calculate your monthly profit</h2>
          <div className="note margin-regular">*Drag the sliders</div>

          <div className="outline-div calculator">
            {/* Course Price Slider */}
            <div className="outline-div slider">
              <div className="box has-8-gap">
                <div className="pricing-header">
                  <div>
                    You resell our premium <span className="products-name">course</span> for
                  </div>
                  <div className="user-number">
                    <span className="cost-value">${coursePrice}</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  step={5}
                  value={coursePrice}
                  onChange={(e) => setCoursePrice(Number(e.target.value))}
                  className="cost-slider"
                />
                <div className="range-box">
                  <div>$0</div>
                  <div className="range-line black" />
                  <div>$200</div>
                  <div className="range-line black" />
                  <div>$400</div>
                  <div className="range-line black" />
                  <div>$600</div>
                  <div className="range-line black" />
                  <div>$800</div>
                  <div className="range-line black" />
                  <div>$1000+</div>
                </div>
              </div>
            </div>

            {/* Students Slider */}
            <div className="outline-div slider">
              <div className="box has-8-gap">
                <div className="pricing-header">
                  <div className="user-number">
                    <span className="students-value">{students}</span>
                  </div>
                  <div>
                    students buy the <span className="products-name">course</span> monthly
                  </div>
                </div>
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
                  <div>0</div>
                  <div className="range-line black" />
                  <div>200</div>
                  <div className="range-line black" />
                  <div>400</div>
                  <div className="range-line black" />
                  <div>600</div>
                  <div className="range-line black" />
                  <div>800</div>
                  <div className="range-line black" />
                  <div>1000+</div>
                </div>
              </div>
            </div>

            {/* Profit Result */}
            <div className="outline-div slider">
              <div className="div-block-10">
                <h3 className="no-padding">Monthly profit:</h3>
                <h2 className="no-padding">
                  <span className="total-profit small">
                    ${profit.toLocaleString()}
                  </span>
                </h2>
              </div>
              <p className="margin-regular">
                *Minus DropCourse <span className="change-price">$17</span> Monthly Investment
              </p>
              <a
                href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
                className="button-primary _100 w-inline-block"
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
    </section>
  );
};

export default Pricing;
