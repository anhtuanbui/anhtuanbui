"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <main id="" className={styles.main}>
      <section className={styles.navigation}>
        <ul>
          <li>
            <a href="#whatWeDo">What we do</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </section>
      <section id="hero" className={styles.hero}>
        <Image
          className={styles.mainImage}
          src="/assets/images/tree.png"
          alt="main picture"
          width={1920}
          height={1080}
        />
        <div className={styles.mainText}>
          <h1 className={styles.mainTextH1}>ANH TUAN BUI</h1>
        </div>
      </section>

      <section id="whatWeDo" className={styles.secondSection}>
        <div className={styles.triangle}>
          <div className={styles.whiteStribe}></div>
        </div>
        <div className={styles.leadTriangle}></div>

        <div className={styles.leadTriangleTexts}>
          <h2>Building website services</h2>
          <p className={styles.leadTriangleTexts1}>
            Prioritize intuitive, visually appealing designs with easy
            navigation and responsive interfaces to enhance the user experience.
          </p>
          <p className={styles.leadTriangleTexts2}>
            Build websites that can grow with the client's needs, utilizing
            scalable infrastructure and modular design principles for future
            expansion.
          </p>
          <p className={styles.leadTriangleTexts3}>
            Implement SEO best practices, including keyword optimization and
            mobile responsiveness, to improve website visibility on search
            engines.
          </p>
          <p className={styles.leadTriangleTexts4}>
            Ensure website security through SSL certificates and secure coding
            while optimizing performance with fast load times and content
            delivery networks for a secure and efficient online presence.
          </p>
        </div>
      </section>

      <section id="services" className={styles.thirdSection}>
        <Image
          className={styles.mainImage}
          src="/assets/images/coding.jpg"
          alt="plants picture"
          width={1920}
          height={600}
        />
        <div className={styles.thirdSection}>
          <div className={`${styles.thirdSectionInfo} ${styles.container}`}>
            {/* <div className={styles.thirdSectionChild}> */}
            <Image
              className={styles.thirdSectionChildIcon}
              src="/assets/icons/custom.png"
              alt="plants picture"
              width={50}
              height={50}
            />
            <Image
              className={styles.thirdSectionChildIcon}
              src="/assets/icons/ecommerce.png"
              alt="plants picture"
              width={50}
              height={50}
            />
            <Image
              className={styles.thirdSectionChildIcon}
              src="/assets/icons/seo.png"
              alt="plants picture"
              width={50}
              height={50}
            />
            <h2>Custom Website Development</h2>
            <h2>E-commerce Website Solutions</h2>
            <h2>Website Redesign and Optimization</h2>
            <p className={styles.leadTriangleTexts4}>
              Craft tailored websites from scratch, aligning design and
              functionality with client needs for a unique online presence.
            </p>
            {/* </div> */}
            {/* <div className={styles.thirdSectionChild}> */}
            <p className={styles.leadTriangleTexts4}>
              Create robust online stores with seamless shopping experiences,
              integrating secure payment gateways and scalable architecture.
            </p>
            {/* </div> */}
            {/* <div className={styles.thirdSectionChild}> */}
            <p className={styles.leadTriangleTexts4}>
              Transform existing websites through redesign and performance
              optimization, enhancing user experience and maximizing search
              engine visibility.
            </p>
            {/* </div> */}
          </div>
        </div>
      </section>

      <section className={styles.footer}>
        <p>Copyright 2023 by Anh Tuan Bui</p>
      </section>
      <button className={styles.goTop} onClick={goTop} style={{ display: visible ? "inline" : "none" }}>
        <Image
          
          src="/assets/icons/up-arrow.png"
          alt="plants picture"
          width={30}
          height={30}
        />
      </button>
    </main>
  );
}
