import { EXPLORE_DATA } from '../exploreData';

export default function Explore() {
  return (
    <div className="page active">
      <div className="page-title">Explore</div>
      <div className="page-sub">Discover new training programs</div>
      
      {EXPLORE_DATA.sections.map((section) => (
        <div key={section.id} className="explore-section">
          <h3 className="section-title">{section.title}</h3>
          <div className="explore-row">
            {section.items.map((item) => (
              <div className="explore-card" key={item.id}>
                <div className="explore-image-wrapper">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="explore-image" />
                  ) : (
                    <div className="explore-image-placeholder"><i className="ti ti-barbell"></i></div>
                  )}
                </div>
                <div className="explore-info">
                  <h4>{item.title}</h4>
                  <div className="explore-meta">
                    <span className="rating"><i className="ti ti-star-filled"></i> {item.rating ? Number(item.rating).toFixed(1) : 'New'}</span>
                    <span className="downloads"><i className="ti ti-download"></i> {(item.download_count / 1000).toFixed(1)}k</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
