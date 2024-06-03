import { GoogleTagManager } from '@next/third-parties/google'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <GoogleTagManager gtmId="G-YJNFH344GM" />
            <Component {...pageProps} />
        </>
    );
};

export default App;