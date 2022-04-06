import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <section style={{ padding: '10rem' }}>
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div>
        <Link to="/">Visit Our Homepage</Link>
      </div>
    </section>
  );
};
export { Missing };
