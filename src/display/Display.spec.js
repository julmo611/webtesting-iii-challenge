// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Display from './Display';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('<Display />', () => {
	describe('Updates text', () => {
		it('Open when gate closed props is false', () => {
			const { getByTestId } = render(<Display closed={false} />);
			const testingGateClosed = getByTestId('testingGateClosed');
			expect(testingGateClosed).toHaveTextContent('Open');
		});
		it('closed when gate closed props is true', () => {
			const { getByTestId } = render(<Display closed={true} />);
			const testingGateClosed = getByTestId('testingGateClosed');
			expect(testingGateClosed).toHaveTextContent('Closed');
		});

		it('Unlocked when locked props is false', () => {
			const { getByTestId } = render(<Display locked={false} />);
			const testingGateLocked = getByTestId('testingGateLocked');
			expect(testingGateLocked).toHaveTextContent('Unlocked');
		});

		it('Locked when locked props is true', () => {
			const { getByTestId } = render(<Display locked={true} />);
			const testingGateLocked = getByTestId('testingGateLocked');
			expect(testingGateLocked).toHaveTextContent('Locked');
		});
	});

	describe('Updates styling', () => {
		it('green-led class when gate is open', () => {
			const { getByTestId } = render(<Display closed={false} />);
			const testingGateClosed = getByTestId('testingGateClosed');
			expect(testingGateClosed).toHaveClass('green-led');
		});

		it('red-led class when gate is closed', () => {
			const { getByTestId } = render(<Display closed={true} />);
			const testingGateClosed = getByTestId('testingGateClosed');
			expect(testingGateClosed).toHaveClass('red-led');
		});

		it('green-led class when gate is unlocked', () => {
			const { getByTestId } = render(<Display locked={false} />);
			const testingGateLocked = getByTestId('testingGateLocked');
			expect(testingGateLocked).toHaveClass('green-led');
		});

		it('red-led class when gate is locked', () => {
			const { getByTestId } = render(<Display locked={true} />);
			const testingGateLocked = getByTestId('testingGateLocked');
			expect(testingGateLocked).toHaveClass('red-led');
		});
	});
});
