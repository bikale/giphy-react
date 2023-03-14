import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("title");

  //componentDidupdate
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  //componentDidupdate
  useEffect(() => {
    console.log("Component re-render");
  });

  //componentDidupdate (re-render when deps are changes )
  useEffect(() => {
    console.log(`title: ${title} has changed`);
  }, [title]);

  // component  will unmount
  useEffect(() => {
    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <div className="UseEffectExample">
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <p>{title}</p>
      <button onClick={() => setTitle((prev) => prev + "!")}>+!</button>
    </div>
  );
};

export default UseEffectExample;
