import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import { ModalProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}

export default MyApp;
