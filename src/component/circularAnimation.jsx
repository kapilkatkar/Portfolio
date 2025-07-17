import { useEffect, useState, useRef } from "react";

const CircularAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 }); // offscreen start
  const boxRef = useRef(null);

  const rows = 8;
  const cols = 16;
  const circles = [];
  const baseSize = 20;
  const gap = 8;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      console.log("mousePosition", mousePosition);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  //x,y co ordinates of circle
  const getCirclePosition = (index) => {
    if (!boxRef.current) return { x: 0, y: 0 };
    const rect = boxRef.current.getBoundingClientRect(); // returns an object that describes the size and position of an element relative to the viewport

    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = rect.left + gap + col * (baseSize + gap) + baseSize / 2;
    const y = rect.top + gap + row * (baseSize + gap) + baseSize / 2;
    return { x, y };
  };

  const maxDistance = 150;
  const minScale = 0.2;
  const maxScale = 2;

  for (let i = 0; i < rows * cols; i++) {
    const { x, y } = getCirclePosition(i);
    const dx = mousePosition.x - x;
    const dy = mousePosition.y - y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let scale = maxScale - (distance / maxDistance) * (maxScale - minScale); //Distance badhne par circle ka size min hoga
    scale = Math.min(Math.max(scale, minScale), maxScale);
    circles.push(
      <div
        key={i}
        style={{
          width: `${baseSize}px`,
          height: `${baseSize}px`,
          border: "1px solid black",
          borderRadius: "50%",
          background: "black",
          margin: `${gap / 2}px`,
          transform: `scale(${scale})`,
          transformOrigin: "center",
          transition: "transform 0.1s ease-out",
        }}
      />
    );
  }
  return (
    <div
      ref={boxRef}
      style={{
        width: "500px",
        border: "1px solid black",
        margin: "20px auto",
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${baseSize + gap}px)`,
        justifyContent: "center",
        alignContent: "center",
        padding: `${gap / 2}px`,
        boxSizing: "content-box",
        backgroundColor: "#f5f5f5",
      }}
    >
      {circles}
    </div>
  );
};
export default CircularAnimation;
/**
 * 1.create a box, and add circles inside the box, Layout the Circles in a Grid
 * 2.capture the mouse’s position globally
 * 3.get Distance from Mouse to Each Circle
 * 4.Inside the loop, calculate the distance from each circle to the mouse and scale it.
 *
 *
 */
