const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
    basePath: '/notes',
    assetPrefix: '/notes',
    images: {
        unoptimized: true,
    },
})
