import {describe, expect, test} from "vitest";
import {insert} from "./day1.ts";

describe('insertion', () => {
    test('insertion 1', () => {
        const arr = [1, 3, 5, 7];
        const num = 4;

        insert(arr, num);
        expect(arr).toEqual([1, 3, 4, 5, 7]);
    })
    test('insertion sorted', () => {
        const arr = [1, 3, 5, 7];
        const num = 8;

        insert(arr, num);
        expect(arr).toEqual([1, 3, 5, 7, 8]);
    })

})