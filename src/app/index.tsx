import { Route, Routes } from 'react-router-dom';
import { HomePage, ServicesPage, EquipmentPage } from '../pages';
import { Navbar } from '../components';
import './style/main.scss';

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/services'} element={<ServicesPage />} />
                <Route path={'/equipment'} element={<EquipmentPage />} />
            </Routes>
        </>
    )
}