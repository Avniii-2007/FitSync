export default function Profile() {
  return (
    <div className="page active">
      <div className="page-title">Profile</div>
      <div className="page-sub">Your account</div>
      <div className="profile-head">
        <div className="avatar">A</div>
        <div><h2>Alex Johnson</h2><p>Member since January 2024</p></div>
      </div>
      <div className="profile-grid">
        {[['Age', '26'], ['Height', '178 cm'], ['Weight', '74 kg'], ['Goal', 'Build Muscle'], ['Level', 'Intermediate'], ['Workouts', '87 total']].map(([l, v]) => (
          <div className="profile-field" key={l}><div className="field-label">{l}</div><div className="field-val">{v}</div></div>
        ))}
      </div>
      <div className="btn-row">
        <button className="btn btn-ghost">Sign Out</button>
      </div>
    </div>
  );
}
