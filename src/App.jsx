import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegistroUsuarioApp from "./components/RegistroUsuarioApp";
import LoginScreen from "./views/LoginScreen";
import RouterPrincipal from "./router/RouterPrincipal";
import ErrorScreen from "./views/ErrorScreen";
import ProtectedRouter from "./router/ProtectedRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegistroUsuarioApp />} />
        <Route
          path="/*"
          element={
            <ProtectedRouter>
              <RouterPrincipal />
            </ProtectedRouter>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
