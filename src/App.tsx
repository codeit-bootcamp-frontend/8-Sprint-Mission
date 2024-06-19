import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyle from 'styles/GlobalStyle';
import 'styles/init.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
