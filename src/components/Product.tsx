import { useState } from 'react';

interface ProductProps {
    title: string;
    price: number;
    available?: boolean;
}



function Product({title, price, available = false}: ProductProps) {
    const [inCart, setInCart] = useState<boolean>(false);
    const handleClick = () => {setInCart(!inCart)};
    return (
        <div>
            <p>{title}</p>
            <p>Price: ${price}</p>
            <p>
                {available ? 'In stock' : 'Out of stock'}
            </p>

            <button onClick={handleClick}>
                {inCart ? 'Remove from cart' : 'Add to cart'}
            </button>
        </div>
    );
}

export default Product;