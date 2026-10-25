import { useState } from 'react';

interface ProductProps {
    title: string;
    price: number;
    available?: boolean;
}



function Product({title, price}: ProductProps) {
    const [count, setInCart] = useState<number>(0);

    return (
        <div>
            <p>{title}</p>
            <p>Price: ${price}</p>
            <p>
                Total: ${price*count}
            </p>
            <button onClick={() => {setInCart(count-1)}}>
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