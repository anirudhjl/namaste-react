import React from "react";
import ReactDOM from "react-dom/client";
import { resData } from "./src/data/data";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import SearchBar from "./src/components/SearchBar";
import CardContainer from "./src/components/CardContainer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <div className="div-container">
        {resData.map((data) => <CardContainer resData={data} key={data.info.resId} />)}
      </div>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
