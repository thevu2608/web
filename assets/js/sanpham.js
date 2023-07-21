// sanpham.js
var products = [
    {
      name: "Product 1",
      price: 10,
      image: "/src/image/sp10.jpg",
    },
    {
      name: "Product 2",
      price: 20,
      image: "/src/image/sp12.jpg",
    },
    {
      name: "Product 3",
      price: 10,
      image: "/src/image/sp13.jpg",
    },
    {
      name: "Product 4",
      price: 20,
      image: "/src/image/sp11.jpg",
    }
  ];
  
  var productLists = document.getElementById('productLists');
  
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    // Tạo phần tử div để chứa thông tin của mỗi sản phẩm
    var productItem = document.createElement('div');
    productItem.className = 'col-md-6';
  
    // Thêm thông tin của sản phẩm vào phần tử div
    productItem.innerHTML = `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p style="color: red">Price: $${product.price}</p>
            <a href="#" class="btn btn-danger">Mua ngay</a>
        </div>
    `;
    // Thêm sản phẩm vào danh sách sản phẩm
    productLists.appendChild(productItem);
  }
  