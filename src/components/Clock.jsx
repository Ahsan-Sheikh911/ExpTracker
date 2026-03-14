// import { useState, useEffect } from "react";

// function Clock({ color }) {
//   const [time, setTime] = useState(new Date().toLocaleTimeString()); // ✅ good initial value

//   useEffect(() => {
//     const timer = setInterval(() => {
//       // ✅ save interval in variable
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(timer); // ✅ cleanup on unmount
//   }, []);

//   return (
//     <div>
//       <h1
//         style={{
//           color: color,
//           backgroundColor: "black",
//           width: "200px",
//           padding: "5px",
//           borderRadius: "5px",
//         }}
//       >
//         {time}
//       </h1>
//     </div>
//   );
// }

// export default Clock;
