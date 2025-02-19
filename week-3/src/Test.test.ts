import { describe, test, expect } from 'vitest';
import { findMostFrequentChar } from './findMostFrequentChar.js';
import { Text } from "./Text";

describe('findeMostFrequentChar', () => {
  test('가장 많이 등장하는 문자가 2개 이상일 때 첫번째 문자가 반환됩니다.', () => {
    const input = 'ABAB';
    const output = findMostFrequentChar(input);
    expect(output).toBe('A');
  });

  test("특수 문자가 포함될 경우에도 많이 등장하는 문자가 출력됩니다.",()=>{
    const input = "@@###aaa";
    const output = findMostFrequentChar(input);
    expect(output).toBe("#")
  })

  test("띄어쓰기가 들어갈 경우에도 많이 등장하는 문자가 반환됩니다. ",()=>{
    const input = "안녕 안경 안구 안동";
    const output = findMostFrequentChar(input);
    expect(output).toBe("안")
  })
  test("대소문자가 포함될 경우에도 많이 등장하는 문자가 반환됩니다. ",()=>{
    const input = "SSSSaaaaaa";
    const output = findMostFrequentChar(input);
    expect(output).toBe("a")
  })
  test("리터럴 템플릿이 포함될 경우에도 많이 등장하는 문자가 반환됩니다. ",()=>{
    const input = `${"나나"}`+"가가가가가";
    const output = findMostFrequentChar(input);
    expect(output).toBe("가")
  })
  test("외부에서 가져온 텍스트가 포함될 경우에도 많이 등장하는 문자가 반환됩니다. ",()=>{
    const input = `${Text}`+"안녕하세용";
    const output = findMostFrequentChar(input);
    expect(output).toBe("장")
  })
});
