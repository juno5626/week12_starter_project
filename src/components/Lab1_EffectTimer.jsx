import { useEffect, useState } from 'react';
import timeCal from './timeCal';

// LAB 1 (Slide 07): useEffect Timer
export default function Lab1EffectTimer() {
  const [count, setCount] = useState(0);
  console.log('[LAB 1] rendered');
  const time = timeCal(count);

  useEffect(() => {
    // TODO 1: 1초마다 setCount(prev => prev + 1)을 실행할 setInterval 작성
    // TODO 2: 만든 타이머 ID를 보관
    // TODO 3: return Cleanup 함수에서 clearInterval 호출
    // TODO 4: Dependency Array가 []일 때와 생략했을 때의 차이 관찰


    const timerId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  },[]);

  return (
    <div>
      <div className="count">{time}</div>
    </div>
  );
}
