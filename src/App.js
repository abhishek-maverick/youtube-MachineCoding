import { Provider } from "react-redux";
import store from "./utils/store";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
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
