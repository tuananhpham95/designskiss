import { AppProvider } from "./Context/AppContext";
import Banner from "./components/Banner";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <AppProvider>
        <Header></Header>
        <Banner></Banner>
      </AppProvider>
    </div>
  );
};

export default App;
