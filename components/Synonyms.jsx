import React from "react";

const Synonym = ({ mean }) => {
  return (
    <>
      {mean && mean.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return Def.synonyms.map((Syn) => {
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

export default Synonym;