import { useState } from 'react';

const Snapshot = () => {
  const books: { [key: string]: string } = {
    javascript: '2층 143번',
    react: '3층 432번',
    typescript: '4층 242번',
  };
  //사용자가 검색한 책 제목 상태 관리
  const [bookName, setBookName] = useState('');
  //해당 값 (책의 존재 유무) 상태 관리
  const [result, setResult] = useState('');

  //검색버튼 클릭시 이벤트
  const handleSearch = () => {
    if (bookName in books) {
      setResult(`${bookName}의 위치는 ${books[bookName]}에 있습니다.`);
    } else {
      setResult(`${bookName}을 찾을 수 없습니다.`);
    }
  };

  return (
    <>
      <input
        placeholder="책을 검색해주세요"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      <div>{result}</div>
    </>
  );
};

export default Snapshot;
