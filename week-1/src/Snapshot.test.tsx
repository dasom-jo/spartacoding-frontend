import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Snapshot from "./Snapshot";

describe("검색 컴포넌트 스냅샷 테스트", () => {
  it("초기 렌더링 상태를 스냅샷으로 저장", () => {
    const { container } = render(<Snapshot />);
    expect(container).toMatchSnapshot(); // 초기 렌더링 스냅샷 저장
  });

  it("검색어 입력 후 렌더링 상태를 스냅샷으로 저장", () => {
    const { container } = render(<Snapshot />);
    const input = screen.getByPlaceholderText("책을 검색해주세요");

    fireEvent.change(input, { target: { value: "리액트" } });

    expect(container).toMatchSnapshot(); // 검색어 입력 후 UI 스냅샷 저장
  });

  it("검색 버튼 클릭 후 결과가 표시된 상태를 스냅샷으로 저장", async () => {
    const { container } = render(<Snapshot />);
    const input = screen.getByPlaceholderText("책을 검색해주세요");
    const button = screen.getByText("검색");

    fireEvent.change(input, { target: { value: "리액트" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(container).toMatchSnapshot(); // 검색 결과 표시 후 UI 스냅샷 저장
    });
  });
});
