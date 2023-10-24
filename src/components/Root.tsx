import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "./ui/toaster";

const Root = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="container py-10">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Root;
