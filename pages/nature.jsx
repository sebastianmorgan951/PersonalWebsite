import { SimpleNav } from "../components/Nav";
import styles from "../styles/scroll.module.css";
import Image from "next/dist/client/image";
import SunIcon from "../components/svg/SunIcon";

export default function Nature() {
  const imageNameNums = [
    1059, 2028, 2034, 2032, 2091, 2042, 1963, 2092, 2508, 2643, 2909, 2910,
    2911, 2913, 2914, 2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922, 2923,
    2924, 2925,
  ];
  const imageAlts = [
    "a slanted layer of rocks next to a beach on a cloudy day",
    "a hiking trail on the side of a hill going through trees and grass on a misty day",
    "boulders next to a pine forest on a misty day",
    "a very green mountain enveloped by mist",
    "a freshwater lake between mountains at the cloud level with clouds in the background",
    "a hiking trail through a damp forest with a fallen log crossing a stream",
    "an ant hill with large ants crawling inside",
    "a lake between forested hills with clouds in the background",
    "a black tarantula, a large furry spider, crawling on a carpet",
    "a moth with orange wing tops and white and black striped wing bottoms",
    "a large, flat beetle with visible mandibles and curled antennae",
    "an insect with a thin, long body, long legs, a spiked thorax, wings, and a long, snout-like head",
    "an insect-like bug resembling a cricket, but has back legs with a joint that bends backwards",
    "a moth with yellow, black, and red wings",
    "a bright green and blue cicada, which looks like a beetle with huge, well-defined wings, sitting on my finger",
    "a bright green and blue cicada, which looks like a beetle with huge, well-defined wings, sitting on a wall",
    "a red and green baby grasshopper with very long legs and a thin body",
    "a moth with a furry black and brown body",
    "a huge wolf spider, about 6 inches long, standing on the ground",
    "a centipede with an armored brown and white back",
    "two colorful red, yellow, and black birds perched on a branch of a tree",
    "a bright green, slimy frog with suction-cup toes and huge eyes",
    "a small brown frog on a wall with large brown eyes",
    "myself and two friends standing in front of a large sheer rock face",
    "a large banana slug, that is a slimy slug about 3 inches long with bright yellow skin",
    "a chrome-colored metallic-looking moth",
  ];

  return (
    <div
      className={`flex flex-col items-center justify-start h-auto bg-lightPrimary min-w-full bg-lightPrimary pb-40 min-h-screen`}
    >
      <SimpleNav />
      <main className="min-w-full">
        <div className="min-w-full px-3% md:px-15% lg:px-20%">
          <section
            className={`${styles.natureMainCardBorder} z-10 bg-lightPrimary min-w-full flex flex-col mt-4vw p-10 items-center justify-center ${styles.cardShadow} ${styles.hoverBrightenCard}`}
          >
            <div className="flex flex-col items-center justify-center z-0">
              <SunIcon className="-mt-9vw" width="15vw" fill="#793566" />
            </div>
            <h1 className="font-header text-3xl md:text-5xl lg:text-6xl font-bold">
              Nature
            </h1>
            <p className="font-body lg:text-xl md:text-lg text-md mb-5">
              A huge part of my life and something I identify closely with is
              nature and natural spaces. I love bugs and plants and spending
              time outside, and I felt that I would be leaving a huge part of
              myself hidden if I didn't include this on my website. Here I just
              wanted to post a collection of fun photos of bugs and things I've
              been able to take pictures of over the past year or so!
            </p>
            <p className="font-body lg:text-2xl md:text-xl text-lg self-center">
              <b>WARNING!</b> Spiders and weird insects below!
            </p>
          </section>
        </div>
        <section className="min-w-full items-center justify-center flex flex-col lg:p-5% md:p-3% p-1%">
          <div className="min-w-full items-evenly justify-center flex-wrap flex flex-row">
            {imageNameNums.map((imgNum, ind) => {
              return (
                <div
                  key={imgNum}
                  className="relative lg:w-30% md:w-40% sm:w-60% lg:pt-25% md:pt-35% sm:pt-50% w-75% pt-60% m-2"
                >
                  <div className="absolute top-0 left-0 w-100% h-100%">
                    <Image
                      alt={imageAlts[ind]}
                      src={`/Nature_Small/IMG_${imgNum}.jpg`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                      placeholder="blur"
                      blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/B1HgAGjgKUw8C4jQAAAABJRU5ErkJggg=="
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
