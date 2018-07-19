import React from "react";
import CourseBrief from "./CourseBrief";
import WhyUs from "./WhyUs";
import TeachingStyle from "./TeachingStyle";
import Zoom from "react-reveal/Zoom";

import Apply from "./Apply";

function CourseWrapper({
  application,
  changeFirstName,
  changeLastName,
  changeReason,
  changeEmail,
  postApply
}) {
  return (
    <div>
      <Zoom>
        <CourseBrief />
        <WhyUs />
        <TeachingStyle />
        <Apply
          application={application}
          changeFirstName={changeFirstName}
          changeLastName={changeLastName}
          changeReason={changeReason}
          changeEmail={changeEmail}
          postApply={postApply}
        />
      </Zoom>
    </div>
  );
}

export default CourseWrapper;
