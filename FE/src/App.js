import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import EventDetail from "./Pages/Event/EventDetail/EventDetail";
import Frame from "./Pages/Frame/Frame";
import Events from "./Pages/Event/Events";
import Dashboard from "./Pages/Event/Dashboard";
import Login from "./Pages/Authenticate/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Frame />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/events" element={<Frame />}>
        <Route index element={<Events />} />
        <Route path=":params" element={<Events />} />
      </Route>
    </Routes>
  );
}

export default App;
