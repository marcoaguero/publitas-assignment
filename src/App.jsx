import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 ">
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
