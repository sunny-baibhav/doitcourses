import React from 'react'

const Content = () => {
  return (
    <section id="content-library" className="section">
  <div className="container box">
    <div className="wrap-v-small margin-large">
      <img
        src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/686377c5def8a373076506a0_Group%2013.avif"
        loading="lazy"
        sizes="(max-width: 479px) 100vw, 285.375px"
        height={50}
        alt=""
        srcSet="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/686377c5def8a373076506a0_Group%2013-p-500.avif 500w, https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/686377c5def8a373076506a0_Group%2013.avif 2323w"
        className="h3-image"
      />
      <h2 className="green">Access a vault of 25K+ pre-made videos</h2>
      <p className="paragraph-large">
        Unlock instant access to one of our most popular features!
      </p>
    </div>
    <div className="wrap-v-regular">
      <div className="w-layout-grid grid-two-column flip">
        <div className="outline-div green">
          <div className="video_element w-embed">
            <video
              className="lazy"
              autoPlay=""
              muted=""
              loop=""
              playsInline=""
              style={{
                position: "relative",
                width: "100%",
                height: "101%",
                objectFit: "fill"
              }}
              poster="https://cdn.prod.website-files.com/6653dab99b57babf66fb8aea/67e378d8abe681946110633_Still%202025-03-26%20165709_1.29.1.webp"
            >
              <source
                src="https://www.dropbox.com/scl/fi/kzwjqu47tkjh2iogoerh4/transparent-phone.mp4?rlkey=7i6weuqhf31ngmchiluequyvj&st=bcakmnfa&raw=1"
                type="video/mp4"
              />
              <source
                src="https://www.dropbox.com/scl/fi/lce7f1x17gedk34181z7g/transparent-phone.webm?rlkey=bho34pb3md10krte8x03r6wpu&st=yg3tzi0z&raw=1"
                type="video/webm"
              />
            </video>
          </div>
        </div>
        <div
          id="w-node-e8570340-228d-8692-80ef-700f37eaeb35-b8a51723"
          className="wrap-v-large max-width-grid"
        >
          <h3 className="green">20k+ luxury lifestyle clips</h3>
          <p>
            Unlock a premium vault of high-impact content designed to go
            viral—featuring exotic cars, penthouse views, and success moments.
          </p>
          <a
            data-wf-native-id-path="e8570340-228d-8692-80ef-700f37eaeb3a"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="e8570340-228d-8692-80ef-700f37eaeb3a"
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-secondary white w-inline-block"
            rel="noopener"
          >
            <div className="black">Download videos now</div>
            <img
              src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6843de0e1a43bfd56b387854_download_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              loading="lazy"
              width={22}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="w-layout-grid grid-two-column">
        <div className="wrap-v-large max-width-grid">
          <h3 className="green">6k+ ready-made edits</h3>
          <p>
            Access pre-edited reels and TikToks, from luxury montages to
            motivational content. Just download, post, and watch your social
            metrics climb.
          </p>
          <a
            data-wf-native-id-path="e8570340-228d-8692-80ef-700f37eaeb44"
            data-wf-ao-click-engagement-tracking="true"
            data-wf-element-id="e8570340-228d-8692-80ef-700f37eaeb44"
            href="https://start.dropcourse.com/b/3cI9AU5SW9Gi2qu9Mi6oo04"
            data-wf-event-ids={157035618}
            className="button-secondary white w-inline-block"
            rel="noopener"
          >
            <div className="black">Download videos now</div>
            <img
              src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/6843de0e1a43bfd56b387854_download_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              loading="lazy"
              width={22}
              alt=""
            />
          </a>
        </div>
        <div className="outline-div green">
          <img
            src="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/688cc268a7aaa6e2ec9befc8_Frame%20103.avif"
            loading="lazy"
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/688cc268a7aaa6e2ec9befc8_Frame%20103-p-500.avif 500w, https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/688cc268a7aaa6e2ec9befc8_Frame%20103-p-800.avif 800w, https://cdn.prod.website-files.com/67b96fd14bb10523b8a51725/688cc268a7aaa6e2ec9befc8_Frame%20103.avif 2666w"
            alt=""
            className="image-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Content