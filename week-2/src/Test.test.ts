import { describe, test, expect } from 'vitest';
import { findMostFrequentChar } from './findMostFrequentChar';

describe('findeMostFrequentChar', () => {
  test('빈문자열을 입력시 문자열 반환', () => {
    const input = '';
    const output = findMostFrequentChar(input);
    expect(output).toBe('');
  });

  test('단일 문자입력시 문자열 반환', () => {
    const input = 'A';
    const output = findMostFrequentChar(input);
    expect(output).toBe('A');
  });

  test('여러 문자 입력시', () => {
    const input = '취준이 힘들어요 AAA';
    const output = findMostFrequentChar(input);
    expect(output).toBe('A');
  });

  test('가장 많이 등장하는 문자가 2개 이상일 때', () => {
    const input = 'ABAB';
    const output = findMostFrequentChar(input);
    expect(output).toBe('A');
  });
});
