import { useRouter } from "next/dist/client/router";
import { useInView } from "react-intersection-observer";

const Nav = () => {
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: "0px",
  });

  return (
    <div
      className="min-w-full py-2 sticky -mt-2 -top-0.5 relative z-40"
      ref={ref}
    >
      <div
        className={`transition-all align-center px-5% min-w-full bg-gray-700 inline-flex flex-row justify-center text-lightPrimary`}
        id="nav"
      >
        <div
          className={`transition-all origin-bottom flex right-15% absolute self-center md:hidden border-solid border-gray-700 max-h-52 max-w-52 rounded-t-xl border-8 border-b-0 w-18vw h-18vw ${
            inView ? `scale-y-100` : `scale-y-0`
          }`}
          style={{
            backgroundImage: "url(/MyFace.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right",
            bottom: "85%",
          }}
        />
        <button
          className={`transition-all hover:bg-darkSecondary hover:translate-x-0.5 hover:translate-y-0.5 flex items-center justify-center mr-2`}
          onClick={() => {
            router.push("/");
          }}
        >
          <p className={`font-header text-xl md:text-2xl px-5 py-2`}>Home</p>
        </button>
        <button
          className={`transition-all hover:bg-darkSecondary hover:translate-x-0.5 hover:translate-y-0.5 flex items-center justify-center mr-2`}
          onClick={() => {
            router.push("/nature");
          }}
        >
          <a className={`font-header text-xl md:text-2xl px-5 py-2`}>Nature</a>
        </button>
        <button
          className={`transition-all hover:bg-darkSecondary hover:translate-x-0.5 hover:translate-y-0.5 flex items-center justify-center`}
          onClick={() => {
            router.push("/coding");
          }}
        >
          <a className={`font-header text-xl md:text-2xl px-5 py-2`}>Coding</a>
        </button>
        <div
          className={`hidden md:flex relative mx-5 ${
            inView ? "w-30vw md:w-18vw" : "w-9vw md:w-7vw lg:w-4vw"
          }`}
        >
          <div
            className={`transition-all hidden md:flex absolute border-solid border-gray-700 ${
              inView
                ? "w-30vw h-30vw md:w-18vw md:h-18vw border-8 rounded-xl -mt-50%"
                : "w-9vw h-9vw md:w-7vw md:h-7vw lg:w-4vw lg:h-4vw border-4 rounded-lg md:-mt-15% lg:-mt-8%"
            }`}
            style={{
              backgroundImage: "url(/MyFace.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

export const SimpleNav = () => {
  const router = useRouter();
  return (
    <div className="min-w-full py-2 sticky -mt-2 -top-0.5 relative z-40 mb-20">
      <div
        className={`transition-all align-center px-5% min-w-full bg-black inline-flex flex-row justify-center text-lightPrimary`}
        id="nav"
      >
        <button
          className={`transition-all hover:bg-darkSecondary hover:translate-x-0.5 hover:translate-y-0.5 flex items-center justify-center mr-2`}
          onClick={() => {
            router.push("/");
          }}
        >
          <p className={`font-header text-xl md:text-2xl px-5 py-2`}>Home</p>
        </button>
        <button
          className={`transition-all hover:bg-darkSecondary hover:translate-x-0.5 hover:translate-y-0.5 flex items-center justify-center mr-2`}
          onClick={() => {
            router.push("/nature");
          }}
        >
          <a className={`font-header text-xl md:text-2xl px-5 py-2`}>Nature</a>
        </button>
        <button
          className={`transition-all hover:bg-darkSecondary hover:translate-x-0.5 hover:translate-y-0.5 flex items-center justify-center`}
          onClick={() => {
            router.push("/coding");
          }}
        >
          <a className={`font-header text-xl md:text-2xl px-5 py-2`}>Coding</a>
        </button>
      </div>
    </div>
  );
};
