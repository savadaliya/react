export const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = "8.2";
  const sumamry = "A gripping tale of love, loss, and resilience set against the backdrop of a war-torn nation.";
  
  let age = 20;
  
  // 3:
  // let canWatch = "Not Available";
  // if(age >= 18) canWatch = "Watch Now";

  // 4:
  const canWatch = () => {
    if(age >= 18) return "Watch Now";
    return "Not Available";
  };

  const returnGenre = () => {
    const genre = "RemCom";
    return genre;
  };

  // 1: 

  // if (age < 18) {
  //   return (
  //     <div>
  //       <div>
  //         <img src="neem.png" alt="neem img" width="40%" height="40%" />
  //       </div>
  //       <h1>Name: {name} </h1>
  //       <h2>Rating: {5 / 3.2} </h2>
  //       <p>Sumamry: {sumamry} </p>
  //       <p>Genre: {returnGenre()} </p>
  //       <button>Not Available</button>
  //     </div>
  //   );
  // }

  // 2: But this violates DRY (Do not repeat yourself)

  // return (
  //   <div>
  //     <div>
  //       <img src="neem.png" alt="neem img" width="40%" height="40%" />
  //     </div>
  //     <h1>Name: {name} </h1>
  //     <h2>Rating: {5 / 3.2} </h2>
  //     <p>Sumamry: {sumamry} </p>
  //     <p>Genre: {returnGenre()} </p>
  //     <button>{age >= 18 ? "Watch Now" : "Now Available"} </button>
  //   </div>
  // );


  // 3: Sometimes you might have very complex if conditions, for that there are some solutions

// return (
//     <div>
//       <div>
//         <img src="neem.png" alt="neem img" width="40%" height="40%" />
//       </div>
//       <h1>Name: {name} </h1>
//       <h2>Rating: {5 / 3.2} </h2>
//       <p>Sumamry: {sumamry} </p>
//       <p>Genre: {returnGenre()} </p>
//       {/* <button>{age >= 18 ? "Watch Now" : "Now Available"} </button> */}
//       <button> {canWatch} </button>
//     </div>
//   );


//4: solution can be better as it prevents cluttering of variables outside and encapsulates such logic inside a function.
//One another benefit is also that, you can also pass some dynamic values as function parameter

  return (
    <div>
      <div>
        <img src="neem.png" alt="neem img" width="40%" height="40%" />
      </div>
      <h1>Name: {name} </h1>
      <h2>Rating: {5 / 3.2} </h2>
      <p>Sumamry: {sumamry} </p>
      <p>Genre: {returnGenre()} </p>
      {/* <button>{age >= 18 ? "Watch Now" : "Now Available"} </button> */}
      {/* <button> {canWatch}  </button> */}
      <button> {canWatch()} </button>
    </div>
  );
};


export default NetflixSeries;


export const Header = () => {
    return <p>savadaliya</p>
}

export const Footer = () => {
    return <p>copyright @savadaliya</p>;
};