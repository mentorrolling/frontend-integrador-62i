import RegistroUsuarioApp from "./components/RegistroUsuarioApp";
import LoginScreen from "./views/LoginScreen";

function App() {
  return (
    <div className="container">
      <div className="row vh-100 d-flex align-items-center">
        <div className="col-12 col-md-6 offset-md-3">
          {/* <RegistroUsuarioApp /> */}
          <LoginScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
