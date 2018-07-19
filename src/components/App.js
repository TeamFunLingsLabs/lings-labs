import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body__format">
          <NavBar />
          <Main />
        </div>
        <Footer className="app_footer" />
      </div>
    );
  }
}

export default App;
