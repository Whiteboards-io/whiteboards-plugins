import React, { useState } from "react";
import { useAsync } from "react-async-hook";
import Button from "@atlaskit/button";
import _ from "underscore";
import styled from "styled-components";
import { UserData, getBoardUsers, getCurrentBoardUser } from "@whiteboards-io/plugins";

export default function RandomPersonSidebar() {
  const [random, setRandom] = useState<number | null>(null);

  return (
    <>
      <h1 style={{ margin: "0 40px" }}>Random person</h1>
      <Button onClick={() => setRandom(Math.random())}>Randomize!</Button>
      {random !== null && <Users key={random} />}
    </>
  );
}

function Users() {
  const currentUser = useAsync(() => getCurrentBoardUser(), []);
  const boardUsers = useAsync<UserData[]>(async () => {
    const users = _.shuffle(await getBoardUsers());
    return new Promise((resolve) => setTimeout(() => resolve(users), 1000));
  }, []);

  if (boardUsers.loading) {
    return <div>Randomizing!</div>;
  }

  return (
    <>
      {boardUsers.result?.map((user) => (
        <div>
          <PhotoContainer src={user.photoURL} />
          {user.displayName}
          {currentUser.result?.id === user?.id && ` (You)`}
        </div>
      ))}
    </>
  );
}

const PhotoContainer = styled.img`
  border-radius: 50%;
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;
