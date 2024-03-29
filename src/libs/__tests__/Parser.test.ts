import {
	Parser,
} from '../Parser';

jest.setTimeout(240000);

describe('libs/Parser', () => {
	const parser = new Parser();

	describe('parsePage', () => {
		test('success', async () => {
			const date = '20180804';
			const page = 0;

			const items = await parser.parsePage(page, date);

			expect(items).toHaveLength(0);
		});
	});

	describe('parse', () => {
		test('success - valid', async () => {
			const date = '20180802';
			const items = await parser.parse(date);
			expect(items).toHaveLength(174);
			expect(items[0].id).toBe('201817210000184742');
		});

		test('success - invalid', async () => {
			const date = '20180805';
			const items = await parser.parse(date);
			expect(items).toHaveLength(0);
		});
	});
});
