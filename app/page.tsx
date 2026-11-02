import { preload } from "react-dom";
import vector10 from "./assets/Vector (10).webp";

import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export const dynamic = "force-dynamic";

function App(){

    preload(vector10.src as string, {
        as: "image",
        type: "image/webp",
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
