import { useState } from 'react';
import { LIBRARY_PLANS } from '../libraryData';

export default function Library({ navigate, customExercises = [] }) {
  const [expandedPlanId, setExpandedPlanId] = useState(null);

  const togglePlan = (id) => {
    setExpandedPlanId(expandedPlanId === id ? null : id);
  };

  return (
    <div className="page active">
      <div className="page-title">Library</div>
      <div className="page-sub">{LIBRARY_PLANS.collection.title} - {LIBRARY_PLANS.collection.days} Days/Week</div>
      
      <div className="section-head" style={{ marginTop: '24px' }}>
        <div className="section-label" style={{ margin: 0 }}>Workout Plans</div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate('exercises')}>+ Custom Plan</button>
      </div>

      <div className="library-plans" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {customExercises && customExercises.length > 0 && (
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '16px', background: '#fff', overflow: 'hidden' }}>
            <div 
              className="saved-row" 
              onClick={() => togglePlan('custom')}
              style={{ margin: 0, border: 'none', borderRadius: 0, borderBottom: expandedPlanId === 'custom' ? '1px solid #e0e0e0' : 'none', cursor: 'pointer' }}
            >
              <div className="saved-icon" style={{ background: '#000', color: '#fff' }}>
                <i className="ti ti-star" />
              </div>
              <div className="saved-info">
                <div className="saved-name">My Custom Plan</div>
                <div className="saved-meta">{customExercises.length} exercises</div>
              </div>
              <i className={`ti ti-chevron-${expandedPlanId === 'custom' ? 'up' : 'down'}`} style={{ color: '#aaa', marginLeft: '10px' }} />
            </div>

            {expandedPlanId === 'custom' && (
              <div className="plan-exercises" style={{ padding: '16px', background: '#fafafa' }}>
                {customExercises.map((ex, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', borderBottom: idx !== customExercises.length - 1 ? '1px solid #eee' : 'none', paddingBottom: idx !== customExercises.length - 1 ? '16px' : '0' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '8px', overflow: 'hidden', background: '#fff', border: '1px solid #eee', flexShrink: 0 }}>
                      <img src={ex.image_name} alt={ex.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '15px', fontWeight: '600' }}>{ex.name}</div>
                      <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>3 sets × 10 reps</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {LIBRARY_PLANS.data.map(plan => {
          const isExpanded = expandedPlanId === plan.id;
          return (
            <div key={plan.id} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', background: '#fff', overflow: 'hidden' }}>
              <div 
                className="saved-row" 
                onClick={() => togglePlan(plan.id)}
                style={{ margin: 0, border: 'none', borderRadius: 0, borderBottom: isExpanded ? '1px solid #e0e0e0' : 'none', cursor: 'pointer' }}
              >
                <div className="saved-icon" style={{ background: '#f5f5f5', color: plan.color || '#000' }}>
                  <i className="ti ti-barbell" />
                </div>
                <div className="saved-info">
                  <div className="saved-name">{plan.title} {plan.note}</div>
                  <div className="saved-meta">{plan.exercises.length} exercises</div>
                </div>
                <i className={`ti ti-chevron-${isExpanded ? 'up' : 'down'}`} style={{ color: '#aaa', marginLeft: '10px' }} />
              </div>

              {isExpanded && (
                <div className="plan-exercises" style={{ padding: '16px', background: '#fafafa' }}>
                  {plan.exercises.map((ex, idx) => {
                    const setsCount = ex.sets.length;
                    const firstSet = ex.sets[0];
                    const repRange = firstSet.to_reps && firstSet.from_reps 
                      ? `${firstSet.from_reps}-${firstSet.to_reps}` 
                      : firstSet.reps || 'N/A';
                    
                    return (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', borderBottom: idx !== plan.exercises.length - 1 ? '1px solid #eee' : 'none', paddingBottom: idx !== plan.exercises.length - 1 ? '16px' : '0' }}>
                        <div style={{ width: '56px', height: '56px', borderRadius: '8px', overflow: 'hidden', background: '#fff', border: '1px solid #eee', flexShrink: 0 }}>
                          <img src={ex.exercise_image} alt={ex.excercise_name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '15px', fontWeight: '600' }}>{ex.excercise_name}</div>
                          <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>{setsCount} sets × {repRange} reps</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
