import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Landing from './pages/Landing';
import Demo from './pages/Demo';
import Scenario1 from './pages/Scenario1';
import Scenario2 from './pages/Scenario2';
import Survey from './pages/Survey';
import './App.css';

function App() {
    return (
        <>
            <head>
                <Helmet>
                    <meta
                        name='viewport'
                        content='initial-scale=0.9, user-scalable=no'
                    />
                </Helmet>
            </head>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='demo' element={<Demo />} />
                    <Route path='scenario-1' element={<Scenario1 />} />
                    <Route path='scenario-2' element={<Scenario2 />} />
                    <Route path='survey' element={<Survey />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
