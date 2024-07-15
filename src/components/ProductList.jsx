import '../App.css'

function ProductList({ product, addToCart }) {
    return (
        <div className='flex'>
        {
            product.map((productItem, productIndex) => {
                return (
                    <div style={{ width : '50%' }}>
                        <div className='product-item'>
                            <img src={productItem.url} width="100%" className='border-4'/>
                            <p className='name'>{productItem.name} | {productItem.category}</p>
                            <p className='seller'> {productItem.seller} </p>
                            <p className='price'> Rs. {productItem.price} /- </p>
                            <button className='btn'
                            onClick={() => addToCart(productItem)}
                            >Add To Cart</button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default ProductList;