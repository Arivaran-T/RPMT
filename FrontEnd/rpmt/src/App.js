import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

//import pages
import SignIn from "./Pages/Auth/SignIn";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/auth/sign-in" exact component={SignIn} />
      </Routes>
    </Router>
  );
}

export default App;
