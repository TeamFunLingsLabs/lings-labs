import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePageContainer from "../containers/HomePageContainer";
import CourseApplyContainer from "../containers/CourseApplyContainer";
import SyllabusContainer from "../containers/SyllabusContainer";
import AdminContainer from "../containers/AdminContainer";
import CVContainer from "../containers/CVContainer";
import Contact from "../components/Contact";
import MerchContainer from "../containers/MerchContainer";

function Main() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePageContainer />} />
      <Route path="/courseapply" render={() => <CourseApplyContainer />} />
      <Route path="/syllabus" render={() => <SyllabusContainer />} />
      <Route path="/cv" render={() => <CVContainer />} />

      <Route path="/admin" render={() => <AdminContainer />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/merch" render={() => <MerchContainer />} />
    </Switch>
  );
}

export default Main;
