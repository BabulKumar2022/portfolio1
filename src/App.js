import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import HomePage from './components/HomePage';
import PrivateService from './components/PrivateService';
import StoreManage from './components/StoreManage';
import ToolsManufacture from './components/ToolsManufacture';



const App = () => {
    return (
        <div className='App'>

            <Routes>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path='/privateService' element={<PrivateService></PrivateService>}></Route>
                <Route path='/stockManage' element={<StoreManage></StoreManage>}></Route>
                <Route path='/toolsManufacture' element={<ToolsManufacture></ToolsManufacture>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            </Routes>
       
        </div>
    );
};

export default App;