import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AllAccess from '../Allacess'
import Faq from '../Faq'
import DropCoursing from '../DropCoursing'
import Navbar1 from './Navbar1'
import Footer1 from './Footer1'
const Landingpage = () => {
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

 <>
 
<Navbar1/>
{/* Courses Section with Framer Motion */}
<motion.section
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  style={{ backgroundColor: "#20002b" }}
  className="section products hero"
>
  <div className="container">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="wrap-v-regular align-center margin-large"
    >
      <a
        data-utm-badge="comment"
        data-wf-native-id-path="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
        data-wf-ao-click-engagement-tracking="true"
        data-wf-element-id="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
        href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
        className="header-badge products w-inline-block"
        rel="noopener"
      >
        <div className="wrap-h-x-small">
          <p className="max-width-badge products">Money Gram</p>
        </div>
      </a>
      <h1 style={{ color: "#dc60ff" }} className="h1-max-width products">
        <span className="white">White-label and resell this</span>{" "}
        <span className="products-highlight-premium">premium </span>
        <span
          data-product-summary="Instagram theme page course"
          className="products-highlight"
        >
          Instagram theme page course
        </span>
      </h1>
      <p className="paragraph-large hero products">
        Get immediate access to all the{" "}
        <span data-product-name="Money Gram" className="products-name">
          Money Gram
        </span>{" "}
        content, plug-and-play landing page, content library and more.
      </p>
      <div className="header-button-group">
        <a
          data-wf-native-id-path="1c477564-f4b8-224a-047d-42add912b5b7"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="1c477564-f4b8-224a-047d-42add912b5b7"
          style={{
            backgroundColor: "#dc60ff",
            borderColor: "#20002b",
            color: "#20002b"
          }}
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="button-primary products w-inline-block"
          rel="noopener"
        >
          <div className="dupe-icon w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth={8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* flip horizontally: move right by 100 then scale X by –1 */}
              <g transform="translate(100, 0) scale(-1, 1)">
                {/* Back sheet */}
                <rect x={8} y={12} width={60} height={60} rx={10} />
                {/* Front sheet */}
                <rect x={20} y={28} width={60} height={60} rx={10} />
              </g>
            </svg>
          </div>
          <div>
            Duplicate{" "}
            <span data-product-name="Money Gram" className="products-name">
              Money Gram
            </span>
            <strong> </strong>
          </div>
        </a>
      </div>
      <div className="f-header-wrapper">
        <div className="f-avatar-group-r c" />
        <div className="f-avatar-group-r b" />
        <div className="f-avatar-group-r" />
        <div>
          <div className="f-header-avatar-text">
            <strong>$895k+</strong> Happy Students
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  
  <motion.div 
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true, amount: 0.3 }}
    className="container box clear white"
    id="courses-section"
    data-navcolor="#0f172a"
  >
    <div className="wrap-v-small margin-small">
      <div className="wrap-h-regular-2 mobile">
        <div className="featured-course white">Course Preview</div>
        <img
          src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f8bca3aefe56e25df756_mglogo.png"
          loading="lazy"
          alt=""
          height={40}
          className="h3-image course"
        />
      </div>
      <div className="wrap-h-small course-stats">
        <p className="align-centre">29</p>
        <p>Lessons</p>
        <div className="dot white" />
        <p className="align-centre">5</p>
        <p>Modules</p>
        <div className="dot white" />
        <p className="align-centre">6.2</p>
        <p>Hours of Content</p>
      </div>
    </div>
    <div className="_2-grid">
      <motion.a
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e38"
        data-wf-ao-click-engagement-tracking="true"
        data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e38"
        href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
        data-wf-event-ids={157035618}
        className="outline-div course w-inline-block"
        rel="noopener"
      >
        <img
          src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f8aff8bc418e4ef46e02_moneygramlogo.png"
          loading="lazy"
          alt=""
          sizes="100vw"
          srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f8aff8bc418e4ef46e02_moneygramlogo-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f8aff8bc418e4ef46e02_moneygramlogo-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f8aff8bc418e4ef46e02_moneygramlogo-p-1080.png 1080w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f8aff8bc418e4ef46e02_moneygramlogo-p-1600.png 1600w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f8aff8bc418e4ef46e02_moneygramlogo-p-2000.png 2000w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f8aff8bc418e4ef46e02_moneygramlogo.png 2136w"
          className="course-cover"
        />
        <div className="play-button-wrap">
          <div className="play-button">
            <img
              src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68302d85c746ae2c6c6caf24_play_arrow_24dp_FFFFFF_FILL0_wght100_GRAD0_opsz24.svg"
              loading="lazy"
              width={50}
              alt=""
              className="play-icon"
            />
          </div>
        </div>
      </motion.a>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="wrap-v-small"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true, amount: 0.3 }}
          data-tick={1} 
          className="course-module checked"
        >
          <a
            data-tick={1}
            data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e3c"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e3c"
            href="#"
            className="tick-box checked white w-inline-block"
          >
            <div className="w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={9}
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6 L9 17 L4 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
          <div>
            <strong>Module 1, Episode 1:</strong> Intro to{" "}
            <span data-product-name="Money Gram" className="products-name">
              Money Gram
            </span>{" "}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true, amount: 0.3 }}
          data-tick={2} 
          className="course-module checked"
        >
          <a
            data-tick={2}
            data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e41"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e41"
            href="#"
            className="tick-box checked white w-inline-block"
          >
            <div className="w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={9}
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6 L9 17 L4 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
          <div>
            <strong>Module 1, Episode 2:</strong> Learn the tech-stack &nbsp;
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          data-tick={3} 
          className="course-module"
        >
          <a
            data-tick={3}
            data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e46"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e46"
            href="#"
            className="tick-box white w-inline-block"
          >
            <div className="w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={9}
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6 L9 17 L4 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
          <div>
            <strong>Module 1, Episode 3:</strong> Mindset mastery
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="course-module relative"
        >
          <a
            data-tick={4}
            data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e4b"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e4b"
            href="#"
            className="tick-box white blur w-inline-block"
          >
            <div className="w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={9}
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6 L9 17 L4 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
          <div className="blurred">Module 1, Episode 4: The first steps</div>
          <div className="lock">
            <div>Purchase to unlock the full course 🔐</div>
          </div>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true, amount: 0.3 }}
          data-wf-native-id-path="c96c1b3d-b8f0-842e-4de5-664436c7503b"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="c96c1b3d-b8f0-842e-4de5-664436c7503b"
          style={{
            backgroundColor: "#dc60ff",
            borderColor: "#20002b",
            color: "#20002b"
          }}
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="button-primary products _100 w-inline-block"
          rel="noopener"
        >
          <div className="dupe-icon w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth={8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* flip horizontally: move right by 100 then scale X by –1 */}
              <g transform="translate(100, 0) scale(-1, 1)">
                {/* Back sheet */}
                <rect x={8} y={12} width={60} height={60} rx={10} />
                {/* Front sheet */}
                <rect x={20} y={28} width={60} height={60} rx={10} />
              </g>
            </svg>
          </div>
          <div>
            Duplicate Course<strong> </strong>
          </div>
        </motion.a>
      </motion.div>
    </div>
  </motion.div>
