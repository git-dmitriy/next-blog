import Image from 'next/image';
import cls from './hero.module.css';

function Hero() {
  return (
    <section className={cls.hero}>
      <div className={cls.image}>
        <Image
          src='/images/site/photo.jpg'
          alt='An image showing Dmitriy'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Dmitriy</h1>
      <p>
        I'm a front-end developer and I'm inspired to create apps that help
        people be happy and successful.
      </p>
    </section>
  );
}

export default Hero;
