import Header from "components/Header/Header";

import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const SearchCountry = lazy(() => import("pages/SearchCountry"));
const Country = lazy(() => import("pages/Country"));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="/country/:countryId" element={<Country />} />
        </Route>
      </Routes>
    </div>
  );
};
