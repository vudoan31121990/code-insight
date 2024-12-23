module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Handle CSS imports
		'\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
		'^@src/(.*)$': '<rootDir>/src/$1' // Handle assets
	},
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest' // Transpile JavaScript/TypeScript
	}
};
