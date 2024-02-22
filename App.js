import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    className: "heading1",
  },
  "Namaste Everyone from React!"
);

const Title = () => <h1 className="heading1">Namaste Everyone From JSX</h1>;

//Functional Component

const HeaderComponent = () => (
  <div>
    {heading1}
    {Title()}
    <Title />
    
    {/* { 1 + 4 }
    { console.log(10)} */}

    <h1 className="heading1">Namste React from Functional Component</h1>
    <h2>This is Heading 2 inside Functional Component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
