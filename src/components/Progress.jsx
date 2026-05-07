import { WEEK, GOALS } from '../data';

export default function Progress() {
  return (
    <div className="page active">
      <div className="page-title">Progress</div>
      <div className="page-sub">Your weekly activity</div>
      <div className="section-label">This Week</div>
      <div className="week-grid">
        {WEEK.map(d => (
          <div className={`week-day ${d.done ? 'done' : ''}`} key={d.day}>
            <div className="day-name">{d.day}</div>
            <div className="day-num">{d.num}</div>
          </div>
        ))}
      </div>
      <div className="section-label">Goals</div>
      {GOALS.map(g => (
        <div className="prog-item" key={g.label}>
          <div className="prog-header"><span>{g.label}</span><span>{g.val}</span></div>
          <div className="prog-track"><div className="prog-fill" style={{ width: g.pct + '%' }} /></div>
        </div>
      ))}
    </div>
  );
}
