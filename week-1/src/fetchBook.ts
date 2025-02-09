export const fetchBooks = async (bookName: string) => {
    if (!bookName.trim()) return [];

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}`
      );
      const data = await res.json();

      if (data.items) {
        return data.items.map(
          (book: { volumeInfo?: { title?: string } }) =>
            book.volumeInfo?.title || "제목 없음"
        );
      }

      return [];
    } catch (error) {
      console.error("API 호출 에러", error);
      return [];
    }
  };
