module.exports = {
    snapshotSerializers: ['enzyme-to-json/serializer', 'jest-serializer-html'],
    coveragePathIgnorePatterns: ['<rootDir>/build'],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
    setupFiles: ['./configureEnzyme.js']
};
