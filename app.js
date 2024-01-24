// const heading = React.createElement(
//     "h1",
//     {id: "heading", xyz: "abc"},
//     "Hello World from React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// Nested

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

console.log(parent);

root.render(parent);
