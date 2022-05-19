import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";

//import pages
import SignIn from "./Auth/SignIn/SignIn";
import SignUp from "./Auth/SignUp/SignUp";
import Chat from "./Chat/Std-Chat/Chat";
import Profile from "./Profile/Profile";
import DashBoard from "./DashBoard/DashBoard";
import Submission from "./Submission/Submission";
import Submissions from "./Std-Submissions/Submissions";
import SubmissionInfo from "./Std-Submissions/SubmissionInfo";
import Submit from "./Submission/Submit";
import Info from "./Submission/Info";
import Users from "./Users/Users";
import User from "./Users/User";
import NewSubmission from "./NewSubmission/NewSubmission";
import SubmissionTypes from "./Std-Submissions/SubmissionTypes";
import ResearchSup from "./Supervisor-Research/Reserch-sup";
import Group from "./Supervisor-Research/Group";
import Groups from "./Groups/Groups";
import GroupView from "./Groups/GroupView";
import ResetPassword from "./ResetPassword/ResetPassword";

//react
import { useSelector } from "react-redux";

function Pages(props) {
  //user data
  const { token, userID, role } = useSelector((State) => State.loging);

  return (
    <>
      {token ? (
        <>
          <Routes>
            <Route
              path="/"
              element={<DashBoard handler={props.modeHandler} />}
            />
            <Route
              path="/users"
              element={<Users handler={props.modeHandler} />}
            />

            <Route
              path="/user/:id"
              element={<User handler={props.modeHandler} />}
            />
            <Route
              path="/Groups/:id"
              element={<GroupView handler={props.modeHandler} />}
            />
            <Route
              path="/Groups"
              element={<Groups handler={props.modeHandler} />}
            />
            <Route
              path="/research/grp/id"
              element={<Group handler={props.modeHandler} />}
            />
            <Route
              path="/research/sup"
              element={<ResearchSup handler={props.modeHandler} />}
            />
            <Route
              path="/submission/new"
              element={<NewSubmission handler={props.modeHandler} />}
            />
            <Route
              path="/submission/:id"
              element={<Info handler={props.modeHandler} />}
            />
            <Route
              path="/submit/:id"
              element={<Submission handler={props.modeHandler} />}
            />
            <Route
              path="/submit/add/:id"
              element={<Submit handler={props.modeHandler} />}
            />

            <Route
              path="/chat"
              element={<Chat handler={props.modeHandler} />}
            />
            <Route
              path="/profile/:page"
              element={<Profile handler={props.modeHandler} />}
            />
            <Route
              exact
              path="/profile"
              element={<Navigate replace to="/profile/details" />}
            />
            <Route
              path="/Submissions"
              element={<SubmissionTypes handler={props.modeHandler} />}
            />
            <Route
              path="/Submissions/:id"
              element={<Submissions handler={props.modeHandler} />}
            />
            <Route
              path="/submissions/std/:id"
              element={<SubmissionInfo handler={props.modeHandler} />}
            />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="/auth/sign-in"
              exact
              element={<SignIn handler={props.modeHandler} />}
            />
            <Route
              path="/auth/sign-up"
              element={<SignUp handler={props.modeHandler} />}
            />
            <Route
              path="/password/reset"
              element={<ResetPassword handler={props.modeHandler} />}
            />
            <Route path="*" element={<Navigate replace to="/auth/sign-in" />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default Pages;
