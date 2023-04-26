import { useLocation } from 'react-router-dom';
import { BackLink, Container, LoadMoreBtn } from './TweetsPage.styled';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTweets } from 'services/fetch';
import { Loader } from 'components/Loader/Loader';
import { TweetsList } from 'components/TweetsList/TweetsList';

const TweetsPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTweets(page)
      .then(data => {
        if (!data) {
          return;
        }
        if (data.length < 3) {
          setIsMore(false);
          return;
        }

        setIsMore(true);
        if (page === 1) {
          setTweets([...data]);
        }
        if (page > 1) {
          setTweets(prev => [...prev, ...data]);
        }
      })
      .catch(error => error.message)
      .finally(setIsLoading(false));
  }, [page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Container>
        <BackLink as={Link} to={location.state?.from ?? '/'}>
          Back
        </BackLink>
        {isLoading && <Loader />}
        {tweets && <TweetsList tweets={tweets} />}
        {isMore && <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>}
      </Container>
    </>
  );
};

export default TweetsPage;
