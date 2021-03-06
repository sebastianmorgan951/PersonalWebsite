import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/scroll.module.css";
import { useInView } from "react-intersection-observer";
import { CactusIcon, CodeWindow, GraphGoingUpIcon } from "../components";
import Nav from "../components/Nav";
import Link from "next/link";

/** TODO:
 *
 * Reduced Motion at some point
 */

export default function Home() {
  const [arrowAnimationToggle, setArrowAnimationToggle] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [hoverWhoAmICard, setHoverWhoAmICard] = useState(false);

  var lastScrollPosition = 0;
  var backgroundImageObj = null;
  var tick = false; // Track whether call is currently in process

  const parallaxEffects = (scrollPos) => {
    if (!backgroundImageObj) {
      backgroundImageObj = document.getElementById("bgImg");
    }
    backgroundImageObj.style.top = `${-(scrollPos * 0.4)}px`;
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      lastScrollPosition = window.scrollY;
      if (!tick) {
        //Use RAF function to enqueue animations rather than force many small animations
        window.requestAnimationFrame(() => {
          parallaxEffects(lastScrollPosition);
          tick = false;
        });
        tick = true;
      }
    });
  }, []);

  const [triggerTypingRef, typingEffectView] = useInView({
    threshold: 1,
    rootMargin: "0px",
  });

  const [triggerArrowAnimRef, arrowAnimReady] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    setArrowAnimationToggle(true);
  }, [arrowAnimReady]);

  return (
    <div
      className={`flex flex-col items-center justify-start bg-white min-w-full`}
    >
      <div className="absolute w-100% pt-40%">
        <div className="absolute top-0 left-0 w-100% h-100%">
          <Image
            id="bgImg"
            src="/Background.jpg"
            layout="fill"
            objectFit="cover"
            className="z-0"
            alt="Background image of a rocky beach on a cloudy day"
          />
        </div>
      </div>
      <div className="mt-25%"></div>
      <Nav />
      <main className="overflow-x-hidden flex flex-col min-w-full bg-gradient-to-b from-secondary to-darkSecondary pb-10 z-10 -mt-2">
        <div className="hidden md:flex h-7vw"></div>
        <section
          className={`py-5 lg:pl-20% lg:pr-25% md:pl-12% md:pr-15% pl-4% pr-6% flex flex-col items-start bg-secondary  ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-bold text-3xl md:text-5xl text-lightPrimary font-header relative mb-8 ${
              typingEffectView ? styles.coverQuestionAnimate : ``
            }`}
            ref={triggerTypingRef}
          >
            <div
              className={`absolute w-150px md:w-240px ${
                hoverWhoAmICard ? "bg-lightPrimary" : "bg-secondary"
              } h-100% left-0 z-10 ${
                typingEffectView ? styles.typingReveal : ``
              }`}
            />
            Who am I?
          </h1>
          <p className="font-body text-lg md:text-xl lg:text-2xl text-white leading-8 md:leading-9 lg:leading-10">
            My name is Sebastian Morgan, and I <strike>am</strike> just finished
            my 4<sup>th</sup> year as a <b>Math and Computer Sciences</b>{" "}
            student at the University of California, San Diego. I am now working
            at BD as a Software Development Program Engineer! This program will
            take me through several projects and teams, allowing me to work on
            different medical devices and technologies. Beyond web development
            and other fun coding endeavors, I enjoy spending as much time
            interacting with the natural world as I can, leading within the
            communities that have made an impact on my life, and appreciating
            the people and opportunities that have taken me this far.
          </p>
        </section>
        <section
          className={`mt-32 py-5 mr-2% pr-2% ml-4% pl-2% md:mr-10% md:pr-2% md:ml-13% md:pl-2% lg:mr-15% lg:pr-5% lg:ml-20% lg:pl-5% flex flex-col items-start bg-darkSecondary rounded-2xl ${styles.hoverBrightenCard} ${styles.cardShadow}`}
        >
          <div
            className={`w-full flex flex-col items-center justify-center relative`}
          >
            <GraphGoingUpIcon
              fill="#C0E4CA"
              stroke="black"
              fillAnimation={
                arrowAnimationToggle ? styles.graphClipRectangle : ``
              }
              className={
                arrowAnimationToggle
                  ? `${styles.scaleDown} ${styles.animateLeadershipArrow}`
                  : `invisible`
              }
            />
            <h2
              className={`font-bold text-3xl md:text-4xl text-lightPrimary font-header relative mb-8`}
              ref={triggerArrowAnimRef}
            >
              Leadership.
            </h2>
          </div>
          <p className="font-body text-md md:text-lg lg:text-xl text-white leading-6 md:leading-7 lg:leading-8">
            As a student leader at UCSD, I worked to build a more inclusive and
            positive community at UC San Diego as the VP???Internal, then as the
            co-President for Out in STEM at UCSD. Over those nearly three years
            with Out in STEM at UCSD, I had to manage conflict, work in and lead
            a team, and listen to every person within that team. <br />
            <br />
            As I move towards being employed, I look forward to spending my
            extra time volunteering to support meaningful issues, whether
            through educational outreach, building websites to help get the word
            out for important organizations, or any other way I can help.
          </p>
        </section>
        <section className="min-w-full">
          <CodeWindow className={`${styles.hoverBrightenCard}`}>
            <h2
              className={` font-bold text-3xl md:text-4xl text-lightPrimary font-header relative mb-8`}
            >
              Coding.
            </h2>
            <p
              className={`${styles.codeBlockExecute} relative font-code text-sm md:text-md lg:text-lg mb-10 text-white leading-6 md:leading-7 lg:leading-8`}
            >
              I only discovered my love for Computer Sciences during my 3rd year
              at UCSD. I was an Applied Mathematics major before that point,
              then I realized that Computer Science felt much more concrete and
              personally fulfilling. I've built this website and I enjoy web
              development, especially using React frameworks, though I have
              experience with Angular and enjoy the challenge Angular presents
              as well.
            </p>
            <p
              className={`${styles.codeBlockExecute} ${styles.codingTypingAnimation} relative font-code text-sm md:text-md lg:text-lg text-white leading-6 md:leading-7 lg:leading-8`}
            >
              My journey through technology is characterized by exploration.
              First, I switched my major to Math and Computer Sciences so I
              could immerse myself more deeply in Computer Sciences at UCSD. I
              looked into machine learning and learning the mathematics behind
              small multilayer perceptrons and working on a small project, but
              left that for another time. Then I worked on a minecraft mod and
              rediscovered how fun Java was to work with, cementing my data
              structures and algorithms fundamentals. Finally, I typed in{" "}
              <b>create-react-app</b> and the world of the web opened its arms
              to me.
            </p>
          </CodeWindow>
        </section>
        <section className="relative mt-32 py-5 px-5% md:px-15% lg:px-25% flex flex-col items-center">
          <div className="relative flex flex-row items-end justify-center min-w-full">
            <div className="w-50% max-w-200px md:max-w-350px z-0">
              <CactusIcon
                stroke="#793566"
                fill="#C0E4CA"
                className={styles.animateStroke}
              />
            </div>
            <h2
              className={`mb-5 md:mb-10 -ml-4% xs:-ml-9% sm:-ml-50px md:-ml-100px whitespace-nowrap font-bold text-3xl md:text-5xl text-lightPrimary font-header relative text-center`}
            >
              More About Me!
            </h2>
          </div>
          <div
            className={`bg-lightPrimary rounded-xl p-5 -mt-5 md:-mt-10 z-10 ${styles.cardShadow} ${styles.hoverBrightenCard}`}
          >
            <p className="font-body text-md md:text-lg lg:text-xl text-darkSecondary leading-6 md:leading-7 lg:leading-8 mb-10">
              I was fortunate to grow up in Riverside, California, where despite
              the eternal heat, I was surrounded by nature and wildlife. I can't
              remember a time when hearing coyotes yipping excitedly surprised
              me, or when the large and persistent stink beetles bugged me. With
              the exception of a few wasps and many Black Widows, I really grew
              to appreciate the world around me.
            </p>
            <p className="font-body text-md md:text-lg lg:text-xl text-darkSecondary leading-6 md:leading-7 lg:leading-8">
              Not only did I learn to love my environment, but I grew out of an
              awkward teenager into someone who has realized that they{" "}
              <i>like</i> people. I value loyalty, kindness, and respect above
              all else, and in my professional endeavors, I expect these
              positions and opportunities to respect <b>me</b> fully. Currently,
              I feel passion for coding, for working in technology, and I will
              be unwavering in my efforts to find a job which allows me to
              continue being passionate about learning and programming.
            </p>
          </div>
        </section>
        <section
          className={`mt-32 mb-10 py-5 lg:pl-20% lg:pr-25% md:pl-12% md:pr-15% pl-4% pr-6% flex flex-col items-center bg-secondary  ${styles.hoverBrightenCard}`}
        >
          <h2
            className={`font-bold text-2xl md:text-4xl text-lightPrimary text-center font-header relative mb-3`}
          >
            How did I build this Website?
          </h2>
          <p className="font-body mb-6 text-md md:text-lg lg:text-xl text-lightPrimary leading-6 md:leading-7 lg:leading-8">
            Check out the Github repository for this website! You can follow the{" "}
            <b>button below</b> for the code. I used tailwindcss to style most
            of the components, this allowed me deploy this application fairly
            quickly, however this came at the cost of not thinking to build a
            more reusable component-driven application.
            <br />
            <br />
            To speed up load times, I used the built-in NextJS Image components,
            which are lazy loading by default, and reduced the image size for
            all non-cover images. To create an aspect ratio for the images, I
            created a relatively positioned div to contain each image, and set a
            percent width and percent <b>padding top</b> on the div. I set the
            padding top, as the padding top percent is with regards to the width
            of the parent element, giving us a div with a fixed length:width
            ratio. The image is then absolutely positioned within this div, and
            you give it a width 100% and height 100% (in NextJS this means
            setting the layout to fill), and top and left 0. Finally, you make
            the image objectfit attribute equal to cover, and you're done.
            <br />
            <br />
            I only used one package other than tailwindcss on this application,
            and the package was to simplify the built-in intersection observer
            so I could detect when the user had scrolled a certain amount more
            easily rather than listening to scroll events, which would hinder
            the performance of the website. I recommend you try to resize your
            screen to break this layout, I have designed it with different
            screen sizes in mind so I hope that my design is robust in any
            circumstance!
            <br />
            <br />I spent about one and a half weeks working on this website for
            an average of 3-4 hours a day. Much of that time was spent thinking
            up creative ways to make this home page fun for the user. Try to
            find all of the easter eggs around this website, all of them are
            fairly obvious, but are kind of fun (: Also use devtools to see how
            some of these animations were implemented, they were fun to figure
            out!
          </p>
          <a
            href="https://github.com/sebastianmorgan951/PersonalWebsite"
            className={`cursor-pointer bg-lightPrimary text-black hover:text-white mb-5 rounded-md transition-all hover:bg-darkSecondary hover:px-10`}
          >
            <p className="font-header font-bold lg:text-lg md:text-md text-sm mx-5 my-2">
              Source Code for this Website
            </p>
          </a>
          <Link href="/Resume-Sebastian-Morgan.pdf">
            <a
              className={`px-5 cursor-pointer bg-lightPrimary text-black hover:text-white mb-5 rounded-md transition-all hover:bg-darkPrimary hover:px-10`}
            >
              <p className="font-header font-bold lg:text-lg md:text-md text-sm mx-5 my-2">
                Resume
              </p>
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
}
