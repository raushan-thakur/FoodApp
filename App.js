const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    className: "heading1",
  },
  "Namaste Everyone from React!"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
    className: "heading2",
  },
  "Namaste Everyone from React!"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    className: "heading1",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);