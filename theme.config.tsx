import {DocsThemeConfig} from 'nextra-theme-docs'
import Logo from './components/logo'

const config: DocsThemeConfig = {
    logo: Logo,
    project: {
        link: 'https://github.com/GeorgII-web/notes',
    },
    docsRepositoryBase: 'https://github.com/GeorgII-web/notes/blob/master/',
    head: <>
        <meta name="description" content="IT notes and articles on PHP, Symfony, Pimcore and related topics."/>
    </>,
    footer: {
        text: <p>github.com/GeorgII-web | t.me/GeorgiiW</p>,
    },
    gitTimestamp: '',
}

export default config