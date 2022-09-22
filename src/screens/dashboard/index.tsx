import React from "react";
import { Outlet, Link } from "react-router-dom";
import DashboardLayout from "../../template/dashboardLayout";
import Sidebar from "../../organisms/sidebar";
import Header from "../../molecules/header";

export default function Dashboard() {
  return (
    <DashboardLayout
      sidebar={<Sidebar />}
      header={<Header />}
      outlet={<Outlet />}
    />
  );
}
