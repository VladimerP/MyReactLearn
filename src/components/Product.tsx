const title: string = 'iPhone';
const price: number = 1000;
const available: boolean = true;

function Product() {
    return (
        <div>
            <p>{title}</p>
            <p>Price: {price}</p>
            <p>{available?'In stock':'Modify'}</p>
        </div>
    );
}

export default Product;