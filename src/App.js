import React, { Fragment } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, AllData, NavBar, CreateAccount, Login, Deposit, Withdraw, Transactions } from './Components';
import { UserContext, AuthStatus, Consumer } from './Context/context';
import './App.css';

function Spa() {

  return (
      <HashRouter>
          <UserContext.Provider value={{  users:[{name: 'Mathias', email: 'mk@intutec.io', password: 'secret', balance: 100}],
                                          account:[{name: '', email: '', balance: 0}],
                                          transactions:[],
                                        }} >
            <AuthStatus.Provider value={{LoginStatus: false}}>
            <NavBar />
            <Routes>
             <Fragment>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/login/" element={<Login />} />
                  <Route path="/withdraw" element={<Withdraw />} />
                  <Route path="/deposit" element={<Deposit />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/createaccount" element={<CreateAccount />} />
                  <Route path="/alldata" element={<AllData />} />
              </Fragment>
            </Routes>
            </AuthStatus.Provider>
          </UserContext.Provider>
      </HashRouter>
  );
}

export default Spa;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
