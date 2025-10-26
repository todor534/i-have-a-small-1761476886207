import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMsg("");
    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus('success');
        setMsg('Thank you! We will contact you soon.');
        form.reset();
      } else {
        setStatus('error');
        setMsg('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMsg('Something went wrong. Please try again.');
    }
  }

  return (
    <section>
      <h2 className="section-title">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {status === 'success' && <div className="form-success">{msg}</div>}
        {status === 'error' && <div className="form-error">{msg}</div>}
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-input" name="name" id="name" required disabled={status==='sending'} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-input" name="email" id="email" type="email" required disabled={status==='sending'} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea className="form-textarea" name="message" id="message" rows={5} required disabled={status==='sending'}></textarea>
        </div>
        <button className="form-btn" type="submit" disabled={status==='sending'}>
          {status==='sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
