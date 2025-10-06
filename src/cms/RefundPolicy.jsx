import React from 'react'
import Footer from '../pages/Footer'
import Navbar from '../pages/Navbar'

const RefundPolicy = () => {
  const paragraphStyle = {
    color: '#000000',
    fontSize: '18px',
    lineHeight: '1.6',
    fontWeight: '400',
  }

  const linkStyle = {
    color: '#000000',
    textDecoration: 'underline',
    cursor: 'pointer',
  }

  return (
    <>
      <Navbar />
      <section className="section top">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-embed w-script">
            <div className="terms-content">

              {/* Title */}
              <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#000000' }}>Refund Policy</h1>
              <p className="last-updated" style={paragraphStyle}><strong>Last Updated: May 3, 2025</strong></p>

              <h2 style={{ color: '#000000' }}>All Sales Are Final</h2>
              <p style={paragraphStyle}>
                Please carefully review your order before confirming your purchase. All sales are considered final. We do not offer refunds or exchanges for any products or services sold through doitcourse.com.
              </p>

              <h2 style={{ color: '#000000' }}>Important - What You Are Paying For</h2>
              <p style={paragraphStyle}><strong>Understanding Your Payment:</strong></p>
              <p style={paragraphStyle}>
                When you make a payment to doitcourse, you need to understand that you are <strong>NOT paying for courses</strong>. Instead, you are paying for:
              </p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li><strong>Platform Fees:</strong> Access to our reseller platform</li>
                <li><strong>Website Hosting:</strong> Your own ready-made website with courses already listed</li>
              </ul>

              <p style={paragraphStyle}><strong>What You Will Receive:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>✓ A ready-made website with courses already listed</li>
                <li>✓ Platform access for running your reselling business</li>
                <li>✓ Website hosting service</li>
              </ul>

              <p style={paragraphStyle}><strong>What You Will NOT Receive:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>✗ You will <strong>NOT</strong> receive any courses</li>
                <li>✗ You will <strong>NOT</strong> get course access links</li>
                <li>✗ You will <strong>NOT</strong> receive course downloads</li>
                <li>✗ Courses are <strong>NOT</strong> for you</li>
              </ul>

              <p style={paragraphStyle}><strong>Who Gets the Courses?</strong></p>
              <p style={paragraphStyle}>
                Only the <strong>customers who purchase courses from YOUR website</strong> will receive the course access links. When a customer pays on your site for a course, THEY receive the course link via email - not you. You are operating a reselling business platform, not purchasing courses for yourself.
              </p>
              <p style={paragraphStyle}><strong>Remember:</strong> Your payment is for platform fees + website hosting. Courses go to your paying customers only.</p>

              <h2 style={{ color: '#000000' }}>Non-Refundable Items or Services</h2>
              <p style={paragraphStyle}>
                All items or services purchased from doitcourse.com are non-refundable unless otherwise specified in writing by doitcourse. This policy applies but is not limited to:
              </p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>Digital Products</li>
                <li>Software Licenses</li>
                <li>Subscription Services</li>
              </ul>

              <h2 style={{ color: '#000000' }}>Exceptions to the No Refund Policy</h2>
              <p style={paragraphStyle}>The only exceptions to our No Refund Policy include:</p>
              <p style={paragraphStyle}><strong>Incomplete Service:</strong></p>
              <p style={paragraphStyle}>
                If a purchased service is not fully delivered or does not meet the predefined criteria as advertised, a partial or full refund may be considered.
              </p>
              <p style={paragraphStyle}><strong>Legal Requirements:</strong></p>
              <p style={paragraphStyle}>
                Following applicable laws, any other conditions or circumstances where we are legally required to offer a refund will be honoured.
              </p>

              <h2 style={{ color: '#000000' }}>Important Information</h2>
              <p style={paragraphStyle}>
                We reserve the right to modify this No Refund Policy at any time, effective upon posting of an updated version on our website. Please regularly check doitcourse.com for updates.
              </p>

              <div className="contact-box">
                <h3 style={{ color: '#000000' }}>How to Contact Us</h3>
                <p style={paragraphStyle}>For any questions or concerns regarding this No Refund Policy, please contact us at:</p>
                <p style={paragraphStyle}>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:admin@doitcourse.com" style={linkStyle}>
                    admin@doitcourse.com
                  </a>
                </p>
              </div>

              <div className="footer">
                <p style={paragraphStyle}>&copy; 2025 doitcourse. All rights reserved.</p>
                {/* <p style={paragraphStyle}>
                  <a href="terms.html" style={linkStyle}>Terms & Conditions</a>{" "}
                  <a href="privacy.html" style={linkStyle}>Privacy Policy</a>{" "}
                  <a href="refund.html" style={linkStyle}>Refund Policy</a>
                </p> */}
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default RefundPolicy
