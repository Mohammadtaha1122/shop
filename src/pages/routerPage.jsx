import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "./home/home";
import Chat from "./chat/chat";
import Form from "./form/form";
import Cala from "./cala/cala";
import Shopping from "./shopping/shopping";
import ShoppingCart from "./shopping/shoppingCart";
import NextShoppingCart from "./shopping/nextShoppingCart";
import MainLayout from "../layout/mainLayout";
import BothLayout from "../layout/bothLayout";
import CreateBoth from "./createBoth/createBoth";
import SearchCala from "./searchCala/searchCala";
import CalaDetail from "./searchCala/calaDetail";

function RouterPage() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/:id" element={<Cala />} />
          <Route path="/shopping" element={<Shopping />}>
            <Route index element={<ShoppingCart />} />
            <Route path="nextShoppingCart" element={<NextShoppingCart />} />
          </Route>
          <Route path="/search" element={<SearchCala />}/>
          <Route path="/cala/:id" element={<CalaDetail />} />
        </Route>
        <Route element={<BothLayout/>}>
          <Route path="/createBoth" element={<CreateBoth />}/>
        </Route>
      </Routes>
    </>
  );
}

export default RouterPage;
