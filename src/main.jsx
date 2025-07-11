import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Team from "./pages/team/Team.jsx";
import Dashboard from "./pages/dashboard/Dashboards.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Invoices from "./pages/invoices/Invoices.jsx";
import Form from "./pages/form/Form.jsx";
import Calendar from "./pages/calendar/Calendar.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import BarChart from "./pages/bar/BarChart.jsx";
import Pie from "./pages/pie/Pie.jsx";
import LineChart from "./pages/line/LineChart.jsx";
import Geography from "./pages/geography/Geography.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
      <Route path="Invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="barChart" element={<BarChart />} />
      <Route path="piechart" element={<Pie />} />
      <Route path="linechart" element={<LineChart />} />
      <Route path="geographychart" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
