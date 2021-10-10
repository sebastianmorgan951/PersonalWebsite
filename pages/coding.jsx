import Nav, { SimpleNav } from "../components/Nav";
import ToggleSwitch from "../components/ToggleSwitch";
import styles from "../styles/scroll.module.css";
import { useState } from "react";
import Image from "next/dist/client/image";

export default function Coding() {
  const [colors, setColors] = useState({
    bg: "bg-lightPrimary",
    cardBg: "bg-lightPrimary",
    text: "text-black",
  });

  const handleColorSwitch = () => {
    if (colors.text === "text-black") {
      setColors({
        bg: "bg-darkSecondary",
        cardBg: "bg-secondary",
        text: "text-white",
      });
      return;
    }
    setColors({
      bg: "bg-lightPrimary",
      cardBg: "bg-lightPrimary",
      text: "text-black",
    });
  };

  return (
    <div
      className={`flex flex-col items-center justify-start h-auto bg-white min-w-full ${colors.bg} pb-40`}
    >
      <SimpleNav />
      <div className="min-w-full px-3% md:px-15% lg:px-20%">
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <div
            className="absolute -top-16"
            onClick={() => {
              handleColorSwitch();
            }}
          >
            <ToggleSwitch
              width="w-24"
              height="h-24"
              className="transform -rotate-90"
            />
          </div>
          <h1
            className={`font-header text-3xl md:text-5xl lg:text-6xl font-bold mt-3 ${colors.text}`}
          >
            Coding
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            I took my sweet time figuring out that coding was my calling. As I
            went through high school, I remember performing pretty well in my
            Math classes, which led me to apply to universities as a Math major.
          </p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            I was accepted to the University of California, San Diego as an
            Applied Mathematics major, and started taking my Math classes as
            soon as Fall Quarter started. I felt out of place within my major
            very quickly, not because I performed badly or particularly well,
            but because it felt largely pointless at the time. Then I took my
            first Computer Sciences class and thoroughly enjoyed it. After
            taking several computer sciences classes and realizing that tech
            played a huge role in my vision of my future, I finally switch my
            major to Mathematics and Computer Sciences as a <b>third</b> year.
          </p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md self-start mb-5 ${colors.text}`}
          >
            Here are a few projects that have helped me realize exactly what
            within Computer Sciences I enjoy.
          </p>
          <p
            className={` ${colors.text} font-body lg:text-2xl md:text-xl text-lg self-start`}
          >
            <b>NOTE!</b> This is in chronological order, so scroll all the way
            down for my most relevant experience.
          </p>
        </div>
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-header text-2xl md:text-4xl lg:text-5xl text-center font-bold ${colors.text}`}
          >
            Terminal Snake Game
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            My first Computer Science program was written in Java, and I quickly
            became comfortable with Java. I have come to appreciate the Java
            garbage collection system and fairly user-friendly syntax after
            being exposed to other languages, and coded using Java solely
            because of this for a while. After taking one class in Java, I
            wanted to use what I had learned to build a snake game which would
            print to the terminal, so I did!
          </p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>What I learned:</b>
            <br />
            <li>
              Designing the logic of a program is <i>fun</i>
            </li>
            <li>Building something visual was rewarding</li>
          </p>
          <Image
            alt=""
            src={`/SnakeProgram.PNG`}
            width={228}
            height={294}
            className="rounded-md"
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/B1HgAGjgKUw8C4jQAAAABJRU5ErkJggg=="
          />
        </div>
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-header text-2xl md:text-4xl lg:text-5xl text-center font-bold ${colors.text}`}
          >
            Image Compression
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            The first Hackathon I attended was during the end of my first year.
            At this hackathon, I was adopted by a group of PhD students who
            proceeded to develop a deep learning model to tackle the problem at
            hand, which went miles over my head. The sole part of their proposed
            solution I could actually understand was the use of video
            compression techniques (<b>H.264</b>) to compress video before
            running that video through their model. <br />
            <br />
            My project after that Hackathon was to understand how H.264
            compressed videos. In order to do so, I first had to gain an
            understanding of how single frames were compressed as well. I
            quickly learned about the Discrete Cosine Transform, which is
            breaking images down into the sum of many checkerboard grids, with
            different sized checker squares. Then, I decided to implement this
            algorithm to manually compress a two-dimensional array of pixels
            into such a sum of cosine waves.
            <br />
            <br />
            This ended up not being much fun, but I learned a lot about myself.
          </p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>What I learned:</b>
            <br />
            <li>The pure Math was less fun than coding</li>
            <li>
              I shouldn't cling to a project just because it sounds impressive
            </li>
          </p>
        </div>
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-header text-2xl md:text-4xl lg:text-5xl text-center font-bold ${colors.text}`}
          >
            Predicting Gentrified Tracts
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>Census Tract:</b> A subdivision of a county
            <br />
            <b>Gentrification:</b> the process whereby the character of a poor
            urban area is changed by wealthier people moving in, improving
            housing, and attracting new businesses, typically displacing current
            inhabitants in the process
            <br />
            <br />
            Between my 2<sup>nd</sup> and 3<sup>rd</sup> year, I had a lot of
            time to explore various hobbies and projects. I had been minimally
            involved in the club Triton Robotics right before the quarantine
            began, and was introduced to a computer vision models through this
            organization. With the excitement of the <i>machine learning</i>{" "}
            buzzword pushing me along, I decided to pursue my own project
            building a neural network to attempt to predict census tracts that
            were at risk of becoming gentrified. <br />
            <br />I do think this question was actually my favorite topic I had
            explored to this point, and began to learn some of the basic
            concepts of multilayer perceptrons (low-complexity neural networks)
            to begin predicting which census tracts were at risk of becoming
            gentrified.
            <br />
            <br />
            First, I ran into the problem of finding census tracts which were
            known to be gentrified for training purposes. The dataset I did find
            for this seemed to be far from perfect, but it was the only existing
            dataset I could find. After this, I was able to find a huge amount
            of information on census tracts, and I was ready to begin. I plotted
            the distribution of key variables within the gentrified data versus
            the distribution of those same variables within the non-gentrified
            tracts, and could see clearly some variables which were similarly
            distributed in both cases, and would act as noise to the model if
            kept. After formatting the dataset and removing this noise, I was
            ready to use my Keras knowledge to use an appropriate model to
            interpret the data.
            <br />
            <br />I ran the model on this data and found that my model had a
            fairly standard accuracy of around 80%. At this point, I was
            somewhat impatient and didn't want to interpret the results, so I
            left the project there.
          </p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>What I learned:</b>
            <br />
            <li>Neural Networks sound cool, but are not for me yet</li>
            <li>I needed something more practical and clear</li>
            <li>Python makes sense as a first language</li>
          </p>
        </div>
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-header text-2xl md:text-4xl lg:text-5xl text-center font-bold ${colors.text}`}
          >
            Minecraft Modding
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            At this point, I had switched my major to Mathematics and Computer
            Sciences, but it had been a long time since I had thought about any
            data structures or programmed in Java. To get back into the groove
            of programming, I downloaded the Minecraft Developer Kit (MDK) and
            got to work! Very quickly I realized that the sheer amount of
            information that existed within the MDK made modding Minecraft a
            daunting task. After many youtube videos and a Udemy course, I was
            prepared to interact with the developer kit. <br />
            <br />
            After 3-D modelling some block models, I put together a few
            additions to the base game. This included the{" "}
            <b>Comically Large Spoon</b> which was incredibly damaging to
            enemies, but also launched the user into the opposite direction of
            the strike. I also added <b>Weapon Mounds</b> which generated rarely
            containing the Comically Large Spoon, and could hold any user's
            weapon, and display the weapon model within the mound. I also added
            a block which was a model of the UCSD library!
          </p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>What I learned:</b>
            <br />
            <li>Coding with a visual product is very rewarding</li>
            <li>I had found a problem I was able to be obsessed with</li>
          </p>
          <div className="min-w-full items-evenly justify-center flex-wrap flex flex-row">
            <div className="relative w-40% pt-40% m-2">
              <div className="absolute top-0 left-0 w-100% h-100%">
                <Image
                  alt=""
                  src={`/ComicallyLargeSpoon.png`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/B1HgAGjgKUw8C4jQAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
            <div className="relative w-40% pt-40% m-2">
              <div className="absolute top-0 left-0 w-100% h-100%">
                <Image
                  alt=""
                  src={`/ComicallyLargeSpoonMounds.png`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/B1HgAGjgKUw8C4jQAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-header text-2xl md:text-4xl lg:text-5xl text-center font-bold ${colors.text}`}
          >
            UCSD Classes
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            My UCSD Classes have been fantastic. I had the most fun during my
            data structures and algorithms classes, and understanding the logic
            behind these data structures is so fun! These classes have thrown a
            huge amount of technical knowledge at me, so I will try to summarize
            all of it!
          </p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>What I learned:</b>
            <br />
            <li>Ability to intuitively think of runtime optimization</li>
            <li>Comfortability using the linux terminal and tools</li>
            <li>Memory management with C, C++, and ARM assembly language</li>
            <li>Creating makefiles and scripts</li>
            <li>Knowledge of data structures and algorithms</li>
            <li>Exposure to many coding languages (Java, C++, C, Scripting)</li>
          </p>
        </div>
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-header text-2xl md:text-4xl lg:text-5xl text-center font-bold ${colors.text}`}
          >
            Hashmap Visualizer
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            Looking back at my Minecraft Modding experience, I wanted to
            recreate that feeling of a product being developed by building
            something visual, but still related to the content I was learning. I
            decided to do so by building a tool to visualize a hashmap which
            used linear probing to resolve hash collisions. I first watched some
            videos on React, deciding that it seemed most friendly for new
            people, and had a wide community of users, so I cloned a github
            repository for a visualization of a Depth First Search algorithm,
            then tried to understand what was happening. <br />
            <br />
            Eventually, I managed to bandaid together a visualization of the
            hashmap. Because JavaScript handles a lot of backend for the user,
            it was difficult to simlate a hashmap using JavaScript arrays, but I
            managed! Then, I added an operations tracer which would show what
            operations the hashmap had undergone during each step.
            <br />
            <br />
            Being able to see the outcome of my work was incredibly rewarding,
            and even more, HTML and CSS opened up an entirely new world for me,
            and I found that these languages were captivating and opened up so
            many possibilities.
          </p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>What I learned:</b>
            <br />
            <li>I love React</li>
            <li>HTML and CSS is so fun</li>
            <li>I am terrible at picking color themes</li>
            <li>Web Development seems pretty fun</li>
          </p>
        </div>
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-header text-2xl md:text-4xl lg:text-5xl text-center font-bold ${colors.text}`}
          >
            Wordpress and PHP
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            After working with React, I decided to build a website for myself. I
            wanted my own custom domain and everything, so I bought a wordpress
            website and a server and began building my website. I very quickly
            realized that none of the flexibility afforded to me by React and
            NextJS existed in Wordpress, which was very frustrating.
            <br />
            <br />I wanted to embed my Hashmap visualizer within my Wordpress
            website, but to do so, I needed to build a widget in PHP. I began to
            study PHP and very quickly realized that PHP was not for me yet. I
            feel that now, with a stronger foundation in web development, I
            could go back, but I have no desire to just yet.
          </p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>What I learned:</b>
            <br />
            <li>Website builders are lame</li>
            <li>PHP is very scary</li>
            <li>I appreciated React 10x more</li>
          </p>
        </div>
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-header text-2xl md:text-4xl lg:text-5xl text-center font-bold ${colors.text}`}
          >
            React Developer with AMF Media
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          ></p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>What I learned:</b>
            <br />
            <li>Coding with a visual product is very rewarding</li>
            <li>I had found a problem I was able to be obsessed with</li>
          </p>
        </div>
        <div
          className={`mt-10 ${colors.cardBg} rounded-xl min-w-full flex flex-col p-5 items-center justify-center relative ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1
            className={`font-header text-2xl md:text-4xl lg:text-5xl text-center font-bold ${colors.text}`}
          >
            Other Web Duties
          </h1>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          ></p>
          <p
            className={`font-body lg:text-xl md:text-lg text-md mb-5 self-start ${colors.text}`}
          >
            <b>What I learned:</b>
            <br />
            <li>Coding with a visual product is very rewarding</li>
            <li>I had found a problem I was able to be obsessed with</li>
          </p>
        </div>
      </div>
    </div>
  );
}
