import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PrivateService from './components/PrivateService';


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path='/privateService' element={<PrivateService></PrivateService>}></Route>
            </Routes>
       
        </div>
    );
};

export default App;