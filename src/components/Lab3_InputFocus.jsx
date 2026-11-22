import { useRef } from 'react';

// LAB 3 (Slide 15): Input Focus with useRef
export default function Lab3InputFocus() {
  // TODO 1: input DOM을 참조할 inputRef 생성 (초기값 null)
  const inputRef = useRef(null);
  const focusInput = () => {
    // TODO 2: ref.current를 이용해 input에 focus() 호출
    inputRef.current.focus();
  };

  const clearInput = () => {
    // TODO 3: input의 값을 지우고 다시 Focus
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <label htmlFor="student-name" className="hint">네임</label>
      <input id="student-name" className="field" placeholder="엔터 유어 네임"
        /* TODO 4: ref={inputRef} 속성 연결 */
        ref={inputRef}
        />
      <div className="controls">
        <button onClick={focusInput}>포커스</button>
        <button className="secondary" onClick={clearInput}>클리어</button>
      </div>
    </div>
  );
}
