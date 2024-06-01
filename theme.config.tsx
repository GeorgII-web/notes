import {DocsThemeConfig} from 'nextra-theme-docs'
import Logo from './components/logo'

const config: DocsThemeConfig = {
    logo: Logo,
    project: {
        link: 'https://github.com/GeorgII-web/notes',
    },
    docsRepositoryBase: 'https://github.com/GeorgII-web/notes/blob/master/',
    footer: {
        text: 'github.com/GeorgII-web | t.me/GeorgiiW',
    },
    gitTimestamp: ''
}

export default config