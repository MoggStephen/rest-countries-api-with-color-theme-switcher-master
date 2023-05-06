import '@/styles/globals.scss'
//Import google font!
import { Nunito_Sans } from '@next/font/google'
const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['300','600','800'] })
//Import bootstrap and import useEffect for bootstraps bundled js.
import 'bootstrap/scss/bootstrap.scss';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  
  //IMPORT BUNDLED BOOTSTRAP JS
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={nunitoSans.className}>
      <Component {...pageProps} />
    </div>
  )
}
