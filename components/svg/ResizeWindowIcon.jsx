const ResizeWindowIcon = ({ fill, stroke, width, ...props }) => {
  return (
    <svg
      id="svg2454"
      xmlSpace="preserve"
      viewBox="43 43 426 426"
      fill="none"
      stroke={stroke}
      width={width}
      {...props}
      strokeWidth="30px"
      strokeMiterlimit="10"
    >
      <g id="layer">
        <rect height="410" width="410" x="51" y="51" />
        <path d="M51,162h410H51z" />
      </g>
      <g id="layer_copy">
        <path d="M461,43H51c-4.418,0-8,3.582-8,8v410c0,4.418,3.582,8,8,8h410c4.418,0,8-3.582,8-8V51C469,46.582,465.418,43,461,43z    M453,59v95H59V59H453z M59,453V170h394v283H59z" />
      </g>
    </svg>
  );
};

export default ResizeWindowIcon;
