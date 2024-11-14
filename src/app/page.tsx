import { NavBar } from "@/components/NavBar";
import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";

import ipAddressTrackerScreenshot from "../../public/assets/images/ip address tracker screenshot.png";
import paxformScreenshot from "../../public/assets/images/paxform screenshot.png";
import urlShorteningScreenshot from "../../public/assets/images/URL shortening screenshot.png";

import selfPhoto from "../../public/assets/images/self photo.jpg";


import LogoCarousel from '@/components/LogoCarousel';

const size = 64;

const companyLogos = [
  {
    id: 1,
    imageUrl: "/assets/logos/HTML5_1Color_Black.png",
    alt: "Google",
    width: size,
    height: size
  },
  {
    id: 2,
    imageUrl: "/assets/logos/css3-logo-black-and-white.png",
    alt: "Microsoft",
    width: size,
    height: size
  },
  {
    id: 3,
    imageUrl: "/assets/logos/csharp.png",
    alt: "Apple",
    width: size,
    height: size
  },
  {
    id: 4,
    imageUrl: "/assets/logos/aspfe1.png",
    alt: "Amazon",
    width: size,
    height: size
  },
  {
    id: 5,
    imageUrl: "/assets/logos/typescript.svg",
    alt: "Meta",
    width: size,
    height: size
  },
  {
    id: 6,
    imageUrl: "/assets/logos/logo-js-icon-2048x2048-ptuzd8a3.png",
    alt: "Meta",
    width: size,
    height: size
  },
  {
    id: 7,
    imageUrl: "/assets/logos/python-logo-black-and-white.png",
    alt: "Meta",
    width: size,
    height: size
  },
  {
    id: 8,
    imageUrl: "/assets/logos/java.png",
    alt: "Meta",
    width: size,
    height: size
  },
  {
    id: 9,
    imageUrl: "/assets/logos/next-js.svg",
    alt: "Meta",
    width: size,
    height: size
  },
  {
    id: 10,
    imageUrl: "/assets/logos/tailwind-css.svg",
    alt: "Meta",
    width: size,
    height: size
  },
];

export default function Home() {
  var year = new Date().getFullYear();

  return (
    <main className="relative">
      <NavBar />
      <section id="portfolio">
        <div className="flex h-screen justify-center bg-[#FBF8F2] items-center">
          <div className="relative">
            <span className="absolute sm:text-sm -top-3 sm:-top-2 left-1/2 transform -translate-x-1/2 bg-[#FBF8F2] px-10 sm:px-4">
              {year}
            </span>
            <h1 className="text-8xl md:text-6xl sm:text-4xl font-bold border-solid border-y-2 border-black py-4 tracking-widest">
              PORTFOLIO
            </h1>
            <span className="absolute sm:text-sm -bottom-3 sm:-bottom-2 left-1/2 transform -translate-x-1/2 bg-[#FBF8F2] px-10 sm:px-4 whitespace-nowrap">
              Anh Tuan Bui
            </span>
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 bg-[#EFEFEF] mb-10">
        <LogoCarousel
          logos={companyLogos}
          speed={40}
          spacing={12}
          logoHeight={size}
        />

      </section>

      <section
        id="projects"
        className="container mx-auto px-8 sm:px-2 py-size py-10"
      >
        <h2 className="text-2xl font-bold text-center">Projects</h2>
        <p className="text-center">I got involved</p>
        <div className="grid grid-cols-3 sm:grid-cols-1 my-10 gap-20 md:gap-10">
          <ProjectCard
            url="https://paxform.com/"
            image={paxformScreenshot}
            name="Paxform"
            description="A landing page for Paxform which I created when I was working there."
          />
          <ProjectCard
            url="https://anhtuanbui.github.io/fem-ip-address-tracker/"
            image={ipAddressTrackerScreenshot}
            name="IP Address Tracker"
            description="An IP address tracker which I created while practicing SCSS with the idea from Front End Mentor."
          />
          <ProjectCard
            url="https://anhtuanbui.github.io/fem-url-shortening/"
            image={urlShorteningScreenshot}
            name="URL Shortening"
            description="An URL shortening app I created while practicing SCSS with the idea from Front End Mentor."
          />
        </div>
      </section>
      <section id="about" className="bg-[#9CC0F9]">
        <div className="container px-8 sm:px-2 mx-auto py-20">
          <h2 className="font-bold text-center text-2xl">About Me</h2>
          <div className="flex sm:flex-col gap-20 mt-10">
            <div className="basis-1/2 flex justify-center">
              <Image
                src={selfPhoto}
                alt="photo of myself"
                className="w-1/2 md:w-full object-cover rounded-full overflow-hidden"
              ></Image>
            </div>
            <div className="basis-1/2">
              <p className="leading-7 mb-3 text-justify">
                Skilled Web Developer and IT Support professional based in
                Sydney, NSW, with a Bachelor of Information Technology from
                King’s Own Institute. Led projects, including developing a
                public website for Paxform using ReactJS and WordPress.
                Proficient in programming languages such as C#, Python, Java,
                JavaScript, HTML, CSS, and TypeScript, and frameworks like
                Angular and ASP.NET.
              </p>
              <p className="leading-7 text-justify mb-3">
                Experienced with Windows, MacOS, and Linux operating systems,
                and skilled in using GitHub for version control. Known for
                strong problem-solving abilities, communication, and teamwork
                skills. Highly organized, detail-oriented, and quick to adapt to
                new technologies.
              </p>
              <p className="leading-7 text-justify">
                Certified in building an e-commerce app with .Net Core and
                Angular, with a commitment to continuous learning and
                professional development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-20 bg-[#1F1F1F] text-center">
        <p className="text-white">Copyright ©2024</p>
        <p className="text-white">Anh Tuan Bui</p>
      </footer>
    </main>
  );
}
