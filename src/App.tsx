import {
  FaqsContainer,
  FooterContainer,
  JumbotronContainer,
} from './containers';
import { GlobalStyle } from './globals';

function App() {
  return (
    <main>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
      <GlobalStyle />
    </main>
  );
}

export default App;
