import withRoot from '../withRoot';
import React from 'react';
import ProductSmokingHero from '../views/ProductSmokingHero';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import AppAppBar from '../views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar/>
      <ProductHero />
      <ProductValues />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);

