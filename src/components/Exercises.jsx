import { useState } from 'react';
import { API_EXERCISES } from '../data';

export default function Exercises({ addExerciseToCustom, customExercises }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="page active">
      <div className="page-title">Exercises</div>
      <div className="page-sub">Browse all movements</div>
      
      <div className="exercises-grid">
        {API_EXERCISES.map((ex) => {
          const isAdded = customExercises && customExercises.find(e => e.id === ex.id);
          return (
            <div 
              className="ex-card" 
              key={ex.id}
              onMouseEnter={() => setHoveredId(ex.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="ex-media-container">
                {hoveredId === ex.id ? (
                  <video 
                    src={ex.video_file} 
                    autoPlay 
                    muted
                    loop
                    playsInline
                    className="ex-media"
                  />
                ) : (
                  <div className="ex-image-wrapper">
                    <img 
                      src={ex.image_name} 
                      alt={ex.name} 
                      className="ex-media" 
                    />
                  </div>
                )}
              </div>
              <div className="ex-card-info">
                <div className="ex-card-text">
                  <h3>{ex.name}</h3>
                  <p>{Number(ex.usage_count).toLocaleString()} users trained</p>
                </div>
                <button 
                  className={`add-ex-btn ${isAdded ? 'added' : ''}`}
                  onClick={() => addExerciseToCustom(ex)}
                >
                  <i className={`ti ${isAdded ? 'ti-check' : 'ti-plus'}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
