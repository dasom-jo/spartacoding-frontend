import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App 통합 테스트", () => {
  test("사용자가 입력 후 버튼을 클릭하면 가장 많이 등장하는 문자가 표시됨", () => {
    render(<App />);

    // 입력 필드 가져오기
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "확인" });

    // 입력 필드에 텍스트 입력
    fireEvent.change(input, { target: { value: "안녕안녕하세요" } });

    // 버튼 클릭
    fireEvent.click(button);

    // 결과가 올바르게 표시되는지 확인
    const result = screen.getByText("가장 많이 작성한 글자는? 안");
    expect(result).toBeInTheDocument();
  });
  
  test("빈 입력 상태에서 버튼을 클릭하면 결과가 갱신되지 않음", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "확인" });

       // 입력 필드에 텍스트 입력
       fireEvent.change(input, { target: { value: "" } });

    // 빈 입력 상태에서 버튼 클릭
    fireEvent.click(button);

    // 요소가 존재하더라도 텍스트가 없는지 확인
    const result = screen.queryByText("가장 많이 작성한 글자는? ");
    expect(result).toBeNull();
  });

});
