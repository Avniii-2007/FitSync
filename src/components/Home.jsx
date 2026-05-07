export default function Home({ navigate }) {
  return (
    <div className="page active">
      <div className="page-title">Good morning, Alex</div>
      <div className="page-sub">Wednesday, May 7 2025</div>
      <div className="stats-grid">
        {[['12', 'Workouts'], ['4.5', 'This Week (hrs)'], ['3,420', 'Calories'], ['5', 'Day Streak']].map(([v, l]) => (
          <div className="card stat-card" key={l}><div className="stat-val">{v}</div><div className="stat-label">{l}</div></div>
        ))}
      </div>
      <div className="section-label">Today's Plan</div>
      <div className="plan-grid">
        {[
          { icon: 'ti-barbell', name: 'Upper Body Blast', desc: 'Chest, shoulders & arms', time: '45 min', cal: '320 cal' },
          { icon: 'ti-bolt', name: 'Cardio Intervals', desc: 'High-intensity intervals', time: '20 min', cal: '280 cal' },
          { icon: 'ti-yoga', name: 'Cool Down', desc: 'Stretch & recovery', time: '10 min', cal: '60 cal' },
        ].map(p => (
          <div 
            className="card plan-card" 
            key={p.name}
            onClick={() => p.name === 'Upper Body Blast' ? navigate('exercises') : null}
          >
            <span className="plan-icon"><i className={`ti ${p.icon}`} /></span>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="plan-meta">
              <span><i className="ti ti-clock" /> {p.time}</span>
              <span><i className="ti ti-flame" /> {p.cal}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-row">
        <button className="btn btn-primary" onClick={() => navigate('library')}>Start Workout</button>
        <button className="btn btn-outline" onClick={() => navigate('explore')}>Browse Programs</button>
      </div>
    </div>
  );
}
