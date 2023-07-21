// products.js

var products = [
    {
      name: "Product 1",
      price: 10,
      image: "/src/image/sp1.jpg",
    },
    {
      name: "Product 2",
      price: 20,
      image: "/src/image/sp2.jpg",
    },
    {
        name: "Product 3",
        price: 10,
        image: "/src/image/sp3.jpg",
      },
      {
        name: "Product 4",
        price: 20,
        image: "/src/image/sp3.png",
      },
      {
        name: "Product 5",
        price: 10,
        image: "/src/image/sp7.jpg",
      },
      {
        name: "Product 6",
        price: 20,
        image: "/src/image/sp5.jpg",
      },
      {
        name: "Product 7",
        price: 10,
        image: "/src/image/sp6.jpg",
      },
      {
        name: "Product 8",
        price: 20,
        image: "/src/image/sp8.jpg",
      },

  ];
  var productList = document.getElementById('productList');

  for (var i = 0; i < products.length; i++) {
      var product = products[i];
      // Tạo phần tử div để chứa thông tin của mỗi sản phẩm
      var productItem = document.createElement('div');
      productItem.className = 'col-md-3';

      // Thêm thông tin của sản phẩm vào phần tử div
      productItem.innerHTML = `
          <div class="product-item">
              <img src="${product.image}" width="200" alt="${product.name}">
              <h4>${product.name}</h4>
              <p style="color: red">Price: $${product.price}</p>
              <a href="#" class="btn btn-danger">Mua ngay</a>
          </div>
      `;
      // Thêm sản phẩm vào danh sách sản phẩm
      productList.appendChild(productItem);
  }