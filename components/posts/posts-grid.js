import PostItem from './post-item';
import cls from './posts-grid.module.css';

function PostsGrid({ posts }) {
  return (
    <ul className={cls.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
