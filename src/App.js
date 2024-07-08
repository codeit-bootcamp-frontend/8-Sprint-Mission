import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemsPage from "./pages/Item/ItemsPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import Header from "./components/Layout/Header";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      {/* Global Navigation Bar */}
      <Header />

      <div className="withHeader">
        <Routes>
          {/* React Router v6부터는 path="/" 대신 간단하게 `index`라고 표기하면 돼요 */}
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="items" element={<ItemsPage />}>
            <Route index element={<MarketPage />} />
            <Route path=":productId" element={<ItemsPage />} />
          </Route>
          <Route path="community" element={<CommunityFeedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
