import { Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { GlobalStyle } from './globals';
import { Browse, Home, Login, Missing, Register } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME}>
          <Route index element={<Home />} />

          <Route path={ROUTES.BROWSE}>
            <Route index element={<Browse />} />
          </Route>

          <Route path={ROUTES.SIGN_IN}>
            <Route index element={<Login />} />
          </Route>

          <Route path={ROUTES.SIGN_UP}>
            <Route index element={<Register />} />
          </Route>

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
