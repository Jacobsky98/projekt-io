import React, { useState } from 'react';
import './InstructorPresencePage.scss';
import { CoursesList } from '../../../components/coursesList/CoursesList';
import { ClassesList } from '../../../components/ClassesList/ClassesList';
import { PresenceList } from '../../../components/presenceList/PresenceList';

export const InstructorPresencePage = () => {

  return (
    <div className="InstructorPresencePage">
      <div className="InstructorGradesPage__coursesList">
        <CoursesList />
      </div>
      <div className="InstructorPresencePage__classesList">
        <ClassesList />
      </div>
      <div className="InstructorPresencePage__presenceList">
        <PresenceList />
      </div>
    </div>
  );
};
