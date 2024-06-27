import 'styles/@shared/global/init.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyle from 'styles/@shared/global/GlobalStyle';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Market from 'pages/Market';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddItem from 'pages/AddItem';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/items" element={<Market />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="*" element={<div>해당 페이지는 없는 페이지입니다.</div>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
