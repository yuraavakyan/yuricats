import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/mainarea/Main";
import store from "./redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import getImages from "./api/getImages";
import { baseImagesSearch } from "./api/apiAddresses";

function App() {
  useEffect(() => {
    getImages(`${baseImagesSearch}limit=12`);
  }, []);
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
