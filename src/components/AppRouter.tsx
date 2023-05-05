import DashboardPage from "@/pages/dashboard/DashboardPage";
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import JobsPage from "@/pages/jobs/JobsPage";
import ResourcesPage from "@/pages/resources/ResourcesPage";
import ManagementPage from "@/pages/jobs/ManagementPage";
import SparkPage from "@/pages/jobs/SparkPage";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<DashboardPage />} />
                </Route>
                <Route path="/" element={<MainLayout />}>
                    <Route path="dashboard" element={<DashboardPage />} />
                </Route>
                <Route path="/" element={<MainLayout />}>
                    <Route path="jobs" element={<><JobsPage /><Outlet /></>}>
                        <Route path="management" element={<ManagementPage />} />
                        <Route path="spark" element={<SparkPage />} />
                    </Route>
                </Route>
                <Route path="/" element={<MainLayout />}>
                    <Route path="resources" element={<ResourcesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;