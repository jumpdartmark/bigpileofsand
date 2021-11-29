import React from 'react';
import { Link } from 'react-router-dom';

// todo remove me once routes working
// eslint-disable-next-line import/no-cycle
import { routes } from '../routes';

const HomeScreen: React.FC = () => (
  <div>
    {
        routes.map((rt) => (
          <>
            <Link key={rt.route} to={rt.route}>{rt.title}</Link>
            <br />
          </>
        ))
    }
  </div>
);

export default HomeScreen;
