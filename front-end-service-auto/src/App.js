import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminUsers from "./components/AdminUsers";
import ClientPage from "./components/ClientPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element= { <Login/>} />
          <Route path="/register" element= { <Register/>} />
          <Route path="/admin-users" element= { <AdminUsers/>} />
          <Route path="/home" element= { <ClientPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;