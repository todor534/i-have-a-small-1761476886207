const projects = [
  {
    id: 1,
    title: 'Bakery Bliss',
    desc: 'A mouth-watering website for a local bakery including menu, gallery, and online order form.',
    image: '@@img_icon1@@',
    live: 'https://bakerybliss.example',
    code: null
  },
  {
    id: 2,
    title: 'Fit Personal Trainer',
    desc: 'A personal trainer portfolio site with scheduling and testimonials to convert more clients.',
    image: '@@img_icon2@@',
    live: 'https://fitpt.example',
    code: null
  },
  {
    id: 3,
    title: 'TechFix Repairs',
    desc: 'Landing page for a phone repair shop featuring pricing, contact, and reviews.',
    image: '@@img_icon3@@',
    live: 'https://techfix.example',
    code: null
  }
];

export default function Portfolio() {
  return (
    <section>
      <h2 className="section-title">Recent Work</h2>
      <div className="portfolio-list">
        {projects.map(proj => (
          <div className="project-card" key={proj.id}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-content">
              <div>
                <div className="project-title">{proj.title}</div>
                <div className="project-desc">{proj.desc}</div>
              </div>
              <div className="project-links">
                <a href={proj.live} className="project-link" target="_blank" rel="noopener">Live Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
