import { Button } from 'components/Button/Button';

export const TweetsItem = ({ user }) => {
  return (
    <>
      <li>
        <img src={user.avatar} alt="avatar" />
        <p>{user.tweets} tweets</p>
        <p>{user.followers} followers</p>
        <Button text="Follow" />
      </li>
    </>
  );
};
