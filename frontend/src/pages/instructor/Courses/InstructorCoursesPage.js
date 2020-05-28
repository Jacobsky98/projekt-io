import React from 'react';
import './InstructorCoursesPage.scss';
import {CoursesList} from "./coursesList/CoursesList";

const InstructorCoursesPage = () => {
  return (
      <div className='page'>
        <CoursesList />
      </div>);
};

export { InstructorCoursesPage };
