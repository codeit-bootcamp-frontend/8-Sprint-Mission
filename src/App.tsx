import 'styles/@shared/global/init.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyle from 'styles/@shared/global/GlobalStyle';
import Login from 'pages/Login';
import Signup from 'pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<div>해당 페이지는 없는 페이지입니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
