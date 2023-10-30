import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistroUsuarioApp from "./components/RegistroUsuarioApp";
import LoginScreen from "./views/LoginScreen";
import ErrorScreen from "./views/ErrorScreen";
import RouterPrimary from "./router/RouterPrimary";
import ProtectedRoutes from "./router/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RouterPrimary />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegistroUsuarioApp />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>

    // <div className="container">
    //   <div className="row vh-100 d-flex align-items-center">
    //     <div className="col-12 col-md-6 offset-md-3">
    //       {/* <RegistroUsuarioApp /> */}
    //       <LoginScreen />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
