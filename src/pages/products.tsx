import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { products } from '../data/data';
import { Button } from '@/components/ui/button';
import { Link, Outlet } from 'react-router';

const Products = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-8'>Products</h1>
      <div className='grid grid-cols-4 gap-4'>
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={product.thumbnail} alt={product.title} />
            </CardContent>
            <CardFooter className='flex justify-between'>
              <p>${product.price}</p>
              {/* Link to the product page */}
              <Link to={`/products/${product.id}`}>
                <Button>View Product</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
