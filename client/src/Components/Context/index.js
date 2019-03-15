import React, { Component } from 'react';

const UserContext = React.createContext();
const CourseContext = React.createContext();

export const Provider = UserContext.Provider;
export const Consumer = UserContext.Consumer;

// export class Provider extends Component {
//   state ={
//     courses:[]
//   }
// }
