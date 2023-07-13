import "./App.css";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getUsers } from "./redux/users/usersOperations";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { changeFollowingStatus } from "./redux/followingStatus/followingStatusSlice";
import { Route, Routes } from "react-router-dom";
// import ConteinerCenter from "./components/conteiner/ConteinerCenter";
// import Conteiner from "./components/conteiner/Conteiner";
// import TweetCard from "./components/tweetCards/tweetCard";
// import Button from "./components/button/button";
// import PulseLoader from "react-spinners/PulseLoader";
import TweetCardsPage from "./components/page/tweetCardsPage";
import Layout from "./components/layout/Layout";
import HomePage from "./components/page/homePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets-cards" element={<TweetCardsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
