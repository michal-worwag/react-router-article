import { Link, useParams } from 'react-router';
import { products } from '../data/data';
import { Button } from '@/components/ui/button';

const Product = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold mb-4'>{product?.title}</h1>
      <p className='text-lg mb-4'>${product?.price}</p>
      <img src={product?.thumbnail} alt={product?.title} />
      <Link to='/products'>
        <Button>Back to products</Button>
      </Link>
    </div>
  );
};

export default Product;
