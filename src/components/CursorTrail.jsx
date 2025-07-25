// // CursorTrail.js
// import React, { useEffect, useRef } from 'react';

// // CursorTrail component - renders a trail of small fading circles that follow the mouse cursor
// const CursorTrail = () => {
//   // Ref to hold references to each trail circle div
//   const trailRef = useRef([]);

//   useEffect(() => {
//     // Number of trail circles
//     const trailLength = 8;

//     // Array to keep track of the most recent mouse positions
//     const positions = new Array(trailLength).fill({ x: 0, y: 0 });

//     // Mouse move handler to update position and animate trail
//     const handleMouseMove = (e) => {
//       // Add new mouse position to end of positions array
//       positions.push({ x: e.clientX, y: e.clientY });

//       // Remove the oldest position to maintain fixed trail length
//       positions.shift();

//       // Update each trail circle's position
//       trailRef.current.forEach((circle, index) => {
//         const { x, y } = positions[index];
//         if (circle) {
//           // Offset x and y by 8px to center the circle on the cursor
//           circle.style.transform = `translate(${x - 8}px, ${y - 8}px)`;
//         }
//       });
//     };

//     // Add event listener on mount
//     window.addEventListener('mousemove', handleMouseMove);

//     // Cleanup listener on unmount
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <>
//       {/* Render the trail circles */}
//       {Array.from({ length: 8 }).map((_, i) => (
//         <div
//           key={i}
//           ref={(el) => (trailRef.current[i] = el)} // Store reference to each circle
//           style={{
//             position: 'fixed',               // So it stays in place relative to viewport
//             top: 0,
//             left: 0,
//             width: '16px',
//             height: '16px',
//             borderRadius: '50%',            // Makes it circular
//             backgroundColor: `rgba(0, 114, 255, ${0.15 + i * 0.1})`, // Increasing opacity
//             pointerEvents: 'none',          // Allows clicks to pass through
//             zIndex: 9999,                   // Ensures it's above all content
//             transition: 'transform 0.1s ease-out', // Smooth movement
//             mixBlendMode: 'screen',         // Lightens overlap for smoother trails
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default CursorTrail;
