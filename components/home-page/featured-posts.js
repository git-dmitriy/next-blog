import PostsGrid from '../posts/posts-grid';
import cls from './featured-post.module.css';

function FeaturedPosts(props) {
  return (
    <section className={cls.latest}>
      <h2>Featured Posts</h2>

      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
