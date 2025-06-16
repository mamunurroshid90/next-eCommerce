"use client";
import { getData } from "@/helpers";
import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { ProductType } from "../../../type";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getProducts = async () => {
      const endpoints = "https://dummyjson.com/products";
      try {
        const data = await getData(endpoints);
        setProducts(data?.products || []);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsInputFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchContainerRef}
      className="hidden md:inline-flex flex-1 h-10 relative"
    >
      <input
        type="text"
        placeholder="Search Products here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-full border-2 border-themeColor px-4 outline-none"
        onFocus={() => setIsInputFocused(true)}
      />
      {search && (
        <RxCross2
          onClick={() => setSearch("")}
          className="top-2.5 right-12 text-xl absolute hover:bg-red-400 hover:text-white rounded-full transition-all duration-200"
        />
      )}
      <span className="absolute top-0 right-0 w-10 h-10 bg-themeColor/80 text-white inline-flex justify-center items-center border border-themeColor hover:bg-themeColor duration-200 cursor-pointer">
        <IoSearch />
      </span>

      {isInputFocused && search && (
        <div className="absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black">
          {filteredProducts.length > 0 ? (
            <div>
              {filteredProducts.map((item) => (
                <Link
                  key={item.id}
                  href={{
                    pathname: `/products/${item.id}`,
                    query: { id: item.id },
                  }}
                  className="flex items-center gap-x-2 text-base font-medium hover:bg-lightText/30 px-3 py-1.5"
                  onClick={() => setSearch("")}
                >
                  <CiSearch className="text-lg" /> {item.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-3">
              <p className="text-base">
                Nothing matched with{" "}
                <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                  {search}
                </span>{" "}
                please try again
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
