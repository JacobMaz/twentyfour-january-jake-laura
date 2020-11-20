import React from "react";

const NasaResults=(props)=>{
    return(
        <div>
            <img src={props.results.url} alt="You Don't Exist" />
        </div>
    );
};
export default NasaResults;