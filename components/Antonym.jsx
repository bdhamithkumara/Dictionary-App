import React from "react";

const Antonyms = ({ mean }) => {
  return (
    <>
      {mean && mean.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return Def.antonyms.map((Syn) => {
              return (
                <>
                  <li className=" mx-4 my-2">
                    {Syn}
                  </li>
                </>
              );
            });
          });
        });
      })}
    </>
  );
};

export default Antonyms;