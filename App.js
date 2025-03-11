import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => <h1>This is heading</h1>;

const HeadingComponent = () => {
  return (
    <div>
      <Heading />
      <h1>This is Heading Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
