import { SimpleNav } from "../components/Nav";
import styles from "../styles/scroll.module.css";
import Image from "next/dist/client/image";
import SunIcon from "../components/svg/SunIcon";

export default function Nature() {
  const imageNameNums = [
    1059, 2028, 2034, 2032, 2091, 2042, 1963, 2092, 2508, 2549, 2643, 2909,
    2910, 2911, 2913, 2914, 2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922,
    2923, 2924, 2925,
  ];

  return (
    <div
      className={`flex flex-col items-center justify-start h-auto bg-lightPrimary min-w-full bg-lightPrimary pb-40 min-h-screen`}
    >
      <SimpleNav />
      <div className="min-w-full px-3% md:px-15% lg:px-20%">
        <div
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
            nature and natural spaces. I love bugs and plants and spending time
            outside, and I felt that I would be leaving a huge part of myself
            hidden if I didn't include this on my website. Here I just wanted to
            post a collection of fun photos of bugs and things I've been able to
            take pictures of over the past year or so!
          </p>
          <p className="font-body lg:text-2xl md:text-xl text-lg self-center">
            <b>WARNING!</b> Spiders and weird insects below!
          </p>
        </div>
      </div>
      <div className="min-w-full items-center justify-center flex flex-col lg:p-5% md:p-3% p-1%">
        <div className="min-w-full items-evenly justify-center flex-wrap flex flex-row">
          {imageNameNums.map((imgNum) => {
            return (
              <div
                key={imgNum}
                className="relative lg:w-30% md:w-40% sm:w-60% lg:pt-25% md:pt-35% sm:pt-50% w-75% pt-60% m-2"
              >
                <div className="absolute top-0 left-0 w-100% h-100%">
                  <Image
                    alt=""
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
      </div>
    </div>
  );
}
