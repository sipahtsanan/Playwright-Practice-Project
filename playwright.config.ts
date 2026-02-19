import { defineConfig } from '@playwright/test';

export default defineConfig({
    reporter: [
        ['html', { open: 'never' }],
        ['junit', { outputFile: 'test-results/results.xml' }]
    ],
});