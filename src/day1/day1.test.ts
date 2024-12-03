import { describe, expect, test } from "vitest";
import { day1 } from "./day1";
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('day1', () => {
    test('easy case', () => {
        const inputPath = resolve(__dirname, 'easy.txt');
        const input = readFileSync(inputPath, 'utf-8')
            .trim()
            .split('\n')
            .map(line => line.trim());
        console.log(input);
        expect(day1(input)).toBe(11);
    });
    test('hard case', () => {
        const inputPath = resolve(__dirname, 'hard.txt');
        const input = readFileSync(inputPath, 'utf-8')
            .trim()
            .split('\n')
            .map(line => line.trim());
        console.log(input);
        expect(day1(input)).toBe(3246517);
    });

});