import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import { ModalProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ModalProvider>
        <GlobalStyles />
        <Navbar />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}

export default MyApp;
