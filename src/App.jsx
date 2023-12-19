import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </>
  );
}

export default App;
