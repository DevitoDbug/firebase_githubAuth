import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

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
  const handleClick = async (e) => {
    e.preventDefault();

    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log({
      email: result.user.email,
      uid: result.user.uid,
      photoURL: result.user.photoURL,
      displayName: result.user.displayName,
    });
  };
  return (
    <form>
      <button onClick={handleClick}>Login with Github</button>
    </form>
  );
};

export default Login;
