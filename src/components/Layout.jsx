import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Announcement />

      {children}

      <Newsletter />
      <Footer />
    </>
  );
}

export default Layout;
