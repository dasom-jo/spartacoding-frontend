//검색 창 단위 테스트
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './Unit';

//테스트 내용
// 1. 입력필드가 정상적으로 렌더링되는가
// 2. 버튼이 정상정으로 존재하는가
// 3. 존재하는 책 제목을 입력시 해당 결과와 맞는 멘트가 출력되는가
// 4. 없는 책 제목 입력시 해당 결과와 맞는 멘트가 출력되는가

describe('App 컴포넌트 테스트', () => {
  it('입력 필드가 정상적으로 렌더링 되는지 확인', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('책을 검색해주세요');
    expect(input).toBeInTheDocument();
  });

  it('검색 버튼이 정상적으로 존재하는지 확인', () => {
    render(<App />);
    const button = screen.getByText('검색');
    expect(button).toBeInTheDocument();
  });
  it('책이 존재할 경우 알맞은 멘트가 출력되는지 테스트', () => {
    render(<App />);

    // 입력 필드 가져오기
    const input = screen.getByPlaceholderText(
      '책을 검색해주세요'
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'react' } });

    // 검색 버튼 클릭
    const button = screen.getByText('검색'); // ✅ `getByAltText` 오류 수정
    fireEvent.click(button);

    // 결과 메시지 확인
    expect(
      screen.getByText('react의 위치는 3층 432번에 있습니다.')
    ).toBeInTheDocument();
  });

  it('책이 존재하지 않을 경우 존재하지 않는다는 멘트 출력', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(
      '책을 검색해주세요'
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'vue' } });

    const button = screen.getByText('검색');
    fireEvent.click(button);

    expect(screen.getByText('vue을 찾을 수 없습니다.')).toBeInTheDocument();
  });
});
