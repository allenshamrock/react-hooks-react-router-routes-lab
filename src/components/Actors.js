import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <>
      <h1>Actors Page</h1>
      <div>
        {actors.map((actor)=>{
          return(
            <div key={actor.name}>
              <p>{actor.name}</p>
              <ul>
                <li>{actor.movies}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Actors;
