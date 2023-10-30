import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard/dashboard";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
