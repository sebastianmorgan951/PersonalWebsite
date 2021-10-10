import { useState } from "react";
import styles from "../styles/lever.module.css";

const ToggleSwitch = ({ width, height, className, ...props }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className={`relative cursor-pointer ${width} ${height} ${className}`}
      onClick={() => {
        setIsToggled(!isToggled);
      }}
      {...props}
    >
      <div className="absolute bg-gray-500 border-4 border-r-2 border-black left-0 top-0 w-15% h-100%" />
      <div className="absolute rounded-r-md bg-gray-400 bg-lightPrimary border-4 border-l-2 border-black left-15% top-0 w-30% h-100%" />
      <div className="absolute rounded-md bg-gray-700 border-4 border-black left-20% top-0 bottom-0 my-auto w-15% h-60% z-10" />
      <div
        className={`${
          isToggled
            ? `rotate-45 translate-y-60%`
            : `-rotate-45 -translate-y-60%`
        } ${
          styles.leverArm
        } transform transition-all origin-lever absolute left-20% mt-auto mb-auto top-0 bottom-0 w-80% h-10% bg-black rounded-xl z-10`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
