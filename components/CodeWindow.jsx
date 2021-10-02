import { CloseIcon, MinusIcon, ResizeWindowIcon } from ".";
import { useState } from "react";

const CodeWindow = ({ children, className, ...props }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showClosePrompt, setShowClosePrompt] = useState(false);

  const handleMinimize = () => {
    setShowClosePrompt(false);
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
  };

  const handleClose = () => {
    if (!showClosePrompt) {
      setIsMinimized(false);
      setShowClosePrompt(true);
    } else {
      setIsClosed(true);
    }
  };

  return (
    <div
      className={`${className} relative bg-black border-t-24 border-l-4 rounded-xl border-r-4 border-b-4 border-lightPrimary flex flex-col ${
        isClosed ? `hidden` : ``
      } `}
    >
      <div className="absolute -top-22px right-0 z-20 flex flex-row w-20 h-5">
        <MinusIcon
          width="15px"
          className="mr-3 cursor-pointer"
          fill="black"
          onClick={() => {
            handleMinimize();
          }}
        />
        <ResizeWindowIcon
          width="15px"
          stroke="black"
          className="mr-3 cursor-pointer"
          onClick={() => {
            handleMaximize();
          }}
        />
        <CloseIcon
          width="15px"
          fill="#d3342c"
          className="cursor-pointer"
          onClick={() => {
            handleClose();
          }}
        />
      </div>
      <div
        className={`${
          showClosePrompt ? `flex` : `hidden`
        } absolute top-0 items-center justify-center left-0 z-10 w-full h-full backdrop-filter backdrop-blur`}
      >
        <div className="p-3 bg-lightPrimary rounded-lg mx-5% md:mx-15% lg:mx-25% flex flex-col items-center justify-center">
          <p className="font-code text-md text-black">
            Are you sure? This action can not be reversed, unless you do
            something crazy like reload the page.
          </p>
          <div className="flex flex-wrap flex-row items-center justify-center mt-3 w-full">
            <div className="flex items-center justify-center">
              <button
                className="bg-black rounded-lg py-1 px-2 mr-20% text-lightPrimary border-4 border-lightPrimary hover:bg-lightPrimary hover:border-black hover:border-4 hover:text-black"
                onClick={() => {
                  setIsClosed(true);
                }}
              >
                <p className="font-code text-md whitespace-nowrap">
                  Close Program
                </p>
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-black rounded-lg py-1 px-2 mr-20% text-lightPrimary border-4 border-lightPrimary hover:bg-lightPrimary hover:border-black hover:border-4 hover:text-black"
                onClick={() => {
                  setShowClosePrompt(false);
                }}
              >
                <p className="font-code text-md whitespace-nowrap">
                  Don't Close
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isMinimized ? "hidden" : ""} ${
          showClosePrompt ? "filter blur-md" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CodeWindow;
