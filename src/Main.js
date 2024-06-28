import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./components/App";
import Items from './pages/Items';
import AddItems from './pages/AddItem';
import NotFound from './pages/NotFound';

function Main() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index></Route>
                    <Route path='items' element={<Items />}></Route>
                    <Route path='additem' element={<AddItems />}></Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default Main;