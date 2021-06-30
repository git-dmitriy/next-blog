import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../helpers/post-utils';

function PostPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((postFile) => postFile.replace(/\.md/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: true,
  };
}

export default PostPage;
