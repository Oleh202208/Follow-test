import { TweetsItem } from 'components/TweetsItem/TweetsItem';

export const TweetsList = ({ users }) => {
  return (
    <ul>
      {users.map(user => {
        return <TweetsItem key={user.id} user={user} />;
      })}
    </ul>
  );
};
