import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

function Router() {
    return (
        <Routes>
            <Route exact strict path="/" element={<Home />} />
        </Routes>
    )
}

export default Router
