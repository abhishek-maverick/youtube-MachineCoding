import { Provider } from "react-redux";
import store from "./utils/store";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

/**
 *  Head
 *  Body
 *      Sidebar
 *      MenuItems
 * MainContainer
 *    ButtonsList
 *    VideoContainer
 *         VideoCard
 */

export default App;
