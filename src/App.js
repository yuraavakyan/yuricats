import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/mainarea/Main";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
