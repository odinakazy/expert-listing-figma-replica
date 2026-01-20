// src/components/layout/DashboardLayout.tsx
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import TopHeader from "./TopHeader";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopHeader />
      <TopNav />

      <main className="p-6 max-w-7xl mx-auto">
        <Outlet /> {/* This renders Dashboard, Listings, Users, etc */}
      </main>
    </div>
  );
};
