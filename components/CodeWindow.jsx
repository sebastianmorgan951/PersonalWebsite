import { CloseIcon, MinusIcon, ResizeWindowIcon } from ".";
import { useState } from "react";

const CodeWindow = ({ children, className, ...props }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [showClosePrompt, setShowClosePrompt] = useState(false);
  var moveTick = false;

  const draggable = (e, id) => {
    e.preventDefault();

    const drag = document.getElementById(id);
    const boundingRect = drag.getBoundingClientRect();

    //One time changes to be made on the first drag
    if (!isMoved) {
      setIsMoved(true);
      const placeholder = document.getElementById("placeholderCodeWindow");
      placeholder.style.height = boundingRect.height + /**topMargin +*/ "px";
      placeholder.style.width = boundingRect.width + "px";
      drag.style.width = boundingRect.width + "px";
      drag.style.position = "absolute";
      drag.style.margin = "0 0 0 0";
    }

    let left = boundingRect.left;
    let top = boundingRect.top;
    let offsetX = e.clientX - left;
    let offsetY = e.clientY - top;
    console.log(offsetY);
    console.log(boundingRect);

    drag.style.zIndex = 1000;
    drag.style.cursor = "grabbing";
    drag.style.transition = "0s 0s all ease";

    moveAt(e.pageX, e.pageY);

    // moves the drag at (pageX, pageY) coordinates
    // taking initial offsets into account
    function moveAt(pageX, pageY) {
      if (!moveTick) {
        //Use RAF function to enqueue animations rather than force many small animations
        window.requestAnimationFrame(() => {
          drag.style.left = pageX - offsetX + "px";
          drag.style.top = pageY - offsetY + "px";
          moveTick = false;
        });
        moveTick = true;
      }
    }

    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
    }

    const drop = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseMove);
      drag.style.zIndex = 10;
      drag.style.transition = "all 0.18s ease-in-out";
      drag.style.cursor = "grab";
      return;
    };

    document.addEventListener("mouseup", drop);
    document.addEventListener("mousemove", onMouseMove);
  };

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
    <>
      <div
        id="customCodeWindow"
        className={`${className} mt-codeWindow py-5 pl-4% ml-2% pr-2% mr-4% md:pl-3% md:ml-9% md:pr-3% md:mr-12% lg:pl-5% lg:ml-15% lg:pr-5% lg:mr-20% items-end relative bg-black border-t-24 border-l-4 rounded-xl border-r-4 border-b-4 border-lightPrimary flex flex-col ${
          isClosed ? `hidden` : ``
        } `}
      >
        <div className="absolute w-full -top-22px right-2 z-20 flex flex-row h-5">
          <div
            className="transition-all flex-1 h-full flex items-center justify-center cursor-grab group"
            onMouseDown={(e) => {
              draggable(e, "customCodeWindow");
            }}
          />
          <div
            className="transition-all hover:bg-blue flex items-center justify-center px-2 cursor-pointer group"
            onClick={() => {
              handleMinimize();
            }}
          >
            <MinusIcon
              width="15px"
              fill="black"
              className="transition-all group-hover:fill-current text-white"
            />
          </div>
          <div
            className="transition-all hover:bg-blue flex items-center justify-center px-2 cursor-pointer group"
            onClick={() => {
              handleMaximize();
            }}
          >
            <ResizeWindowIcon
              width="15px"
              stroke="black"
              className="transition-all group-hover:stroke-current text-white"
            />
          </div>
          <div
            className="transition-all hover:bg-red hover:fill-current text-white flex items-center justify-center px-2 cursor-pointer group"
            onClick={() => {
              handleClose();
            }}
          >
            <CloseIcon
              width="15px"
              fill="#d3342c"
              className="transition-all group-hover:fill-current text-white"
            />
          </div>
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
      <div
        className={isClosed ? `hidden` : ""}
        id="placeholderCodeWindow"
      ></div>
    </>
  );
};

export default CodeWindow;
