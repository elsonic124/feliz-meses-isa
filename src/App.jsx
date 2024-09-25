import { Button } from "@mui/material"
import AppHeader from "./components/AppHeader"
import '@fontsource/roboto';
import { useState } from "react";
import { Page } from "./components/Page";
import * as contenido from './assets/contenido.json';
function App() {

  const pages = ['inicio','cartita','despedida'];
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <>
      <AppHeader 
      text="hola"
      goPage={ setSelectedPage }
      pages={pages}
      />
        {loadPage(pages[selectedPage])}
    </>
  )
}

function loadPage(page){
    let loadedPage;
    switch (page) {
      case 'inicio':
        loadedPage = contenido.inicio;
        break;
      case 'cartita':
        loadedPage = contenido.cartita;
        break;
      case 'despedida':
        loadedPage = contenido.despedida;
        break;
      default:
        loadedPage = contenido.inicio;
        break;
    }
    return <Page 
    title={loadedPage.title}
    primaryImage={loadedPage.primaryImage}
    secondaryImage={loadedPage.secondaryImage}
    content={loadedPage.content} 
    footer={loadedPage.footer}></Page>
}


export default App  