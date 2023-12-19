import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

//We want to sign in with github

//Info we need from result

// const user = {
//   name: "",
//   email: "",
//   uid: "",
//   photoURL: "",
//   displayName: "",
// };

const Login = () => {
  const userContext = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();

    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log({
      email: result.user.email,
      uid: result.user.uid,
      photoURL: result.user.photoURL,
      nickName: result.user.reloadUserInfo.providerUserInfo[0].screenName,
      displayName: result.user.displayName,
    });
  };

  //   console.log(userContext);
  return (
    <form>
      <button onClick={handleClick}>Login with Github</button>
    </form>
  );
};

export default Login;
