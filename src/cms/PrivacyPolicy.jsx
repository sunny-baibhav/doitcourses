import React from 'react'
import Footer from '../pages/Footer'
import Navbar from '../pages/Navbar'

const PrivacyPolicy = () => {
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
              <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#000000' }}>
                <strong>Privacy Policy</strong>
              </h1>

              <p className="last-updated" style={paragraphStyle}>
                <strong>Last Updated: October 3, 2025</strong>
              </p>

              <p style={paragraphStyle}>
                <strong>
                  Welcome to doitcourse. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share your information when you use our services.
                </strong>
              </p>

              <h2 style={{ color: '#000000' }}><strong>1. Information We Collect</strong></h2>
              <p style={paragraphStyle}><strong>We collect information that you provide directly to us, including:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li><strong>Account information (name, email address, password)</strong></li>
                <li><strong>Profile information (bio, profile picture, preferences)</strong></li>
                <li><strong>Course enrollment and progress data</strong></li>
                <li><strong>Payment and billing information</strong></li>
                <li><strong>Communications with us</strong></li>
              </ul>

              <h2 style={{ color: '#000000' }}><strong>2. How We Use Your Information</strong></h2>
              <p style={paragraphStyle}><strong>We use the information we collect to:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li><strong>Provide, maintain, and improve our services</strong></li>
                <li><strong>Process your transactions and send related information</strong></li>
                <li><strong>Send you technical notices, updates, and support messages</strong></li>
                <li><strong>Respond to your comments and questions</strong></li>
                <li><strong>Personalize your learning experience</strong></li>
                <li><strong>Monitor and analyze trends and usage</strong></li>
              </ul>

              <h2 style={{ color: '#000000' }}><strong>3. Information Sharing</strong></h2>
              <p style={paragraphStyle}><strong>We do not sell your personal information. We may share your information only in the following circumstances:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li><strong>With your consent or at your direction</strong></li>
                <li><strong>With service providers who help us operate our platform</strong></li>
                <li><strong>To comply with legal obligations</strong></li>
                <li><strong>To protect our rights and prevent fraud</strong></li>
              </ul>

              <h2 style={{ color: '#000000' }}><strong>4. Data Security</strong></h2>
              <p style={paragraphStyle}>
                <strong>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </strong>
              </p>

              <h2 style={{ color: '#000000' }}><strong>5. Your Rights</strong></h2>
              <p style={paragraphStyle}><strong>You have the right to:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li><strong>Access and receive a copy of your personal information</strong></li>
                <li><strong>Correct or update your information</strong></li>
                <li><strong>Delete your account and personal information</strong></li>
                <li><strong>Object to or restrict certain processing</strong></li>
                <li><strong>Data portability</strong></li>
              </ul>

              <h2 style={{ color: '#000000' }}><strong>6. Cookies and Tracking</strong></h2>
              <p style={paragraphStyle}>
                <strong>
                  We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </strong>
              </p>

              <h2 style={{ color: '#000000' }}><strong>7. Children's Privacy</strong></h2>
              <p style={paragraphStyle}>
                <strong>
                  Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                </strong>
              </p>

              <h2 style={{ color: '#000000' }}><strong>8. Changes to This Policy</strong></h2>
              <p style={paragraphStyle}>
                <strong>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </strong>
              </p>

              <div className="contact-box">
                <h3 style={{ color: '#000000' }}><strong>Contact Us</strong></h3>
                <p style={paragraphStyle}><strong>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</strong></p>
                <p style={paragraphStyle}>
                  <strong>General Support:</strong>{" "}
                  <a href="mailto:support@doitcourse.com" style={linkStyle}>
                    <strong>support@doitcourse.com</strong>
                  </a>
                </p>
                <p style={paragraphStyle}>
                  <strong>Legal Inquiries:</strong>{" "}
                  <a href="mailto:legal@doitcourse.com" style={linkStyle}>
                    <strong>legal@doitcourse.com</strong>
                  </a>
                </p>
              </div>

              <div className="footer">
                <p style={paragraphStyle}>&copy; 2025 doitcourse. All rights reserved.</p>
                <p style={paragraphStyle}>
                  <a href="terms.html" style={linkStyle}>Terms & Conditions</a>{" "}
                  <a href="privacy.html" style={linkStyle}>Privacy Policy</a>{" "}
                  <a href="refund.html" style={linkStyle}>Refund Policy</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
