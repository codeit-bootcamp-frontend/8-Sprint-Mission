import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) {
  throw new Error("Root element not found");
}

// ReactDOM.createRoot 사용
const root = ReactDOM.createRoot(rootElement);

// App 컴포넌트를 렌더링
root.render(<App />);
