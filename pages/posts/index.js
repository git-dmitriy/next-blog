import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with Nextjs',
    image: 'getting-started-with-nextjs.png',
    excertp:
      'NextJS is the React framework for production. It gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    date: '2021-06-30',
  },
  {
    slug: 'getting-started-with-nextjs-2',
    title: 'Getting started with Nextjs',
    image: 'getting-started-with-nextjs.png',
    excertp:
      'NextJS is the React framework for production. It gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    date: '2021-06-30',
  },
  {
    slug: 'getting-started-with-nextjs-3',
    title: 'Getting started with Nextjs',
    image: 'getting-started-with-nextjs.png',
    excertp:
      'NextJS is the React framework for production. It gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    date: '2021-06-30',
  },
  {
    slug: 'getting-started-with-nextjs-4',
    title: 'Getting started with Nextjs',
    image: 'getting-started-with-nextjs.png',
    excertp:
      'NextJS is the React framework for production. It gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
    date: '2021-06-30',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
