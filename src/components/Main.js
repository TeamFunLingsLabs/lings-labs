import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactContainer from "../containers/ContactContainer";
import CourseApplyContainer from "../containers/CourseApplyContainer";
import CVContainer from "../containers/CVContainer";
import HomePageContainer from "../containers/HomePageContainer";
import ShopContainer from "../containers/ShopContainer";
import SyllabusContainer from "../containers/SyllabusContainer";
import AdminContainer from "../containers/AdminContainer";

function Main() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePageContainer />} />
      <Route path="/courseapply" render={() => <CourseApplyContainer />} />
      <Route path="/syllabus" render={() => <SyllabusContainer />} />
      <Route path="/cv" render={() => <CVContainer />} />
      <Route path="/contact" render={() => <ContactContainer />} />
      <Route path="/merch" render={() => <ShopContainer />} />
      <Route path="/merch" render={() => <AdminContainer />} />
    </Switch>
  );
}

export default Main;
