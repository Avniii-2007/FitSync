import { NOTIFS } from '../data';

export default function Notifications() {
  return (
    <div className="page active">
      <div className="page-title">Notifications</div>
      <div className="page-sub">Recent updates</div>
      {NOTIFS.map(n => (
        <div className="notif-item" key={n.title}>
          <div className={`notif-dot ${n.unread ? 'unread' : 'read'}`} />
          <div className="notif-body"><strong>{n.title}</strong><p>{n.body}</p></div>
          <div className="notif-time">{n.time}</div>
        </div>
      ))}
    </div>
  );
}
