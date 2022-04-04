import { Jumbotron } from './components';
import { jumbo } from './fixtures';
import { GlobalStyle } from './globals';

function App() {
  return (
    <main>
      <Jumbotron.Container>
        {jumbo.map((item, i) => (
          <Jumbotron key={item?.id || i + 1} direction={item?.direction}>
            <Jumbotron.Pane className="flow">
              <Jumbotron.Title>{item?.title}</Jumbotron.Title>
              <Jumbotron.Body>{item?.body}</Jumbotron.Body>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item?.image} alt={item?.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
      <GlobalStyle />
    </main>
  );
}

export default App;
