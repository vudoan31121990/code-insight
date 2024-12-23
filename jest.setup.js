import '@testing-library/jest-dom';

// Mock environment variables
process.env.REACT_APP_BASE_URL = 'https://code-insight-api-dot-code-insight-dev.uc.r.appspot.com';

Object.defineProperty(window, 'HTMLElement', {
	writable: true,
	value: class {
		scrollIntoView = jest.fn(); // Mock scrollIntoView
	}
});
