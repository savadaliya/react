// import { Fragment } from "react";
import NetflixSeries, {Footer, Header} from "./components/NetflixSeries"

export const App = () => {
  // return ([<NetflixSeries key="1" />, <NetflixSeries key="2" />, <NetflixSeries key="3" />, <NetflixSeries key="4" />, <NetflixSeries key="5" />]

  return (
    <>
      <Header />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer />
    </>
  );
};

// 1. Variables
// You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM-at-the respective location.

// const NetflixSeries = () => {
//   const name = "Queen of Tears";
//   const rating = "8.2";
//   const sumamry = "A gripping tale of love, loss, and resilience set against the backdrop of a war-torn nation.";
//   return (
//     <div>
//       <div>
//         <img src="neem.png" alt="neem img" width="40%" height="40%" />
//       </div>
//       <h1>Name: {name} </h1>
//       <h2>Rating: {rating} </h2>
//       <p>Sumamry: {sumamry} </p>
//     </div>
//   );
// };


// 2: Expressions
// JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.

// const NetflixSeries = () => {
//   const name = "Queen of Tears";
//   const rating = "8.2";
//   const sumamry = "A gripping tale of love, loss, and resilience set against the backdrop of a war-torn nation.";
//   return (
//     <div>
//       <div>
//         <img src="neem.png" alt="neem img" width="40%" height="40%" />
//       </div>
//       <h1>Name: {name} </h1>
//       <h2>Rating: {5 / 3.2} </h2>
//       <p>Sumamry: {sumamry} </p>
//     </div>
//   );
// };


//* 3. Function Calls
// Functions, especially those that return JSX, can be invoked directly within your JSX.

// const NetflixSeries = () => {
//   const name = "Queen of Tears";
//   const rating = "8.2";
//   const sumamry = "A gripping tale of love, loss, and resilience set against the backdrop of a war-torn nation.";

//   const returnGenre = () => {
//     const genre = "RemCom";
//     return genre;
//   };

//   return (
//     <div>
//       <div>
//         <img src="neem.png" alt="neem img" width="40%" height="40%" />
//       </div>
//       <h1>Name: {name} </h1>
//       <h2>Rating: {5 / 3.2} </h2>
//       <p>Sumamry: {sumamry} </p>
//       <p>Genre: {returnGenre()} </p>
//     </div>
//   );
// };


// const NetflixSeries = () => {
//   const name = "Queen of Tears";
//   const rating = "8.2";
//   const sumamry = "A gripping tale of love, loss, and resilience set against the backdrop of a war-torn nation.";
  
//   let age = 20;
  
//   // 3:
//   // let canWatch = "Not Available";
//   // if(age >= 18) canWatch = "Watch Now";

//   // 4:
//   const canWatch = () => {
//     if(age >= 18) return "Watch Now";
//     return "Not Available";
//   };

//   const returnGenre = () => {
//     const genre = "RemCom";
//     return genre;
//   };

//   // 1: 

//   // if (age < 18) {
//   //   return (
//   //     <div>
//   //       <div>
//   //         <img src="neem.png" alt="neem img" width="40%" height="40%" />
//   //       </div>
//   //       <h1>Name: {name} </h1>
//   //       <h2>Rating: {5 / 3.2} </h2>
//   //       <p>Sumamry: {sumamry} </p>
//   //       <p>Genre: {returnGenre()} </p>
//   //       <button>Not Available</button>
//   //     </div>
//   //   );
//   // }

//   // 2: But this violates DRY (Do not repeat yourself)

//   // return (
//   //   <div>
//   //     <div>
//   //       <img src="neem.png" alt="neem img" width="40%" height="40%" />
//   //     </div>
//   //     <h1>Name: {name} </h1>
//   //     <h2>Rating: {5 / 3.2} </h2>
//   //     <p>Sumamry: {sumamry} </p>
//   //     <p>Genre: {returnGenre()} </p>
//   //     <button>{age >= 18 ? "Watch Now" : "Now Available"} </button>
//   //   </div>
//   // );


//   // 3: Sometimes you might have very complex if conditions, for that there are some solutions

// // return (
// //     <div>
// //       <div>
// //         <img src="neem.png" alt="neem img" width="40%" height="40%" />
// //       </div>
// //       <h1>Name: {name} </h1>
// //       <h2>Rating: {5 / 3.2} </h2>
// //       <p>Sumamry: {sumamry} </p>
// //       <p>Genre: {returnGenre()} </p>
// //       {/* <button>{age >= 18 ? "Watch Now" : "Now Available"} </button> */}
// //       <button> {canWatch} </button>
// //     </div>
// //   );


// //4: solution can be better as it prevents cluttering of variables outside and encapsulates such logic inside a function.
// //One another benefit is also that, you can also pass some dynamic values as function parameter

//   return (
//     <div>
//       <div>
//         <img src="neem.png" alt="neem img" width="40%" height="40%" />
//       </div>
//       <h1>Name: {name} </h1>
//       <h2>Rating: {5 / 3.2} </h2>
//       <p>Sumamry: {sumamry} </p>
//       <p>Genre: {returnGenre()} </p>
//       {/* <button>{age >= 18 ? "Watch Now" : "Now Available"} </button> */}
//       {/* <button> {canWatch}  </button> */}
//       <button> {canWatch()} </button>
//     </div>
//   );
// };


export default App