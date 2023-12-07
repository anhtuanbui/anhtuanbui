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
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        /* you can also use 'auto' behaviour 
        in place of 'smooth' */
      });
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }
  
  return (
    <main id="" className={styles.main}>
      <section className={styles.navigation}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#whatWeDo">What we do</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
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
            Build websites that can grow with the client&apos;s needs, utilizing
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
        <div className={styles.thirdSectionInfoGroup}>
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

      <section id="about" className={styles.about}>
        <div className={styles.generalInfo}>
          <h2>About me</h2>
          <div className={styles.generalInfoInfo}>
            <h3>Anh Tuan Bui</h3>
            <p>
              I am Anh Tuan Bui, a accomplished Web Developer and IT Support
              professional who led the development of Paxform&apos;s public
              website with expertise in ReactJS and WordPress. Known for my
              problem-solving and strong communication skills, I possess
              technical proficiency in various programming languages and
              frameworks.
            </p>
          </div>
        </div>

        <div className={styles.aboutInfo}>
          <Image
            className={styles.aboutIcon}
            src="/assets/icons/leadership.png"
            alt="plants picture"
            width={50}
            height={50}
          />
          <Image
            className={styles.aboutIcon}
            src="/assets/icons/technical-support.png"
            alt="plants picture"
            width={50}
            height={50}
          />
          <Image
            className={styles.aboutIcon}
            src="/assets/icons/key-skills.png"
            alt="plants picture"
            width={50}
            height={50}
          />

          <h3>Leadership and Team Management</h3>
          <h3>Technical Proficiency</h3>
          <h3>Problem-Solving Skills</h3>
          <p>
            As a Web Developer, I successfully led a team of four in designing
            and launching Paxform&apos;s public website, demonstrating effective
            leadership and collaboration skills.
          </p>
          <p>
            Proficient in a diverse set of programming languages and frameworks
            including C#, Python, Java, ReactJS, and WordPress, showcasing
            versatility and expertise in web development.
          </p>
          <p>
            Recognized for my adept problem-solving abilities, I provided
            solutions for both front-end and back-end challenges during the
            development of Paxform&apos;s public website.
          </p>
          <Image
            className={styles.aboutIcon}
            src="/assets/icons/effective-communication.png"
            alt="plants picture"
            width={50}
            height={50}
          />
          <Image
            className={styles.aboutIcon}
            src="/assets/icons/adaptation.png"
            alt="plants picture"
            width={50}
            height={50}
          />
          <Image
            className={styles.aboutIcon}
            src="/assets/icons/organization-skills.png"
            alt="plants picture"
            width={50}
            height={50}
          />
          <h3>Effective Communication</h3>
          <h3>Adaptability and Quick Learning</h3>
          <h3>Organizational Skills</h3>

          <p>
            Strong communication skills, both verbal and written, were essential
            in mentoring interns, consulting on new features for Paxform&apos;s
            products, and ensuring successful project outcomes.
          </p>
          <p>
            Proven ability to adapt to new technologies and processes, as
            reflected in my role as a Supervisor at Paxform after just two weeks
            of working as an intern.
          </p>
          <p>
            Known for organizational excellence, I managed project interfaces
            using Figma, supervised teams with Trello, and effectively handled
            the code base using GitHub during various web development projects.
          </p>
        </div>
      </section>

      <section className={styles.footer}>
        <p>Copyright 2023 by Anh Tuan Bui</p>
      </section>
      <button
        className={styles.goTop}
        onClick={goTop}
        style={{ display: visible ? "inline" : "none" }}
      >
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
