import { describe, expect, test } from '@jest/globals';
import ChiffreRomain from './index';
describe('Chiffre Romain', () => {
	test('Chiffre Romain 1 = I', () => {
		expect(ChiffreRomain(1)).toBe('I');
	});
});
