import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

export const AppRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/casas" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
