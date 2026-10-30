import { preload } from "react-dom";

import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export const dynamic = "force-dynamic";

function App(){

    preload("/assets/slider4.webp", {
        as: "image",
        fetchPriority: "high",
    });
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
}

export default App
