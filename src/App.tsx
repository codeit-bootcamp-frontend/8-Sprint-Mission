import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyle from 'styles/GlobalStyle';

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
