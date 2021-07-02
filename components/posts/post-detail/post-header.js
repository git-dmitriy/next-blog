import Image from 'next/image';
import cls from './post-header.module.css';

function PostHeader(props) {
  const { title, image } = props;
  return (
    <header className={cls.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
