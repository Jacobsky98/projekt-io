import React from 'react';
import { useSelector } from 'react-redux';
import './PageTemplate.scss';

const PageTemplate = ({ NavbarComponent = undefined, ...props }) => {
  const mapState = (state) => ({
    userData: state.auth.userData,
  });

  let { userData } = useSelector(mapState);

  return (
    <div className="page-template">
      <div className="page-template__info">
        <span>{`ZALOGOWANO JAKO: ${userData.name} ${userData.surname} (${userData.role})`}</span>
      </div>
      <div className="page-template__header">
        <h1>DZIENNIK ELEKTRONICZNY</h1>
        <div className="navigation-bar">
          {NavbarComponent && <NavbarComponent />}
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export { PageTemplate };
