import { useState } from 'react';
import Lab1EffectTimer from './components/Lab1_EffectTimer.jsx';
import Lab2TimerControl from './components/Lab2_TimerControl.jsx';
import Lab3InputFocus from './components/Lab3_InputFocus.jsx';
import Lab4RefTimer from './components/Lab4_RefTimer.jsx';

const labs = [
  { id: '1', name: '랩 1', subtitle: '유즈이펙트 타이머', Component: Lab1EffectTimer },
  { id: '2', name: '랩 2', subtitle: '스타트 / 스탑 / 클린업', Component: Lab2TimerControl },
  { id: '3', name: '랩 3', subtitle: '유즈래프 인풋 포커스', Component: Lab3InputFocus },
  { id: '4', name: '랩 4', subtitle: '유즈래프 타이머', Component: Lab4RefTimer },
];

export default function App() {
  const [active, setActive] = useState('1');
  const chosen = labs.find(lab => lab.id === active);
  const CurrentLab = chosen.Component;

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">오픈소스 스튜디오 · 위크 십이</p>
        <h1>리액트 훅 플레이 그라운드</h1>
        <p>유즈 이펙트 , 클린업 , 유즈래프 - 네개의 독립된 랩</p>
      </header>

      <nav className="tabs" aria-label="실습 선택">
        {labs.map(lab => (
          <button key={lab.id} type="button" className={active === lab.id ? 'tab active' : 'tab'}
            onClick={() => setActive(lab.id)} aria-current={active === lab.id ? 'page' : undefined}>
            <b>{lab.name}</b><span>{lab.subtitle}</span>
          </button>
        ))}
      </nav>

      <section className="lab-panel">
        <div className="section-heading">
          <span className="pill">{chosen.name}</span>
          <h2>{chosen.subtitle}</h2>
        </div>
        <CurrentLab />
      </section>
      <footer>랩을 전환하면 이전 Lab은 언마운트됩니다. Timer Cleanup을 확인해 보세요.</footer>
    </main>
  );
}
