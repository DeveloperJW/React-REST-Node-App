import React from 'react';
import { Redirect } from 'react-router-dom';
import { Consumer } from './Context';

const UserSignOut = () => {
  return (
      <Consumer>
        {({actions})=>{
          actions.signOut();
          return(
              <div>
                <Redirect to='/'/>
              </div>
          );
        }}
      </Consumer>
  );
};

export default UserSignOut;