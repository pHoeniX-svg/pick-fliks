import { Jumbotron } from '~src/components';
import { jumbo } from '~src/fixtures';

function JumbotronContainer() {
  return (
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
  );
}

export { JumbotronContainer };
