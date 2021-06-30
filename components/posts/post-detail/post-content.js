import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import cls from './post-content.module.css';

const DUMMY_DATA = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting started with Nextjs',
  image: 'getting-started-with-nextjs.png',
  date: '2021-06-30',
  content: '# This is first post',
};

const imagePath = `/images/posts/${DUMMY_DATA.slug}/${DUMMY_DATA.image}`;

function PostContent(props) {
  return (
    <article className={cls.content}>
      <PostHeader title={DUMMY_DATA.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_DATA.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
