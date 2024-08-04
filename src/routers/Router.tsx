import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from 'src/App'
import Layout from 'src/layouts/Layout'

function Router() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<></>} />
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  )
}

export default Router
