import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Intergration from "./Intergration";
import { fetchBooks } from "./fetchBook"; // ✅ Mocking할 함수 가져오기

// `fetchBooks`를 Mocking
vi.mock("./fetchBook", () => ({
  fetchBooks: vi.fn(),
}));

describe("Intergration 컴포넌트 테스트", () => {
  it("검색 버튼을 누르면 책 제목이 올바르게 표시됨", async () => {
    const mockFetchBooks = fetchBooks as jest.Mock;
    mockFetchBooks.mockResolvedValue([
      "리액트 완벽 가이드",
      "React Mastery",
    ]);

    render(<Intergration />);
    const input = screen.getByPlaceholderText("책을 검색해주세요");
    const button = screen.getByText("검색");

    fireEvent.change(input, { target: { value: "리액트" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText("리액트 완벽 가이드, React Mastery 라는 책(들)이 존재합니다")
      ).toBeInTheDocument();
    });
  });

  it("존재하지 않는 책을 검색하면 '찾을 수 없습니다' 메시지 출력", async () => {
    (fetchBooks as jest.Mock).mockResolvedValue([]);

    render(<Intergration />);
    const input = screen.getByPlaceholderText("책을 검색해주세요");
    const button = screen.getByText("검색");

    fireEvent.change(input, { target: { value: "없는 책" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("없는 책을 찾을 수 없습니다.")).toBeInTheDocument();
    });
  });
});
