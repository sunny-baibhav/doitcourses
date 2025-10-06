import React from 'react'
import Footer from '../pages/Footer'
import Navbar from '../pages/Navbar'

const TermsCondition = () => {
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
      <Navbar/>
      <section className="section top">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-embed w-script">
            <div className="terms-content">
              <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#000000' }}>
                <strong>Terms & Conditions</strong>
              </h1>

              <p className="last-updated" style={paragraphStyle}>Last Updated: October 3, 2025</p>

              <p style={paragraphStyle}>
                Welcome to doitcourse. By accessing or using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
              </p>

              <h2 style={{ color: '#000000' }}>1. Acceptance of Terms</h2>
              <p style={paragraphStyle}>
                By creating an account or using our services, you agree to these Terms and Conditions, our Privacy Policy, and any additional terms that may apply to specific services or features.
              </p>

              <h2 style={{ color: '#000000' }}>2. User Accounts</h2>
              <p style={paragraphStyle}>To access certain features of our platform, you must create an account. You agree to:</p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your password</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h2 style={{ color: '#000000' }}>3. Course Access and Content</h2>
              <p style={paragraphStyle}>When you enroll in a course, you receive:</p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>A limited, non-exclusive, non-transferable license to access the course content</li>
                <li>Access for personal, non-commercial use only</li>
                <li>No right to download, reproduce, or distribute course materials</li>
                <li>Access for the duration specified in your purchase</li>
              </ul>

              <h2 style={{ color: '#000000' }}>4. Reseller Business Model - Important</h2>
              <p style={paragraphStyle}><strong>Understanding Your Payment:</strong></p>
              <p style={paragraphStyle}>
                When you make a payment to doitcourse, you need to understand that you are NOT paying for individual courses. Instead, you are paying for:
              </p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li><strong>Subscription Fee:</strong> Access to our reseller platform</li>
                <li><strong>Website Hosting Cost:</strong> Your own ready-made website (separate from subscription)</li>
              </ul>

              <p style={paragraphStyle}><strong>What You Get:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>A <strong>ready-made website</strong> with courses already listed</li>
                <li>Products pre-loaded and ready to sell</li>
                <li>A complete course selling platform</li>
                <li>The right to run your reselling business</li>
              </ul>

              <p style={paragraphStyle}><strong>What You DO NOT Get:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>✗ You do <strong>NOT</strong> receive course access links</li>
                <li>✗ You do <strong>NOT</strong> get the courses themselves</li>
                <li>✗ You do <strong>NOT</strong> receive any course downloads</li>
                <li>✗ You are <strong>NOT</strong> buying course content</li>
              </ul>

              <p style={paragraphStyle}><strong>How It Works:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>You receive a ready website with products already listed</li>
                <li>Your customers visit YOUR website and purchase courses</li>
                <li>When a customer buys from your site, <strong>they receive the course link via email</strong></li>
                <li>You do NOT receive any links - only your paying customers do</li>
                <li>You are simply running the reselling business platform</li>
              </ul>

              <p style={paragraphStyle}><strong>Important Clarifications:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>Subscription fee = Platform access for reselling business</li>
                <li>Website hosting cost = Separate payment for your ready-made website</li>
                <li>Course links go to YOUR CUSTOMERS, not to you</li>
                <li>You are starting a reselling business, not buying courses</li>
              </ul>

              <p style={paragraphStyle}><strong>Please Note:</strong> You have NOT paid for any courses. You have NOT purchased course access. You have paid for <strong>subscription + website hosting</strong> to receive a ready-made business website where customers can buy courses. When YOUR customers purchase from your site, THEY receive the course links via email. You are operating a reselling business, not purchasing courses for yourself.</p>

              <h2 style={{ color: '#000000' }}>5. Payment and Refunds</h2>
              <p style={paragraphStyle}>All payments are processed securely. Please read our refund policy carefully:</p>

              <p style={paragraphStyle}><strong>Within 36 Hours of Purchase:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>If you request a refund within 36 hours of your purchase, you will receive a refund</li>
                <li>Transaction fees will be deducted from your refund amount</li>
                <li>The remaining amount will be returned to you</li>
                <li>Refunds are processed within 5-10 business days</li>
              </ul>

              <p style={paragraphStyle}><strong>After 36 Hours of Purchase:</strong></p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>Refund requests made after 36 hours have only a <strong>20% chance</strong> of approval</li>
                <li>You MUST provide a <strong>valid reason</strong> with proper proof/documentation</li>
                <li>Without valid proof, refund requests will be rejected</li>
                <li>Each case will be reviewed individually by our team</li>
                <li>Final decision rests with doitcourse management</li>
              </ul>

              <h2 style={{ color: '#000000' }}>6. User Conduct</h2>
              <p style={paragraphStyle}>You agree not to:</p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>Share your account credentials with others</li>
                <li>Upload viruses or malicious code</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to circumvent security measures</li>
                <li>Use automated systems to access the platform</li>
              </ul>

              <h2 style={{ color: '#000000' }}>7. Intellectual Property</h2>
              <p style={paragraphStyle}>
                All content on doitcourse, including text, graphics, logos, videos, and software, is the property of doitcourse or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>

              <h2 style={{ color: '#000000' }}>8. Termination</h2>
              <p style={paragraphStyle}>We reserve the right to suspend or terminate your account if you:</p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>Violate these Terms and Conditions</li>
                <li>Engage in fraudulent activity</li>
                <li>Abuse our refund policy</li>
                <li>Provide false information</li>
              </ul>

              <h2 style={{ color: '#000000' }}>9. Disclaimers</h2>
              <p style={paragraphStyle}>Our services are provided "as is" without warranties of any kind. We do not guarantee that:</p>
              <ul style={{ color: '#000000', fontSize: '18px', lineHeight: '1.6' }}>
                <li>The platform will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>Course completion guarantees employment or specific outcomes</li>
              </ul>

              <h2 style={{ color: '#000000' }}>10. Limitation of Liability</h2>
              <p style={paragraphStyle}>
                To the maximum extent permitted by law, doitcourse shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
              </p>

              <h2 style={{ color: '#000000' }}>11. Changes to Terms</h2>
              <p style={paragraphStyle}>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the platform constitutes acceptance of the modified terms.
              </p>

              <h2 style={{ color: '#000000' }}>12. Governing Law</h2>
              <p style={paragraphStyle}>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.</p>

              <h2 style={{ color: '#000000' }}>13. Contact Information</h2>
              <p style={paragraphStyle}>For questions about these Terms or any other matter, please contact us using the information below.</p>

              <div className="contact-box">
                <h3 style={{ color: '#000000' }}>Get in Touch</h3>
                <p style={paragraphStyle}>We're here to help! Reach out to us for any questions or concerns:</p>
                <p style={paragraphStyle}>
                  <strong>General Support:</strong>{" "}
                  <a href="mailto:support@doitcourse.com" style={linkStyle}>
                    support@doitcourse.com
                  </a>
                </p>
                <p style={paragraphStyle}>
                  <strong>Legal Inquiries:</strong>{" "}
                  <a href="mailto:legal@doitcourse.com" style={linkStyle}>
                    legal@doitcourse.com
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
      <Footer/>
    </>
  )
}

export default TermsCondition
