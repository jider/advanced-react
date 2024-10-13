import {ProductButtons, ProductCard, ProductImage, ProductTitle, ShoppingCart} from '../components'
import {useShoppingCart} from '../hooks/useShoppingCart.ts'
import {products} from '../data/products.ts'
import '../styles/custom.css'


export default function ShoppingPage() {
  const {shoppingCart, onProductCountChange } = useShoppingCart()

   return (
    <>
      <h1>Shopping Store</h1>
      <hr/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark text-white'
            value={shoppingCart[product.id]?.count ?? 0}
            onChange={onProductCountChange}
          >
            <ProductImage className='img-bordered' />
            <ProductTitle />
            <ProductButtons className='action-buttons' />
          </ProductCard>

          // Alternative
          // <ProductCard
          //   key={product.id}
          //   product={product}
          //   className='bg-dark text-white'
          // >
          //   <ProductCard.Image className='img-bordered' />
          //   <ProductCard.Title />
          //   <ProductCard.Buttons className='action-buttons' />
          // </ProductCard>
        ))}
      </div>

      <ShoppingCart shoppingCart={shoppingCart} onProductCountChange={onProductCountChange} />
    </>
  )
}
