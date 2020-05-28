import React from "react";
import List from "@material-ui/core/List";

const mockCoursesList = [];
for (let i = 0 ; i < 20 ; i++) {
  mockCoursesList.push({name: `course ${i}`});
}

const CoursesList = () => {


  return (
      <div>
        <List>
          {}
        </List>
      </div>
  );
};
