import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import Head from 'next/head';
import { getFeaturedPosts } from '../helpers/post-utils';

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Developer blog</title>
        <meta name='description' content='I post about web development.' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
