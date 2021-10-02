const GraphGoingUpIcon = ({ fill, stroke, width, fillAnimation, ...props }) => {
  return (
    <svg
      id="Layer_1"
      x="0px"
      y="0px"
      fill={fill}
      stroke={stroke}
      width={width}
      strokeWidth="2px"
      viewBox="41.88 118.94 430.74 232.24"
      xmlSpace="preserve"
      {...props}
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            className={fillAnimation}
            x="0"
            y="0"
            height="360"
            width="500"
          />
        </clipPath>
      </defs>
      <g>
        <polygon
          clipPath="url(#clip-path)"
          points="396.606,118.943 396.606,138.635 439,138.635 291.836,285.798 225.673,219.635 151.038,294.26 117.962,261.183     41.875,337.259 55.798,351.183 117.962,289.029 151.038,322.106 225.673,247.481 291.836,313.644 452.923,152.558     452.923,194.952 472.615,194.952 472.615,118.943"
        />
      </g>
    </svg>
  );
};

export default GraphGoingUpIcon;
