import { useState } from "react";

const LazyImage = ({ src, className, placeHolderColor, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        className={`transition-all ${className} ${
          loaded ? `opacity-100` : `opacity-0`
        }`}
        onLoad={() => {
          setLoaded(true);
        }}
      />
      <div
        className={`w-full h-52 ${className} ${
          loaded ? `hidden` : `flex`
        } ${placeHolderColor}`}
      />
    </>
  );
};

export default LazyImage;
