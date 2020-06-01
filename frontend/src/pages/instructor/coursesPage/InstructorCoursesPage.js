import React from 'react';
import './InstructorCoursesPage.scss';
import { CoursesList } from '../../../components/coursesList/CoursesList';
import { InstructorCoursesActionPanel } from './actionPanel/InstructorCoursesActionPanel';

const InstructorCoursesPage = () => {
  return (
    <div className="instructor-courses-page">
      <CoursesList />
      <InstructorCoursesActionPanel />
    </div>
  );
};

export { InstructorCoursesPage };
