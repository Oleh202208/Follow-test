import { TweetsItem } from 'components/TweetsItem/TweetsItem';
import { List } from './TweetsList.styled';

export const TweetsList = ({ tweets }) => {
  return (
    <List>
      {tweets.map(tweet => {
        return <TweetsItem key={tweet.id} tweet={tweet} />;
      })}
    </List>
  );
};
