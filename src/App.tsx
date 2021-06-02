import GlobalStyle from "./styles/global";
import Routes from "./router/index";

function App() {
  return (
    //pegando todos com caminhos por rotas.
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
