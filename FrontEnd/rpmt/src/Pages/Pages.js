import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";

//import pages
import SignIn from "./Auth/SignIn/SignIn";
import SignUp from "./Auth/SignUp/SignUp";
import Chat from "./Chat/Std-Chat/Chat";
import Profile from "./Profile/Profile";
import DashBoard from "./DashBoard/DashBoard";

function Pages(props) {
  return (
    <>
      <Routes>
        {/* <Route
          exact
          path="/"
          element={<Navigate replace to="/auth/sign-in" />}
        /> */}
        <Route
          eaxct
          path="/"
          element={<DashBoard mode={props.mode} handler={props.modeHandler} />}
        />
        <Route
          path="/auth/sign-in"
          exact
          element={<SignIn mode={props.mode} handler={props.modeHandler} />}
        />
        <Route
          path="/auth/sign-up"
          element={<SignUp mode={props.mode} handler={props.modeHandler} />}
        />
        <Route
          path="/chat"
          element={<Chat mode={props.mode} handler={props.modeHandler} />}
        />
        <Route
          path="/profile"
          element={<Profile mode={props.mode} handler={props.modeHandler} />}
        />
      </Routes>
    </>
  );
}

export default Pages;
