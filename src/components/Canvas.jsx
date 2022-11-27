import React from "react";

const Canvas = ({ src, detections }) => {
  const ref = React.useRef(null);
  const image = new Image();
  image.src = src;

  image.onload = () => {
    if (!src) return;
    const ctx = ref.current.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.drawImage(image, 0, 0);
    if (!detections) return;
    ctx.strokeStyle = "limegreen";
    for (const det of detections) {
      ctx.strokeRect(det.x, det.y, det.width, det.height);
    }
  };

  if (!src) return;

  return (
    <React.Fragment>
      <canvas width={1000} height={1000} ref={ref}></canvas>
    </React.Fragment>
  );
};

export default Canvas;
