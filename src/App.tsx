import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./features/dashboard/pages/HomePage";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import ComingSoon from "./components/helper/ComingSoon";

function App() {
  return (
    <Routes>
      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* All dashboard pages share the same layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<HomePage />} />

        <Route path="/listings" element={<ComingSoon />} />
        <Route path="/users" element={<ComingSoon />} />
        <Route path="/request" element={<ComingSoon />} />
        <Route path="/applications" element={<ComingSoon />} />
        <Route path="/tasks" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}

export default App;
