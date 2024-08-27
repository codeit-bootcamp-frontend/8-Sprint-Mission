import { Outlet } from "react-router-dom";
import Header from "../ui/Header/Header";

export default function Root() {
  return (
    <>
      <Header />
      <main style={{ marginTop: "71px" }}>
        <Outlet />
      </main>
    </>
  );
}
