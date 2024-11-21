import CartBody from "../cart/CartBody";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
const CartPage = () => {
    const user = JSON.parse(localStorage.getItem('users'));

   

  
    return (
        <Layout>
            <div className="container mx-auto px-4 max-w-7xl lg:px-0">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Shopping Cart
                    </h1>
                        <CartBody />

                        <button type="button"   className="mt-10 sm:mt-0 w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl">
                        <Link to={user?.role === 'user' ? '/user-dashboard' :'/admin-dashboard' } >Checkout</Link></button>                      
                    
                </div>
            </div>
        </Layout>
    );
}

export default CartPage;