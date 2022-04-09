import { Provider } from "react-redux";
import AllRoutes from "./components/AllRoutes";
import store from "./components/page2/redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AllRoutes />
      </Provider>
    </div>
  );
}

export default App;
