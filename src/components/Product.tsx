interface ProductProps {
    title: string;
    price: number;
    available?: boolean;
}

function Product({title, price, available = false}: ProductProps) {
    return (
        <div>
            <p>{title}</p>
            <p>Price: ${price}</p>
            <p>
                {available ? 'In stock' : 'Out of stock'}
            </p>
        </div>
    );
}

export default Product;