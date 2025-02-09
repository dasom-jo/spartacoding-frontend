import { useState } from "react";
import { fetchBooks } from "./fetchBook"; // ✅ 분리된 API 호출 함수 가져오기

const Intergration = () => {
  const [bookName, setBookName] = useState("");
  const [result, setResult] = useState("");
  const [bookData, setBookData] = useState<string[]>([]);

  const handleSearch = async () => {
    const books = await fetchBooks(bookName);
    setBookData(books);

    if (books.length > 0) {
      setResult(`${books.join(", ")} 라는 책(들)이 존재합니다`);
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

export default Intergration;
