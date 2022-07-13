import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app'

ReactDOM.render(<App />,
    document.getElementById('root'));


//-----------------------------------------
// const App = () => {
//     const isLoggedIn = true;
//     // const isLoggedIn = false;
//     const loginBox = <span>Log in please </span>
//     const welcomeBox = <span>Welcome Back </span>
//
//     const todoData = [
//         {label: 'Drink Coffee', important: false, id: 1},
//         {label: 'Create React-App', important: true, id: 2},
//         {label: 'Find job', important: false, id: 3}
//     ]
//     return (
//         <div>
//             { isLoggedIn ? null : loginBox }
//             {isLoggedIn ? welcomeBox : loginBox}
//             <span>{(new Date()).toString()}</span>
//             <AppHeader/>
//             <SearchPanel/>
//             <TodoList todos={ todoData }/>
//         </div>
//     )
// }
//
// ReactDOM.render(<App/>, document.getElementById('root'));

// //*************************Lesson 1*********************************
// const TodoList = () => {
//     return (
//         <ul>
//             <li>Learn React</li>
//             <li>Build Awesome App</li>
//         </ul>
//     );
// };
//
// const AppHeader = () => {
//     return (
//         <h1>Hello</h1>
//     )
// }
//
// const SearchPanel = () => {
//     return <input placeholder='search'/>
//
// }
//
// const App = () => {
//     return (
//         <div>
//             <AppHeader/>
//             <SearchPanel/>
//             <TodoList/>
//         </div>
//     )
// }
// //или  const el = React.createElement('h1', null, 'hello world!!')
//
// ReactDOM.render(<App/>, document.getElementById('root'));
////*****************************************************************


//--------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
