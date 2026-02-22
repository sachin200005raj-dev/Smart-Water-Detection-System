import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LeakageDetectionPage } from "./pages/LeakageDetectionPage";
import { WaterTankPage } from "./pages/WaterTankPage";
import { AlertsPage } from "./pages/AlertsPage";
import { SettingsPage } from "./pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/dashboard",
    Component: DashboardPage,
  },
  {
    path: "/leakage-detection",
    Component: LeakageDetectionPage,
  },
  {
    path: "/water-tank",
    Component: WaterTankPage,
  },
  {
    path: "/alerts",
    Component: AlertsPage,
  },
  {
    path: "/settings",
    Component: SettingsPage,
  },
]);
