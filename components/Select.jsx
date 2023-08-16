import React from "react";

const Select = ({ mean }) => {
  return (
    <>
      {mean && mean.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return (
              <>
                <li className=" text-start px-3">
                  {Def.definition}
                </li>
                <hr />
              </>
            );
          });
        });
      })}
    </>
  );
};

export default Select;