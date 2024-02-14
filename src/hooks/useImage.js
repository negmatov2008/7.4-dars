import { useEffect, useRef, useState } from "react";

export default () => {
  const videoref = useRef(null);
  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    if (!imgURL) {
      startVedio();
    }
  }, [imgURL]);

  const startVedio = () => {
    const video = videoref.current;
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
  };

  function takepicture() {
    if (imgURL) {
      setImgURL(null);
      startVedio();
    }
    const canvas = document.getElementById("canvas");
    const video = videoref.current;
    const context = canvas.getContext("2d");

    canvas.width = 340;
    canvas.height = 255;
    context.drawImage(video, 0, 0, 340, 255);

    const data = canvas.toDataURL("image/png");
    setImgURL(data);

    const strem = video.srcObject;
    const tracks = strem.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });

    video.srcObject = null;
  }

  const download = () => {
    const link = document.createElement("a");
    link.download = "myImg.png";
    link.href = imgURL;
    link.click();
  };

  return {
    videoref,
    imgURL,
    takepicture,
    download,
  };
};
