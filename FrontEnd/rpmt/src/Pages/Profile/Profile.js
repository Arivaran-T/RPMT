import Header from "../../Components/Header";

function Profile(props) {
  return (
    <>
      <Header mode={props.mode} handler={props.handler} />
    </>
  );
}

export default Profile;
