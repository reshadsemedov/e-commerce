import { useEffect, useState } from "react";


export default function useFetch(url, index) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                if(index === 0) {
                    setProducts(data);
                }
                else {
                    setProducts(data[index - 1])
                }
                
            } catch (error) {
                console.error('Error fetching data:', error.message);
                throw new Error('Failed to fetch data');
            }
        }
    
    
        fetchProducts();
      }, [url])

      return products;
}