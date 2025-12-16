"use client";
import Link from "next/link";
import { ProductType } from "./Types";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleProductType = ({
    type,
    valeu,
  }: {
    type: "size" | "color";
    valeu: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: valeu,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-gray-100">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium"> {product.name} </h1>
        <p className="text-sm text-gray-500"> {product.shortDescription}</p>
        <div className="flex flex-col  gap-4 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center ">
              <span className="text-gray-500">Size</span>
              <select
                name="size"
                id="size"
                className="ring ring-gray-300 rounded-md px-2 py-1"
                onChange={(e) =>
                  handleProductType({ type: "size", valeu: e.target.value })
                }
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Colors</span>
              <div className="flex items-center gap-2">
                {product.colors.map((colors) => (
                  <div
                    className={`cursor-pointer border-1 ${
                      productTypes.color === colors
                        ? "border-gray-400"
                        : "border-gray-200"
                    } rounded-full p-[1.2px] `}
                    key={colors}
                    onClick={(e) =>
                      handleProductType({ type: "color", valeu: colors })
                    }
                  >
                    <div
                      className="w-[14px] h-[14px] rounded-full"
                      style={{ backgroundColor: colors }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium">${product.price.toFixed(2)}</p>
            <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all during-300 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Add ro Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
