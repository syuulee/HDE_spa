import { useState } from 'react';
import styles from './App.module.scss' //클래스를 알아서 만들기 때문에 중복될 일이 없음
// import './App.scss'

function App() {
  const [on, setOn] = useState(false);
  return (
    <div className={`${styles.App} ${on ? styles.on : null}`}>
      <strong className='inner' onClick={() => {
        setOn(!on)
      }}>sass</strong>
    </div>
  );
}

export default App;
