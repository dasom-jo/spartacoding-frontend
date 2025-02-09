import { useState } from 'react';

const Intergration = () => {
  // 사용자가 입력한 책 이름 상태 관리
  const [bookName, setBookName] = useState('');
  // 책의 결과 상태 관리
  const [result, setResult] = useState('');
  // API로 받은 책 데이터
  const [bookData, setBookData] = useState<string[]>([]);

  // 데이터 받아오기
  const fetchBooks = async () => {
    if (!bookName.trim()) return;

    try {
      const res = await fetch(
        //구글 검색 key등 필요없이 간편
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}`
      );
      const data = await res.json();

      if (data.items) {
        const bookTitles = data.items.map(
          (book: { volumeInfo?: { title?: string; }; }) => book.volumeInfo?.title || '제목 없음'
        );
        setBookData(bookTitles);

        setResult(`${bookTitles.join(`, `)} 라는 책(들)이 존재합니다`);
        console.log(bookTitles);
      } else {
        setBookData([]);
        setResult(`${bookName}을 찾을 수 없습니다.`);
      }
    } catch (error) {
      console.error('API 호출 에러', error);
    }
  };

  return (
    <>
      <input
        placeholder="책을 검색해주세요"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button onClick={fetchBooks}>검색</button>
      <div>{result}</div>
    </>
  );
};

export default Intergration;
