import Head from 'next/head';
import ContactForm from '../components/contact-page/contact-form';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name='description' content='You can ask me a question' />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
