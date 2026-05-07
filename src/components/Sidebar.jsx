import { NAV_ITEMS } from '../data';

export default function Sidebar({ page, navigate, badgeVisible }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Fit-Sync</h2>
        <small>Training</small>
      </div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(n => (
          <div key={n.key} className={`nav-item ${page === n.key ? 'active' : ''}`} onClick={() => navigate(n.key)}>
            <i className={`ti ${n.icon}`} />
            {n.label}
            {n.key === 'notifs' && badgeVisible && <span className="nav-badge">3</span>}
          </div>
        ))}
      </nav>

    </aside>
  );
}
