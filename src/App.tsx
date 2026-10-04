import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';
import './App.css'

function App() {
    return (
        <div>
            <Header />
            <Product
                title="iPhone"
                price={1000}
                available={true}
            />

            <Product
                title="Samsung"
                price={800}
                available={false}
            />

            <Product
                title="Pixel"
                price={700}
                available={true}
            />
            <Footer />
        </div>
    );
}

export default App;
