import "./Homepage.css";

const Homepage = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      img: "https://picsum.photos/200",
      description: "Description of Product 1",
    },
    {
      id: 2,
      title: "Product 2",
      img: "https://picsum.photos/200",
      description: "Description of Product 2",
    },
    {
      id: 3,
      title: "Product 3",
      img: "https://picsum.photos/200",
      description: "Description of Product 3",
    },
    {
      id: 4,
      title: "Product 4",
      img: "https://picsum.photos/200",
      description: "Description of Product 4",
    },
    {
      id: 5,
      title: "Product 5",
      img: "https://picsum.photos/200",
      description: "Description of Product 5",
    },
    {
      id: 6,
      title: "Product 6",
      img: "https://picsum.photos/200",
      description: "Description of Product 6",
    },
    {
      id: 7,
      title: "Product 7",
      img: "https://picsum.photos/200",
      description: "Description of Product 7",
    },
    {
      id: 8,
      title: "Product 8",
      img: "https://picsum.photos/200",
      description: "Description of Product 8",
    },
    {
      id: 9,
      title: "Product 9",
      img: "https://picsum.photos/200",
      description: "Description of Product 9",
    },
    {
      id: 10,
      title: "Product 10",
      img: "https://picsum.photos/200",
      description: "Description of Product 10",
    },
    {
      id: 11,
      title: "Product 11",
      img: "https://picsum.photos/200",
      description: "Description of Product 11",
    },
    {
      id: 12,
      title: "Product 12",
      img: "https://picsum.photos/200",
      description: "Description of Product 12",
    },
    {
      id: 13,
      title: "Product 13",
      img: "https://picsum.photos/200",
      description: "Description of Product 13",
    },
    {
      id: 14,
      title: "Product 14",
      img: "https://picsum.photos/200",
      description: "Description of Product 14",
    },
    {
      id: 15,
      title: "Product 15",
      img: "https://picsum.photos/200",
      description: "Description of Product 15",
    },
    {
      id: 16,
      title: "Product 16",
      img: "https://picsum.photos/200",
      description: "Description of Product 16",
    },
  ];

  return (
    <div>
      <header>
        <h1>Welcome to SastaMaal!</h1>
        <p>Explore our wide range of products and find great deals.</p>
      </header>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button
              onClick={() => {
                console.log(product.title + " added to cart");
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
