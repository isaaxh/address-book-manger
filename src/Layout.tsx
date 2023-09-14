import Separator from "./components/atoms/Separator";
import Content from "./components/organisms/Content";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

const Layout = () => {
  return (
    <div className="h-screen bg-primary flex flex-col">
      <Header />
      <Separator />
      <Content />
      <Separator />
      <Footer />
    </div>
  );
};

export default Layout;
