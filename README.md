# Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Webshop Integration with Leaflet and Publitas

## Overview

This project involves the integration of a simple React webshop with a Leaflet map using data from a dummy JSON source [dummyjson.com/products](https://dummyjson.com/products). The goal is to create custom product hotspots on the Leaflet map, allowing users to interact with products visually.

## Implementation Details

### Data Source

- The project utilizes dummy JSON data from the URL mentioned above as a reference for the products in the webshop.

### Leaflet Integration

- The Leaflet map is generated and customized to display product hotspots.
- The Leaflet map is uploaded to Publitas, where custom products are added to create interactive hotspots.

### Communication Between Systems

- To enable the "addToCart" functionality from the webshop when interacting with the Leaflet map, the solution uses `postMessage`.
- When a user interacts with a product hotspot on the Leaflet map, an event is triggered, sending the `product.webshopIdentifier` (as a string) to the webshop. This identifier corresponds to the product's `productId` in the shop.
- The webshop then checks the products array to identify the product by its `productId` and performs the "addToCart" action accordingly.

## Catalog page code

```
javascript
useEffect(() => {
getProducts().then((data) => setProducts(data.products));
}, []);

window.addEventListener("message", (event) => {
if (event.data.type === "addToCart") {
const productId = parseInt(event.data.productId);
addToCart(products[productId - 1]);
}
});
```

## Custom code injection code

````
<script>
  window.viewerReady = function (api, platform) {
    var url = (parent !== window) ? document.referrer : document.location;
    api.setCartButtonAction(`${url}cart`, 'Cart');
    api.setProductCtaAction(function (product) {
      window.parent.postMessage(
        { type: "addToCart", productId: product.webshopIdentifier },
        "*"
      );
    });
  };
</script>
```

### Cart Button

- When a user maximizes the Leaflet map within the app, a cart button is displayed.
- Clicking this button redirects the user to the parent URL followed by "/cart."

### Further Enhancements

- It's possible to explore displaying cart information within the Leaflet map for improved user experience. This can be implemented based on your preferences and requirements.
````
