import React from "react";
import { HorizontalScroll, Button } from "./styled";

const FilterByCategory = () => {
  const categories = [
    "Árabe",
    "Asiática",
    "Hambúrguer",
    "Italiana",
    "Sorvetes",
    "Carnes",
    "Baiana",
    "Petiscos",
    "Mexicana"
  ];

  return (
    <HorizontalScroll>
      {categories.map((category, i) => {
        return <Button key={i}>{category}</Button>;
      })}
    </HorizontalScroll>
  );
};

export default FilterByCategory;
