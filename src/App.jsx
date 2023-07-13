import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import TweetCardsPage from "./components/page/tweetCardsPage";
import Layout from "./components/layout/Layout";
import HomePage from "./components/page/homePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/tweets-cards" element={<TweetCardsPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
      {/* <Navigate to="/tweets-cards" /> */}
    </>
  );
}

export default App;
