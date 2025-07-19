import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/private-route";

import { Photos } from "./pages/photos";
import Login from "./pages/login";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Private wrapper */}
      <Route element={<PrivateRoute />}>
        <Route path="/photos" element={<Photos />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/photos" />} />
    </Routes>
  );
}
