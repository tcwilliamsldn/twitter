module.exports = {
    snapshotSerializers: ['enzyme-to-json/serializer', 'jest-serializer-html'],
    coveragePathIgnorePatterns: ['<rootDir>/build'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    setupFiles: ['./configureEnzyme.js'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    }
};
