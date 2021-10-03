import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/scroll.module.css";
import { useInView } from "react-intersection-observer";
import { CactusIcon, CodeWindow, GraphGoingUpIcon } from "../components";
import { Router } from "next/dist/client/router";
import Nav from "../components/Nav";

export default function Home() {
  const [arrowAnimationToggle, setArrowAnimationToggle] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [hoverWhoAmICard, setHoverWhoAmICard] = useState(false);

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
      className={`flex flex-col items-center justify-start h-auto bg-white min-w-full ${styles.scrollContainer}`}
    >
      <div className={`min-w-full absolute top-0 ${styles.scrollSpeed}`}>
        <Image
          src="/Background.jpg"
          layout="responsive"
          height="46.198vw"
          width="100vw"
        />
      </div>
      <div
        className="flex flex-col min-w-full bg-gradient-to-b from-secondary to-darkSecondary relative pb-10 mt-25%"
        id="bodyContent"
      >
        <Nav />
        <div className="hidden md:flex h-7vw"></div>
        <div
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
            My name is Sebastian Morgan, and I am a 4<sup>th</sup> year{" "}
            <b>Math and Computer Sciences</b> student at the University of
            California, San Diego. Beyond web development and other fun coding
            endeavors, I enjoy myself by spending as much time outside as I can,
            leading within the communities that have made an impact on my life,
            and appreciating the people and opportunities that have taken me
            this far.
          </p>
        </div>
        <div
          className={`mt-16 py-5 mr-2% pr-2% ml-4% pl-2% md:mr-10% md:pr-2% md:ml-13% md:pl-2% lg:mr-15% lg:pr-5% lg:ml-20% lg:pl-5% flex flex-col items-start bg-darkSecondary rounded-2xl ${styles.hoverBrightenCard} ${styles.cardShadow}`}
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
            <h1
              className={`font-bold text-3xl md:text-4xl text-lightPrimary font-header relative mb-8`}
              ref={triggerArrowAnimRef}
            >
              Leadership.
            </h1>
          </div>
          <p className="font-body text-md md:text-lg lg:text-xl text-white leading-6 md:leading-7 lg:leading-8">
            Working to build a more inclusive and positive community at UC San
            Diego as the VP–Internal, then as the co-President for Out in STEM
            at UCSD. As a student leader, I've had to manage conflict, work in
            and lead a team, and listen to every person within that team. As the
            co-President of oSTEM @ UCSD, I have worked to build the confidence
            of incoming student leaders, becoming a more effective communicator,
            and taking responsibility for my actions and shortcomings.
          </p>
        </div>
        <CodeWindow
          className={`${styles.hoverBrightenCard} mt-16 py-5 pl-4% ml-2% pr-2% mr-4% md:pl-3% md:ml-9% md:pr-3% md:mr-12% lg:pl-5% lg:ml-15% lg:pr-5% lg:mr-20% items-end`}
        >
          <h1
            className={` font-bold text-3xl md:text-4xl text-lightPrimary font-header relative mb-8`}
          >
            Coding.
          </h1>
          <p
            className={`${styles.codeBlockExecute} relative font-code text-sm md:text-md lg:text-lg mb-10 text-white leading-6 md:leading-7 lg:leading-8`}
          >
            Interestingly enough, out of everything I've done, my coding
            experience is probably the least impressive part of my resume. I was
            an Applied Mathematics major until my 3rd year at UCSD, when I
            realized that Computer Science was so much more fun. I've built this
            website, so I clearly enjoy messing around with web development,
            especially with React frameworks, and I have also been exposed to
            Angular and enjoy the challenge Angular presents.
          </p>
          <p
            className={`${styles.codeBlockExecute} ${styles.codingTypingAnimation} relative font-code text-sm md:text-md lg:text-lg text-white leading-6 md:leading-7 lg:leading-8`}
          >
            It seems like university always steers students in the direction of
            software engineering. I have actually thoroughly enjoyed working
            closely with algorithms and optimizing problems that these classes
            introduced. For now, web development is calling my name, but I am
            open to the idea of exploring other paths in technology and learning
            as much as I can. Over the past year, I've done just that: explore.
            First, I switched my major to Math and Computer Sciences so I could
            explore the coursework. I looked into machine learning and very
            quickly left that for another time, worked on a minecraft mod and
            rediscovered how fun Java was to work with, then I typed in{" "}
            <b>create-react-app</b> and the world of the web opened its arms to
            me.
          </p>
        </CodeWindow>
        <div className="relative mt-16 py-5 px-5% md:px-15% lg:px-25% flex flex-col items-center">
          <h1
            className={`font-bold text-3xl md:text-4xl text-lightPrimary font-header relative text-center`}
          >
            More About Me!
          </h1>
          <div className="w-50% max-w-350px">
            <CactusIcon
              stroke="#793566"
              fill="#C0E4CA"
              className={styles.animateStroke}
            />
          </div>
          <div
            className={`bg-lightPrimary rounded-xl p-5 -mt-10 ${styles.cardShadow} ${styles.hoverBrightenCard}`}
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
              all else, and in my professional endeavors, I will look for
              positions and opportunities that respect <b>me</b> fully.
              Currently, I feel passion for coding, for working in technology,
              and I will be unwavering in my efforts to find a job which allows
              me to continue being passionate about learning and programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
