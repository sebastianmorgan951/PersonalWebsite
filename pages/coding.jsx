import LazyImage from "../components/LazyImage";
import Nav, { SimpleNav } from "../components/Nav";
import styles from "../styles/scroll.module.css";

export default function Coding() {
  return (
    <div
      className={`flex flex-col items-center justify-start h-auto bg-white min-w-full bg-lightPrimary pb-40`}
    >
      <SimpleNav />
      <div className="min-w-full px-3% md:px-15% lg:px-20%">
        <div
          className={`bg-lightPrimary rounded-xl min-w-full flex flex-col p-5 items-center justify-center ${styles.cardShadow} ${styles.hoverBrightenCard}`}
        >
          <h1 className="font-header text-3xl md:text-5xl lg:text-6xl font-bold">
            Nature
          </h1>
          <p className="font-body lg:text-xl md:text-lg text-md">
            A huge part of my life and something I identify closely with is
            nature and natural spaces. I love bugs and plants and spending time
            outside, and I felt that I would be leaving a huge part of myself
            hidden if I didn't include this on my website. Here I just wanted to
            post a collection of fun photos of bugs and things I've been able to
            take pictures of over the past few years!
          </p>
          <LazyImage
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg"
            placeHolderColor="bg-secondary"
          />
        </div>
      </div>
    </div>
  );
}
