import "../static/global.css";
import { Provider } from "../store/context";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <Provider>{getLayout(<Component {...pageProps} />)}</Provider>;
}

export default MyApp;
