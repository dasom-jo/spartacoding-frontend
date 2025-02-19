import { useState } from 'react';
import { findMostFrequentChar } from './findMostFrequentChar';

function App() {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('');

  const handleClick = () => {
    if (!inputText) return '';
    setText(findMostFrequentChar(inputText));
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>확인</button>
      <div>가장 많이 작성한 글자는? {text}</div>
    </>
  );
}

export default App;
