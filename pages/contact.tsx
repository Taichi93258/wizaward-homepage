import { useForm, ValidationError } from '@formspree/react';
import Layout from '../components/Layout';

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID!);

  if (state.succeeded) {
    return (
      <Layout title="お問い合わせ">
        <p>Thank you for your message!</p>
      </Layout>
    );
  }

  return (
    <Layout title="お問い合わせ">
      <form className="white-text" onSubmit={handleSubmit}>
        <label htmlFor="name">ご氏名</label>
        <br />
        <input id="name" type="text" name="name" required />
        <br />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email">メールアドレス</label>
        <br />
        <input id="email" type="email" name="email" required />
        <br />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">メッセージ</label>
        <br />
        <textarea id="message" name="message" rows={4} required />
        <br />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Layout>
  );
}
