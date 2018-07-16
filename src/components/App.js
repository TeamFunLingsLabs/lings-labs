import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <SideBar />
        <Main />
        <footer className="app__footer" />
      </div>
    );
  }
}

export default App;
