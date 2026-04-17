import { useState } from "react";
import { Counterbtn } from "./pratice.jsx";

export const Counter = () => {
  let [count, countfun] = useState(10);
  const fun = () => {
    countfun(count + 1) ;
    console.log(count);
  };
  return (
    <>
      <Counterbtn click={fun} value={count} />
    </>
  );
};
