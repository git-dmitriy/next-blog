import PostsGrid from './posts-grid';
import cls from './all-posts.module.css';

function AllPosts(props) {
  return (
    <section className={cls.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
