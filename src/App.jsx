import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
// import Signin from './pages/signin/Signin';
// import Signup from './pages/signup/Signup';
import Faq from './pages/faq/Faq';
import Privacy from './pages/privacy/Privacy';
import Items from './pages/items/Items';
import AddItems from './pages/addItems/AddItems';
import NavigationBar from './components/navigationBar/NavigationBar';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="faq" element={<Faq />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="items">
          <Route index element={<Items />} />
          <Route path="additems" element={<AddItems />} />
        </Route>
        <Route path="additems" element={<AddItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
