import { useState, useEffect } from "react";
import React from 'react'

export default function Home() {
  const [products, setProducts] = useState([]);
  const[ selectedProduct , setSelectedProduct] = useState(null);

  useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(cevap => cevap.json()) // Gelen paketi aç (JSON'a çevir)
    .then(veri => setProducts(veri.products)); // Gelen ürünleri listeye kaydet
}, []); // Köşeli parantez boş, yani sadece sayfa ilk açıldığında yap.


  return (
    <div className="home-container">
      <h2>Products</h2>
      <div className="cards">
        {products.map(product => (
          <div className="card" key={product.id}>
            <h3>{product.title}</h3> 
            <button onClick={() => setSelectedProduct(product)}>Detayları Gör</button>
            
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <p>Category: {selectedProduct.category}</p>
            <button className="popup-close" onClick={() => setSelectedProduct(null)}>Kapat</button>
          </div>
        </div>
      )}
    </div>
  )
}
