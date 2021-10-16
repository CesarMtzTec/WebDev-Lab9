import { Switch, Route } from 'react-router-dom';
import ProductDetail from '../../containers/ProductDetail';
import ProductList from '../../containers/ProductList';

interface RoutesProps {
  openCart(event: any): void;
}

/**
 * Routes
 * @returns Routes
 */
const Routes: React.FC<RoutesProps> = ({ openCart }) => {
  return (
    <Switch>
      <Route path="/" component={ProductList} exact />
      <Route path="/pdp" render={() => <ProductDetail openCart={openCart} />} />
    </Switch>
  );
};

export default Routes;
