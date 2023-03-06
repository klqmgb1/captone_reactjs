import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from "react"
// import HomeTemplate from './pages/HomeTemplate';
// import HomePage from './pages/HomeTemplate/HomePage';
// import AboutPage from './pages/HomeTemplate/AboutPage';
// import ListMoviePage from './pages/HomeTemplate/ListMoviePage';

// import AdminTemplate from './pages/AdminTemplate';
// import AddMoviePage from './pages/AdminTemplate/AddMoviePage';
// import AddUserPage from './pages/AdminTemplate/AddUserPage';
// import DashboardPage from './pages/AdminTemplate/DashboardPage';
import './App.css';

import renderRoutes from './routes';

function App() {
  
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    {renderRoutes()}
                    {/* HomeTemplate */}
                    {/* <Route path='' element={<HomeTemplate/>}>
                        <Route path='' element={<HomePage />} />
                        <Route path='about' element={<AboutPage />} />
                        <Route path='list-movie' element={<ListMoviePage />} />
                    </Route> */}
                    {/* AdminTemplate */}
                    {/* <Route path='admin' element={<AdminTemplate/>} >
                        <Route path='dashboard' element={<DashboardPage />} />
                        <Route path='add-user' element={<AddUserPage />} />
                        <Route path='add-movie' element={<AddMoviePage />} />
                    </Route> */}
                </Routes>
            </BrowserRouter>
        </Suspense>
    )

}

export default App;
