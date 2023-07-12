import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./redux/users/usersOperations";
import { useSelector } from "react-redux";
import { useState } from "react";
import { changeFollowingStatus } from "./redux/followingStatus/followingStatusSlice";
import ConteinerCenter from "./components/conteiner/ConteinerCenter";
import Conteiner from "./components/conteiner/Conteiner";
import TweetCard from "./components/tweetCards/tweetCard";
import Button from "./components/button/button";
import PulseLoader from "react-spinners/PulseLoader";

function App() {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(3);

  const followingStatus = useSelector((state) => state.followingStatus);
  const isLoading = useSelector((state) => state.users.isLoading);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const updateFollowingStatus = (userId, isFollowing) => {
    dispatch(changeFollowingStatus({ userId, isFollowing }));
  };

  return (
    <Conteiner>
      <ConteinerCenter>
        {isLoading ? (
          <PulseLoader size={25} color="#36d7b7" />
        ) : (
          <div className="tweetCardsBox">
            {users.slice(0, visibleCount).map((user) => (
              <TweetCard
                key={user.id}
                user={user}
                isFollowing={followingStatus[user.id]}
                updateFollowingStatus={updateFollowingStatus}
              />
            ))}
          </div>
        )}

        <div>
          {visibleCount < users.length && (
            <Button
              text="Load More"
              onClick={() => setVisibleCount(visibleCount + 3)}
            />
          )}
        </div>
      </ConteinerCenter>
    </Conteiner>
  );
}

export default App;
