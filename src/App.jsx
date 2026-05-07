import { useState, useEffect, useRef, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Exercises from './components/Exercises';
import Explore from './components/Explore';
import Library from './components/Library';
import Progress from './components/Progress';
import Profile from './components/Profile';
import Notifications from './components/Notifications';

export default function App() {
  const [page, setPage] = useState('home');
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(true);
  const intervalRef = useRef(null);
  
  const [customExercises, setCustomExercises] = useState([]);

  const addExerciseToCustom = useCallback((ex) => {
    setCustomExercises(prev => {
      if (prev.find(e => e.id === ex.id)) {
        return prev.filter(e => e.id !== ex.id);
      }
      return [...prev, ex];
    });
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const navigate = useCallback((p) => {
    setPage(p);
    if (p === 'notifs') setBadgeVisible(false);
  }, []);

  const toggleTimer = useCallback(() => setRunning(r => !r), []);

  const resetTimer = useCallback(() => {
    setRunning(false);
    setSeconds(0);
  }, []);

  return (
    <>
      <Sidebar page={page} navigate={navigate} badgeVisible={badgeVisible} />
      <div className="main">
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'exercises' && <Exercises addExerciseToCustom={addExerciseToCustom} customExercises={customExercises} />}
        {page === 'explore' && <Explore />}
        {page === 'library' && (
          <Library navigate={navigate} customExercises={customExercises} />
        )}
        {page === 'progress' && <Progress />}
        {page === 'profile' && <Profile />}
        {page === 'notifs' && <Notifications />}
      </div>
    </>
  );
}
