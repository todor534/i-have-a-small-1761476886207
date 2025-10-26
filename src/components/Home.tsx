import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <div className="hero">
        <img src="@@img_hero@@" alt="Showcase of web projects" className="hero-img" />
        <div>
          <h1 className="hero-title">Modern Websites for Small Businesses</h1>
          <p className="hero-desc">We design and develop beautiful, high-converting websites to help your business stand out and win more customers online.</p>
          <Link to="/contact" className="cta-btn">Start Your Project</Link>
        </div>
      </div>
    </section>
  );
}
