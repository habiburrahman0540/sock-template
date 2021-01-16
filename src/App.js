import {Helmet} from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";
import AppRouter from "./router";

function App() {
  return (
    <div className="App">
   <Helmet>

   </Helmet>
   <Header/>
   <AppRouter/>
   <Footer/>
       
    </div>
  );
}

export default App;
