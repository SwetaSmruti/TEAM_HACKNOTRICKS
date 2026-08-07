import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { AppLayout } from "@/layouts/AppLayout";
import { Landing } from "@/pages/Landing";
import { Dashboard } from "@/pages/Dashboard";
import { ChallengeDay } from "@/pages/ChallengeDay";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <AppLayout showNav={false}>
              <Landing />
            </AppLayout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <AppLayout showNav>
              <Dashboard />
            </AppLayout>
          }
        />

        <Route
          path="/day/:day"
          element={
            <AppLayout showNav>
              <ChallengeDay />
            </AppLayout>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <AppLayout showNav>
              <Dashboard />
            </AppLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}