// import { Button } from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { fetchFollow } from 'services/fetch';
import {
  Image,
  Item,
  TweetsText,
  Wrapper,
  FollowBtn,
} from './TweetsItem.styled';

export const TweetsItem = ({ tweet }) => {
  const [isActive, setIsActive] = useState(
    JSON.parse(localStorage.getItem(`${tweet.id}`)) || false
  );
  const [user, setUser] = useState(tweet);

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      setUser(prev => ({ ...prev, followers: prev.followers + 1 }));
      localStorage.setItem(`${user.id}`, JSON.stringify(!isActive));
    } else {
      setIsActive(false);
      localStorage.setItem(`${user.id}`, JSON.stringify(!isActive));
      setUser(prev => ({ ...prev, followers: prev.followers - 1 }));
    }
  };

  useEffect(() => {
    if (user === tweet) return;
    fetchFollow(user).catch(error => console.log(error));
  }, [tweet, user]);

  return (
    <Item>
      <Image src={tweet.avatar} alt="avatar" />
      <Wrapper>
        <TweetsText>
          {user.tweets.toLocaleString('en', { useGrouping: true })} tweets
        </TweetsText>
        <TweetsText>
          {user.followers.toLocaleString('en', { useGrouping: true })} followers
        </TweetsText>
        <FollowBtn onClick={handleClick} isActive={isActive}>
          {isActive ? 'Following' : 'Follow'}
        </FollowBtn>
      </Wrapper>
    </Item>
  );
};
