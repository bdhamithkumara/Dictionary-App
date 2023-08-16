import React from "react";
import Select from "./Select";
import Example from "./Example";
import Synonym from "./Synonyms";
import Antonym from "./Antonym";

const Defination = ({ all, main }) => {
    // console.log("definition page all  " + all);
    // console.log("definition page main " + main);
    
  return (
    <>
      <div className="container px-5">
        <div className="row ">
          <div className="col-12 text-center uppercase font-bold underline mb-4">
            {main.word}
          </div>
          <div className="col-12 text-start my-3 font-bold ">
            meaning & definitions :
          </div>
          <div>
            <ol>
              <Select mean={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 font-bold">
            examples :
          </div>
          <div>
            <ol>
              <Example mean={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 font-bold">
            synonyms :
          </div>
           <div>
            <ol>
              <Synonym mean={all} />
            </ol>
          </div> 
          <div className="col-12 text-start my-3 font-bold">
            antonyms :
          </div>
           <div>
            <ol>
              <Antonym mean={all} />
            </ol>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Defination;