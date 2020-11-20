import { useState, useEffect } from "react";
import ZomatoResults from "./ZomatoResults";
const ZomatoApp = () => {
  const [ results, setResults ] = useState([]);
  useEffect(() => {
    fetch("https://developers.zomato.com/api/v2.1/geocode?lat=40.059920999999996&lon=-86.067714", {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "X-Zomato-API-Key": "af476f5334134baf209f88ff7290d061"
      }
  })
  .then(res => res.json())
  .then(data => setResults(console.log(data.nearby_restaurants)))
  // .then(data => console.log(data.nearby_restaurants))
  }, []);
  return (
    <div className="main">
       <div className="mainDiv">
         {/* <button onClick={(e) => handleSubmit(e)} on className=“zomatoBtn”>Click Here</button> */}
         <div>
        <ZomatoResults results={results} />
        </div>
       </div>
    </div>
    );
};
export default ZomatoApp;