import 'styles/init.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyle from 'styles/GlobalStyle';
import Login from 'pages/Login';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>해당 페이지는 없는 페이지입니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
