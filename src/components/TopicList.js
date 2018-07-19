import React from "react";

function TopicList() {
  const topicListItems = [
    "AJAX",
    "Array Chaining",
    "Array Methods",
    "Arrow Functions",
    "APIs",
    "Block",
    "Callbacks",
    "Closures",
    "Command line tools",
    "Combine Reducers",
    "Connect()",
    "Constructor",
    "Context",
    "Debugging",
    "Destructuring Assignment",
    "DOM",
    "Events",
    "Express",
    "Fetch()",
    "Functional Components",
    "Github Commands",
    "Hoisting",
    "Lifecycle Methods",
    "Modules",
    "Node",
    "NPM Commands",
    "Number()",
    "Object",
    "Object Traversal",
    "Operators",
    "Prop Types",
    "Provider (Redux)",
    "Pure Functions",
    "Primatives",
    "React Intro",
    "React Data Flows",
    "React-Redux",
    "README",
    "Redux",
    "RESTful APIs",
    "Response Codes",
    "Root reducers",
    "Scope",
    "Super()",
    "Template Literals",
    "Testing React",
    "Ternary Operator",
    "Thunk Middleware",
    "Types",
    "Unit Testing"
  ];
  return (
    <div>
      <ul className="topic-list">
        <h5>What You'll Learn</h5>
        {topicListItems.map(item => {
          return <li className="topic-list--list-item">{item}</li>;
        })}
      </ul>
    </div>
  );
}
export default TopicList;
