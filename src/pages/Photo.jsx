import React from "react";
import useImage from "../hooks/useImage";

function Photo() {
  const { videoref, takepicture, imgURL, download } = useImage();

  return (
    <div className="max-w-[400px] flex justify-between mt-5 rounded mx-auto">
      <div className=" w-[340px]  rounded relative h-[255px]">
        {imgURL ? (
          <img src={imgURL} className="rounded" width={340} height={255} />
        ) : (
          <video className="rounded" ref={videoref}></video>
        )}
        <div className="flex gap-2 items-center absolute top-[78%] left-[40%]">
          <button
            onClick={takepicture}
            className=" p-2 rounded text-[18px] font-semibold text-[#fff] take"
          >
            {imgURL ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM9.64042 7.53044C10.3555 7.19033 11.1555 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 14.05 16.8588 15.4502 15.8273 16.4499L13.75 12.6H15.4986C15.4995 12.5668 15.5 12.5334 15.5 12.5C15.5 10.567 13.933 9 12 9C11.4912 9 11.0078 9.10856 10.5716 9.30378L9.64042 7.53044ZM14.3175 17.4894C13.6132 17.817 12.828 18 12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 10.9678 7.12654 9.58193 8.13738 8.58462L10.25 12.5H8.5C8.5 14.433 10.067 16 12 16C12.4923 16 12.9608 15.8984 13.3857 15.715L14.3175 17.4894Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M2 6.00087C2 5.44811 2.45531 5 2.9918 5H21.0082C21.556 5 22 5.44463 22 6.00087V19.9991C22 20.5519 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5554 2 19.9991V6.00087ZM4 7V19H20V7H4ZM14 16C15.6569 16 17 14.6569 17 13C17 11.3431 15.6569 10 14 10C12.3431 10 11 11.3431 11 13C11 14.6569 12.3431 16 14 16ZM14 18C11.2386 18 9 15.7614 9 13C9 10.2386 11.2386 8 14 8C16.7614 8 19 10.2386 19 13C19 15.7614 16.7614 18 14 18ZM4 2H10V4H4V2Z"></path>
              </svg>
            )}
          </button>
          {imgURL && (
            <button
              onClick={download}
              className="p-2 rounded text-[18px] font-semibold text-[#fff] take"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 5V19H20V7H11.5858L9.58579 5H4ZM13 13H16L12 17L8 13H11V9H13V13Z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default Photo;
