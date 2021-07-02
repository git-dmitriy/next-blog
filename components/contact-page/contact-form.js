import cls from './contact-form.module.css';

function ContactForm() {
  return (
    <section className={cls.contact}>
      <h1>How can I help you?</h1>
      <form className={cls.form}>
        <div className={cls.controls}>
          <div className={cls.control}>
            <label htmlFor='email'>Your email</label>
            <input type='email' id='email' required />
          </div>
          <div className={cls.control}>
            <label htmlFor='name'>Your name</label>
            <input type='text' id='name' required />
          </div>
        </div>
        <div className={cls.controls}>
          <label htmlFor='message'>Your message</label>
          <textarea id='message' rows='5' />
        </div>
        <div className={cls.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
