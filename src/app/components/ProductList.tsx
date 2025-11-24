import Categories from "./Categories";
import ProductCard from "./ProductCard";
import { ProductsType } from "./Types";

// Dados temporarios para criacao do leyout
const products: ProductsType = [
  {
    id: 1,
    name: "Nike Ultraboost Pulse ",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, rem. Impedit labore rerum non, culpa iusto, neque consequuntur voluptatibus repellat assumenda id placeat. Ea est officiis a, optio consequatur mollitia",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
  },

  {
    id: 2,
    name: "Levi's Classic Denim",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, rem. Impedit labore rerum non, culpa iusto, neque consequuntur voluptatibus repellat assumenda id placeat. Ea est officiis a, optio consequatur mollitia",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
  {
    id: 3,
    name: "Nike Ultraboost Pulse ",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, rem. Impedit labore rerum non, culpa iusto, neque consequuntur voluptatibus repellat assumenda id placeat. Ea est officiis a, optio consequatur mollitia",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
  },

  {
    id: 4,
    name: "Levi's Classic Denim",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, rem. Impedit labore rerum non, culpa iusto, neque consequuntur voluptatibus repellat assumenda id placeat. Ea est officiis a, optio consequatur mollitia",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
  {
    id: 5,
    name: "Nike Ultraboost Pulse ",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, rem. Impedit labore rerum non, culpa iusto, neque consequuntur voluptatibus repellat assumenda id placeat. Ea est officiis a, optio consequatur mollitia",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
  },

  {
    id: 6,
    name: "Levi's Classic Denim",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, rem. Impedit labore rerum non, culpa iusto, neque consequuntur voluptatibus repellat assumenda id placeat. Ea est officiis a, optio consequatur mollitia",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
];

const ProductList = () => {
  return (
    <div className="w-full">
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
