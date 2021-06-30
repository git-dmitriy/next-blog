import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import cls from './post-content.module.css';

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={cls.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
