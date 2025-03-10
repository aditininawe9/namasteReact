const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "abc" },
  "Hello World Aditi"
);

const parent = React.createElement(
  "div",
  {},
  React.createElement("div", {}, [
    React.createElement(
        "h1",
        {}, 'I am h1 tag'),
        React.createElement(
            "h1",
            {}, 'I am h2 tag'),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