</motion.section>


{/* Ecom Prodigy Section with Framer Motion */}
<motion.section
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  style={{ backgroundColor: "#1a2603" }}
  className="section products hero"
>
  <div className="container">
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="wrap-v-regular align-center margin-large"
    >
        <a
          data-utm-badge="comment"
          data-wf-native-id-path="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          className="header-badge products w-inline-block"
          rel="noopener"
        >
          <div className="wrap-h-x-small">
            <p className="max-width-badge products">Ecom Prodigy</p>
          </div>
        </a>
        <h1 style={{ color: "#a4d54a" }} className="h1-max-width products">
          <span className="white">White-label and resell this</span>{" "}
          <span className="products-highlight-premium">premium </span>
          <span
            data-product-summary="dropshipping course"
            className="products-highlight"
          >
            dropshipping course
          </span>
        </h1>
        <p className="paragraph-large hero products">
          Get immediate access to all the{" "}
          <span data-product-name="Ecom Prodigy" className="products-name">
            Ecom Prodigy
          </span>{" "}
          content, plug-and-play landing page, content library and more.
        </p>
        <div className="header-button-group">
          <a
            data-wf-native-id-path="1c477564-f4b8-224a-047d-42add912b5b7"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="1c477564-f4b8-224a-047d-42add912b5b7"
            style={{
              backgroundColor: "#a4d54a",
              borderColor: "#1a2603",
              color: "#1a2603"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate{" "}
              <span data-product-name="Ecom Prodigy" className="products-name">
                Ecom Prodigy
              </span>
              <strong> </strong>
            </div>
          </a>
        </div>
        <div className="f-header-wrapper">
          <div className="f-avatar-group-r c" />
          <div className="f-avatar-group-r b" />
          <div className="f-avatar-group-r" />
          <div>
            <div className="f-header-avatar-text">
              <strong>$573k+</strong> Happy Students
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      className="container box clear white"
      data-navcolor="#0f172a"
    >
      <div className="wrap-v-small margin-small">
        <div className="wrap-h-regular-2 mobile">
          <div className="featured-course white">Course Preview</div>
          <img
            src="/2e.png"
            loading="lazy"
            alt="Ecom Prodigy Course"
            sizes="100vw"
            srcSet="/2e.png"
            className="h3-image course"
            style={{
              width: '100%',
              maxWidth: '212px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
        <div className="wrap-h-small course-stats">
          <p className="align-centre">40</p>
          <p>Lessons</p>
          <div className="dot white" />
          <p className="align-centre">6</p>
          <p>Modules</p>
          <div className="dot white" />
          <p className="align-centre">6.1</p>
          <p>Hours of Content</p>
        </div>
      </div>
      <div className="_2-grid">
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e38"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e38"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="outline-div course w-inline-block"
          rel="noopener"
        >
          <img
            src="/1.png"
            // src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/683693829a961da73467e160_Frame%2053.png"
            loading="lazy"
            alt=""
            sizes="100vw"
            srcSet="/1.png"
            // srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/683693829a961da73467e160_Frame%2053-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/683693829a961da73467e160_Frame%2053-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/683693829a961da73467e160_Frame%2053-p-1080.png 1080w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/683693829a961da73467e160_Frame%2053-p-1600.png 1600w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/683693829a961da73467e160_Frame%2053-p-2000.png 2000w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/683693829a961da73467e160_Frame%2053.png 2136w"
            className="course-cover"
          />
          <div className="play-button-wrap">
            <div className="play-button">
              <img
                src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68302d85c746ae2c6c6caf24_play_arrow_24dp_FFFFFF_FILL0_wght100_GRAD0_opsz24.svg"
                loading="lazy"
                width={50}
                alt=""
                className="play-icon"
              />
            </div>
          </div>
        </motion.a>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="wrap-v-small"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true, amount: 0.3 }}
            data-tick={1} 
            className="course-module checked"
          >
            <a
              data-tick={1}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e3c"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e3c"
              href="#"
              className="tick-box checked white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 1:</strong> Intro to{" "}
              <span data-product-name="Ecom Prodigy" className="products-name">
                Ecom Prodigy
              </span>{" "}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            viewport={{ once: true, amount: 0.3 }}
            data-tick={2} 
            className="course-module checked"
          >
            <a
              data-tick={2}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e41"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e41"
              href="#"
              className="tick-box checked white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 2:</strong> Learn the tech-stack &nbsp;
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
            data-tick={3} 
            className="course-module"
          >
            <a
              data-tick={3}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e46"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e46"
              href="#"
              className="tick-box white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 3:</strong> Mindset mastery
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}Happy Students
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="course-module relative"
          >
            <a
              data-tick={4}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e4b"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e4b"
              href="#"
              className="tick-box white blur w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div className="blurred">Module 1, Episode 4: The first steps</div>
            <div className="lock">
              <div>Purchase to unlock the full course 🔐</div>
            </div>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true, amount: 0.3 }}
            data-wf-native-id-path="c96c1b3d-b8f0-842e-4de5-664436c7503b"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="c96c1b3d-b8f0-842e-4de5-664436c7503b"
            style={{
              backgroundColor: "#a4d54a",
              borderColor: "#1a2603",
              color: "#1a2603"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products _100 w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate Course<strong> </strong>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="container box clear white w-condition-invisible"
    >
      <div className="wrap-v-small margin-small">
        <div className="wrap-h-regular-2 mobile">
          <div className="featured-course white">Community Preview</div>
          <img
            src="/ecomlogo.png"
            loading="lazy"
            alt="Ecom Community"
            height={40}
            sizes="100vw"
            srcSet="/ecomlogo.png"
            className="h3-image course"
          />
        </div>
      </div>
      <div className="_2-grid">
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          data-wf-native-id-path="fa468542-c180-d29c-02fb-5b3f0d5dbd5a"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="fa468542-c180-d29c-02fb-5b3f0d5dbd5a"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="outline-div course w-inline-block"
          rel="noopener"
        >
          <img
            src="/1.png"
            loading="lazy"
            alt="Community Preview"
            sizes="100vw"
            srcSet="/1.png"
            className="course-cover"
          />
        </motion.a>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="wrap-v-small stretch"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >✅ Hosted on custom platform</motion.h3>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >✅ 2000+ members</motion.h3>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >✅ Pre-built landing page</motion.h3>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >✅ Resell as your own</motion.h3>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true, amount: 0.3 }}
            data-wf-native-id-path="fa468542-c180-d29c-02fb-5b3f0d5dbd74"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="fa468542-c180-d29c-02fb-5b3f0d5dbd74"
            style={{
              backgroundColor: "#a4d54a",
              borderColor: "#1a2603",
              color: "#1a2603"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products _100 w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate Community<strong> </strong>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  </motion.section>

  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    style={{ backgroundColor: "#251000" }}
    className="section products hero"
  >
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="wrap-v-regular align-center margin-large"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          data-utm-badge="comment"
          data-wf-native-id-path="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          className="header-badge products w-inline-block"
          rel="noopener"
        >
          <div className="wrap-h-x-small">
            <p className="max-width-badge products">Amazon Dropship Pro</p>
          </div>
        </motion.a>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ color: "#ff842b" }} 
          className="h1-max-width products"
        >
          <span className="white">White-label and resell this</span>{" "}
          <span className="products-highlight-premium">premium </span>
          <span
            data-product-summary="Amazon FBA course"
            className="products-highlight"
          >
            Amazon FBA course
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="paragraph-large hero products"
        >
          Get immediate access to all the{" "}
          <span data-product-name="Amazon Dropship Pro" className="products-name">
            Amazon Dropship Pro
          </span>{" "}
          content, plug-and-play landing page, content library and more.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="header-button-group"
        >
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            data-wf-native-id-path="1c477564-f4b8-224a-047d-42add912b5b7"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="1c477564-f4b8-224a-047d-42add912b5b7"
            style={{
              backgroundColor: "#ff842b",
              borderColor: "#251000",
              color: "#251000"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate{" "}
              <span
                data-product-name="Amazon Dropship Pro"
                className="products-name"
              >
                Amazon Dropship Pro
              </span>
              <strong> </strong>
            </div>
          </motion.a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="f-header-wrapper"
        >
          <div className="f-avatar-group-r c" />
          <div className="f-avatar-group-r b" />
          <div className="f-avatar-group-r" />
          <div>
            <div className="f-header-avatar-text">
              <strong>$1M+</strong> Happy Students
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
      className="container box clear white"
      data-navcolor="#0f172a"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        className="wrap-v-small margin-small"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
          className="wrap-h-regular-2 mobile"
        >
          <div className="featured-course white">Course Preview</div>
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c24f9089638467b3291b_amazon.png"
            loading="lazy"
            alt=""
            height={40}
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c24f9089638467b3291b_amazon-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c24f9089638467b3291b_amazon-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c24f9089638467b3291b_amazon.png 1068w"
            className="h3-image course"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
          className="wrap-h-small course-stats"
        >
          <p className="align-centre">45</p>
          <p>Lessons</p>
          <div className="dot white" />
          <p className="align-centre">4</p>
          <p>Modules</p>
          <div className="dot white" />
          <p className="align-centre">8</p>
          <p>Hours of Content</p>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
        className="_2-grid"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e38"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e38"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="outline-div course w-inline-block"
          rel="noopener"
        >
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059.png"
            loading="lazy"
            alt=""
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194÷÷fa9f5/6836c25abef4c099670198b3_Frame%2059-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059-p-1080.png 1080w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059-p-1600.png 1600w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059-p-2000.png 2000w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059.png 2136w"
            className="course-cover"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="play-button-wrap"
          >
            <div className="play-button">
              <img
                src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68302d85c746ae2c6c6caf24_play_arrow_24dp_FFFFFF_FILL0_wght100_GRAD0_opsz24.svg"
                loading="lazy"
                width={50}
                alt=""
                className="play-icon"
              />
            </div>
          </motion.div>
        </motion.a>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          viewport={{ once: true }}
          className="wrap-v-small"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            viewport={{ once: true }}
            data-tick={1} 
            className="course-module checked"
          >
            <a
              data-tick={1}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e3c"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e3c"
              href="#"
              className="tick-box checked white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 1:</strong> Intro to{" "}
              <span
                data-product-name="Amazon Dropship Pro"
                className="products-name"
              >
                Amazon Dropship Pro
              </span>{" "}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
            viewport={{ once: true }}
            data-tick={2} 
            className="course-module checked"
          >
            <a
              data-tick={2}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e41"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e41"
              href="#"
              className="tick-box checked white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 2:</strong> Learn the tech-stack &nbsp;
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            viewport={{ once: true }}
            data-tick={3} 
            className="course-module"
          >
            <a
              data-tick={3}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e46"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e46"
              href="#"
              className="tick-box white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 3:</strong> Mindset mastery
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.7 }}
            viewport={{ once: true }}
            className="course-module relative"
          >
            <a
              data-tick={4}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e4b"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e4b"
              href="#"
              className="tick-box white blur w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div className="blurred">Module 1, Episode 4: The first steps</div>
            <div className="lock">
              <div>Purchase to unlock the full course 🔐</div>
            </div>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 1.8 }}
            viewport={{ once: true }}
            data-wf-native-id-path="c96c1b3d-b8f0-842e-4de5-664436c7503b"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="c96c1b3d-b8f0-842e-4de5-664436c7503b"
            style={{
              backgroundColor: "#ff842b",
              borderColor: "#251000",
              color: "#251000"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products _100 w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate Course<strong> </strong>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.9 }}
      viewport={{ once: true }}
      className="container box clear white w-condition-invisible"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        viewport={{ once: true }}
        className="wrap-v-small margin-small"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          viewport={{ once: true }}
          className="wrap-h-regular-2 mobile"
        >
          <div className="featured-course white">Community Preview</div>
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c24f9089638467b3291b_amazon.png"
            loading="lazy"
            alt=""
            height={40}
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c24f9089638467b3291b_amazon-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c24f9089638467b3291b_amazon-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c24f9089638467b3291b_amazon.png 1068w"
            className="h3-image course"
          />
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        viewport={{ once: true }}
        className="_2-grid"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          data-wf-native-id-path="fa468542-c180-d29c-02fb-5b3f0d5dbd5a"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="fa468542-c180-d29c-02fb-5b3f0d5dbd5a"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="outline-div course w-inline-block"
          rel="noopener"
        >
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059.png"
            loading="lazy"
            alt=""
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059-p-1080.png 1080w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059-p-1600.png 1600w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059-p-2000.png 2000w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6836c25abef4c099670198b3_Frame%2059.png 2136w"
            className="course-cover"
          />
        </motion.a>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          viewport={{ once: true }}
          className="wrap-v-small stretch"
        >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.4 }}
            viewport={{ once: true }}
          >
            ✅ Hosted on custom platform
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.5 }}
            viewport={{ once: true }}
          >
            ✅ 2000+ members
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.6 }}
            viewport={{ once: true }}
          >
            ✅ Pre-built landing page
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.7 }}
            viewport={{ once: true }}
          >
            ✅ Resell as your own
          </motion.h3>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 2.8 }}
            viewport={{ once: true }}
            data-wf-native-id-path="fa468542-c180-d29c-02fb-5b3f0d5dbd74"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="fa468542-c180-d29c-02fb-5b3f0d5dbd74"
            style={{
              backgroundColor: "#ff842b",
              borderColor: "#251000",
              color: "#251000"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products _100 w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate Community<strong> </strong>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.section>

  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    style={{ backgroundColor: "#2b0001" }}
    className="section products hero"
  >
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="wrap-v-regular align-center margin-large"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          data-utm-badge="comment"
          data-wf-native-id-path="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          className="header-badge products w-inline-block"
          rel="noopener"
        >
          <div className="wrap-h-x-small">
            <p className="max-width-badge products">Ghost Creator</p>
          </div>
        </motion.a>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ color: "#ff3f3f" }} 
          className="h1-max-width products"
        >
          <span className="white">White-label and resell this</span>{" "}
          <span className="products-highlight-premium">premium </span>
          <span
            data-product-summary="Youtube automation course"
            className="products-highlight"
          >
            Youtube automation course
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="paragraph-large hero products"
        >
          Get immediate access to all the{" "}
          <span data-product-name="Ghost Creator" className="products-name">
            Ghost Creator
          </span>{" "}
          content, plug-and-play landing page, content library and more.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="header-button-group"
        >
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            data-wf-native-id-path="1c477564-f4b8-224a-047d-42add912b5b7"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="1c477564-f4b8-224a-047d-42add912b5b7"
            style={{
              backgroundColor: "#ff3f3f",
              borderColor: "#2b0001",
              color: "#2b0001"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate{" "}
              <span data-product-name="Ghost Creator" className="products-name">
                Ghost Creator
              </span>
              <strong> </strong>
            </div>
          </motion.a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="f-header-wrapper"
        >
          <div className="f-avatar-group-r c" />
          <div className="f-avatar-group-r b" />
          <div className="f-avatar-group-r" />
          <div>
            <div className="f-header-avatar-text">
              <strong>$129k+</strong> Happy Students
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
      className="container box clear white"
      data-navcolor="#0f172a"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        className="wrap-v-small margin-small"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
          className="wrap-h-regular-2 mobile"
        >
          <div className="featured-course white">Course Preview</div>
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f777f0ef832b922907eb_ytloog.png"
            loading="lazy"
            alt=""
            height={40}
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f777f0ef832b922907eb_ytloog-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f777f0ef832b922907eb_ytloog.png 522w"
            className="h3-image course"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
          className="wrap-h-small course-stats"
        >
          <p className="align-centre">75</p>
          <p>Lessons</p>
          <div className="dot white" />
          <p className="align-centre">7</p>
          <p>Modules</p>
          <div className="dot white" />
          <p className="align-centre">7</p>
          <p>Hours of Content</p>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
        className="_2-grid"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e38"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e38"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="outline-div course w-inline-block"
          rel="noopener"
        >
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062.png"
            loading="lazy"
            alt=""
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-1080.png 1080w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-1600.png 1600w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-2000.png 2000w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062.png 2136w"
            className="course-cover"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="play-button-wrap"
          >
            <div className="play-button">
              <img
                src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68302d85c746ae2c6c6caf24_play_arrow_24dp_FFFFFF_FILL0_wght100_GRAD0_opsz24.svg"
                loading="lazy"
                width={50}
                alt=""
                className="play-icon"
              />
            </div>
          </motion.div>
        </motion.a>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          viewport={{ once: true }}
          className="wrap-v-small"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            viewport={{ once: true }}
            data-tick={1} 
            className="course-module checked"
          >
            <a
              data-tick={1}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e3c"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e3c"
              href="#"
              className="tick-box checked white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 1:</strong> Intro to{" "}
              <span data-product-name="Ghost Creator" className="products-name">
                Ghost Creator
              </span>{" "}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
            viewport={{ once: true }}
            data-tick={2} 
            className="course-module checked"
          >
            <a
              data-tick={2}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e41"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e41"
              href="#"
              className="tick-box checked white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 2:</strong> Learn the tech-stack &nbsp;
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            viewport={{ once: true }}
            data-tick={3} 
            className="course-module"
          >
            <a
              data-tick={3}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e46"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e46"
              href="#"
              className="tick-box white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 3:</strong> Mindset mastery
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.7 }}
            viewport={{ once: true }}
            className="course-module relative"
          >
            <a
              data-tick={4}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e4b"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e4b"
              href="#"
              className="tick-box white blur w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div className="blurred">Module 1, Episode 4: The first steps</div>
            <div className="lock">
              <div>Purchase to unlock the full course 🔐</div>
            </div>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 1.8 }}
            viewport={{ once: true }}
            data-wf-native-id-path="c96c1b3d-b8f0-842e-4de5-664436c7503b"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="c96c1b3d-b8f0-842e-4de5-664436c7503b"
            style={{
              backgroundColor: "#ff3f3f",
              borderColor: "#2b0001",
              color: "#2b0001"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products _100 w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate Course<strong> </strong>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.9 }}
      viewport={{ once: true }}
      className="container box clear white w-condition-invisible"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        viewport={{ once: true }}
        className="wrap-v-small margin-small"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          viewport={{ once: true }}
          className="wrap-h-regular-2 mobile"
        >
          <div className="featured-course white">Community Preview</div>
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f777f0ef832b922907eb_ytloog.png"
            loading="lazy"
            alt=""
            height={40}
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f777f0ef832b922907eb_ytloog-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f777f0ef832b922907eb_ytloog.png 522w"
            className="h3-image course"
          />
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        viewport={{ once: true }}
        className="_2-grid"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          data-wf-native-id-path="fa468542-c180-d29c-02fb-5b3f0d5dbd5a"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="fa468542-c180-d29c-02fb-5b3f0d5dbd5a"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="outline-div course w-inline-block"
          rel="noopener"
        >
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062.png"
            loading="lazy"
            alt=""
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-1080.png 1080w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-1600.png 1600w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062-p-2000.png 2000w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f77ddad3ad5c72a0f45c_Frame%2062.png 2136w"
            className="course-cover"
          />
        </motion.a>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          viewport={{ once: true }}
          className="wrap-v-small stretch"
        >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.4 }}
            viewport={{ once: true }}
          >
            ✅ Hosted on custom platform
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.5 }}
            viewport={{ once: true }}
          >
            ✅ 2000+ members
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.6 }}
            viewport={{ once: true }}
          >
            ✅ Pre-built landing page
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.7 }}
            viewport={{ once: true }}
          >
            ✅ Resell as your own
          </motion.h3>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 2.8 }}
            viewport={{ once: true }}
            data-wf-native-id-path="fa468542-c180-d29c-02fb-5b3f0d5dbd74"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="fa468542-c180-d29c-02fb-5b3f0d5dbd74"
            style={{
              backgroundColor: "#ff3f3f",
              borderColor: "#2b0001",
              color: "#2b0001"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products _100 w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate Community<strong> </strong>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.section>

  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    style={{ backgroundColor: "#001706" }}
    className="section products hero"
  >
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="wrap-v-regular align-center margin-large"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          data-utm-badge="comment"
          data-wf-native-id-path="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="483644a6-ee0c-837a-01af-c9c08e8ccf4b"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          className="header-badge products w-inline-block"
          rel="noopener"
        >
          <div className="wrap-h-x-small">
            <p className="max-width-badge products">Market Mastery</p>
          </div>
        </motion.a>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ color: "#25ff1e" }} 
          className="h1-max-width products"
        >
          <span className="white">White-label and resell this</span>{" "}
          <span className="products-highlight-premium">premium </span>
          <span
            data-product-summary="day trading course"
            className="products-highlight"
          >
            day trading course
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="paragraph-large hero products"
        >
          Get immediate access to all the{" "}
          <span data-product-name="Market Mastery" className="products-name">
            Market Mastery
          </span>{" "}
          content, plug-and-play landing page, content library and more.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="header-button-group"
        >
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            data-wf-native-id-path="1c477564-f4b8-224a-047d-42add912b5b7"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="1c477564-f4b8-224a-047d-42add912b5b7"
            style={{
              backgroundColor: "#25ff1e",
              borderColor: "#001706",
              color: "#001706"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate{" "}
              <span data-product-name="Market Mastery" className="products-name">
                Market Mastery
              </span>
              <strong> </strong>
            </div>
          </motion.a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="f-header-wrapper"
        >
          <div className="f-avatar-group-r c" />
          <div className="f-avatar-group-r b" />
          <div className="f-avatar-group-r" />
          <div>
            <div className="f-header-avatar-text">
              <strong>$278k+</strong> Happy Students
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
      className="container box clear white"
      data-navcolor="#0f172a"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        className="wrap-v-small margin-small"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
          className="wrap-h-regular-2 mobile"
        >
          <div className="featured-course white">Course Preview</div>
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7d8a5f69b981ad6dab7_mmlogo.png"
            loading="lazy"
            alt=""
            height={40}
            className="h3-image course"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
          className="wrap-h-small course-stats"
        >
          <p className="align-centre">56</p>
          <p>Lessons</p>
          <div className="dot white" />
          <p className="align-centre">12</p>
          <p>Modules</p>
          <div className="dot white" />
          <p className="align-centre">7</p>
          <p>Hours of Content</p>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
        className="_2-grid"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e38"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e38"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="outline-div course w-inline-block"
          rel="noopener"
        >
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058.png"
            loading="lazy"
            alt=""
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-1080.png 1080w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-1600.png 1600w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-2000.png 2000w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058.png 2136w"
            className="course-cover"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="play-button-wrap"
          >
            <div className="play-button">
              <img
                src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/68302d85c746ae2c6c6caf24_play_arrow_24dp_FFFFFF_FILL0_wght100_GRAD0_opsz24.svg"
                loading="lazy"
                width={50}
                alt=""
                className="play-icon"
              />
            </div>
          </motion.div>
        </motion.a>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          viewport={{ once: true }}
          className="wrap-v-small"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            viewport={{ once: true }}
            data-tick={1} 
            className="course-module checked"
          >
            <a
              data-tick={1}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e3c"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e3c"
              href="#"
              className="tick-box checked white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 1:</strong> Intro to{" "}
              <span data-product-name="Market Mastery" className="products-name">
                Market Mastery
              </span>{" "}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
            viewport={{ once: true }}
            data-tick={2} 
            className="course-module checked"
          >
            <a
              data-tick={2}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e41"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e41"
              href="#"
              className="tick-box checked white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 2:</strong> Learn the tech-stack &nbsp;
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            viewport={{ once: true }}
            data-tick={3} 
            className="course-module"
          >
            <a
              data-tick={3}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e46"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e46"
              href="#"
              className="tick-box white w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div>
              <strong>Module 1, Episode 3:</strong> Mindset mastery
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.7 }}
            viewport={{ once: true }}
            className="course-module relative"
          >
            <a
              data-tick={4}
              data-wf-native-id-path="40cb5db0-fb19-8354-8e15-1c7772373e4b"
              data-wf-ao-click-engagement-tracking="true"
              data-wf-element-id="40cb5db0-fb19-8354-8e15-1c7772373e4b"
              href="#"
              className="tick-box white blur w-inline-block"
            >
              <div className="w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={9}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6 L9 17 L4 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <div className="blurred">Module 1, Episode 4: The first steps</div>
            <div className="lock">
              <div>Purchase to unlock the full course 🔐</div>
            </div>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 1.8 }}
            viewport={{ once: true }}
            data-wf-native-id-path="c96c1b3d-b8f0-842e-4de5-664436c7503b"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="c96c1b3d-b8f0-842e-4de5-664436c7503b"
            style={{
              backgroundColor: "#25ff1e",
              borderColor: "#001706",
              color: "#001706"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products _100 w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate Course<strong> </strong>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.9 }}
      viewport={{ once: true }}
      className="container box clear white w-condition-invisible"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        viewport={{ once: true }}
        className="wrap-v-small margin-small"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          viewport={{ once: true }}
          className="wrap-h-regular-2 mobile"
        >
          <div className="featured-course white">Community Preview</div>
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7d8a5f69b981ad6dab7_mmlogo.png"
            loading="lazy"
            alt=""
            height={40}
            className="h3-image course"
          />
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        viewport={{ once: true }}
        className="_2-grid"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          data-wf-native-id-path="fa468542-c180-d29c-02fb-5b3f0d5dbd5a"
          data-wf-ao-click-engagement-tracking="true"
          data-wf-element-id="fa468542-c180-d29c-02fb-5b3f0d5dbd5a"
          href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
          data-wf-event-ids={157035618}
          className="outline-div course w-inline-block"
          rel="noopener"
        >
          <img
            src="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058.png"
            loading="lazy"
            alt=""
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-500.png 500w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-800.png 800w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-1080.png 1080w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-1600.png 1600w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058-p-2000.png 2000w, https://cdn.prod.website-files.com/68369353418c3898194fa9f5/6837f7e2c64b0c78ddc354f8_Frame%2058.png 2136w"
            className="course-cover"
          />
        </motion.a>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          viewport={{ once: true }}
          className="wrap-v-small stretch"
        >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.4 }}
            viewport={{ once: true }}
          >
            ✅ Hosted on custom platform
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.5 }}
            viewport={{ once: true }}
          >
            ✅ 2000+ members
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.6 }}
            viewport={{ once: true }}
          >
            ✅ Pre-built landing page
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.7 }}
            viewport={{ once: true }}
          >
            ✅ Resell as your own
          </motion.h3>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 2.8 }}
            viewport={{ once: true }}
            data-wf-native-id-path="fa468542-c180-d29c-02fb-5b3f0d5dbd74"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="fa468542-c180-d29c-02fb-5b3f0d5dbd74"
            style={{
              backgroundColor: "#25ff1e",
              borderColor: "#001706",
              color: "#001706"
            }}
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-primary products _100 w-inline-block"
            rel="noopener"
          >
            <div className="dupe-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* flip horizontally: move right by 100 then scale X by –1 */}
                <g transform="translate(100, 0) scale(-1, 1)">
                  {/* Back sheet */}
                  <rect x={8} y={12} width={60} height={60} rx={10} />
                  {/* Front sheet */}
                  <rect x={20} y={28} width={60} height={60} rx={10} />
                </g>
              </svg>
            </div>
            <div>
              Duplicate Community<strong> </strong>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.section>





<motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="section no-padding" 
      style={{ backgroundColor: "#3a2581" }}
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
  </motion.section>

  <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="section no-bottom"
      style={{ backgroundColor: "#1a0c49" }}
    >
      <div className="w-layout-blockcontainer container w-container">
        <div className="wrap-v-regular align-center margin-s">
          <a href="#" className="header-badge w-inline-block">
            <div className="wrap-h-x-small">
              <p className="badge-p">FAQs</p>
            </div>
          </a>
          <h2 style={{ color: "#ffffff" }}>
            Frequently asked questions
          </h2>
        </div>

        <div
          className="outline-div faqs"
          style={{ backgroundColor: "#1a0c49" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq w-dropdown"
              style={{ backgroundColor: "#1a0c49", borderBottom: "1px solid #ccc" }}
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
                <h5 style={{ color: "#ffffff" }}>
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
                      color: "#ffffff",
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
                  backgroundColor: "transparent",
                  padding: openIndex === index ? "15px" : "0px 15px",
                  opacity: openIndex === index ? 1 : 0,
                  color: "#ffffff",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  <Footer1/>


   </>
   
  )
}

export default Landingpage