import { useState } from 'react';

interface ProductProps {
    title: string;
    price: number;
    available?: boolean;
}



function Product({title, price, available = false}: ProductProps) {
    const [count, setInCart] = useState<number>(0);

    return (
        <div>
            <p>{title}</p>
            <p>Price: ${price}</p>
            <p>
                {available ? 'In stock' : 'Out of stock'}
            </p>
            <p>
                Total: ${price*count}
            </p>
            <button disabled={count <= 0 ? true:false} onClick={() => {setInCart(count-1)}}>
                -
            </button>
            <p>
                {count}
            </p>
            <button onClick={() => {setInCart(count+1)}}>
                +
            </button>
        </div>
    );
}

export default Product;