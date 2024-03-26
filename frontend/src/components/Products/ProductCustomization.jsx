import React, { useState } from 'react';

const ProductCustomization = ({ products }) => {
  const [customizations, setCustomizations] = useState([]);

  const handleAddCustomization = (e) => {
    const selectedProduct = e.target.value;
    const existingCustomization = customizations.find(item => item.product === selectedProduct);

    if (existingCustomization) {
      const updatedCustomizations = customizations.map(item => {
        if (item.product === selectedProduct) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCustomizations(updatedCustomizations);
    } else {
      setCustomizations([...customizations, { product: selectedProduct, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (index, value) => {
    const updatedCustomizations = [...customizations];
    updatedCustomizations[index].quantity = value;
    setCustomizations(updatedCustomizations);
  };

  const handleRemoveCustomization = (index) => {
    const updatedCustomizations = [...customizations];
    updatedCustomizations.splice(index, 1);
    setCustomizations(updatedCustomizations);
  };

  return (
    <div>
      <h2>Customize Your Food</h2>
      <select onChange={handleAddCustomization}>
        <option value="">Add More</option>
        {products.map(product => (
          <option key={product.id} value={product.id}>{product.name} - {product.price}</option>
        ))}
      </select>
      {customizations.map((item, index) => (
        <div key={index}>
          <span>{item.product}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
          />
          <button onClick={() => handleRemoveCustomization(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCustomization;
