import { Categories } from "../Categories/Categories";
import { Header } from "../Header/Header";
import Products from "../Products/Products";
import { StyleMain } from "./Main.style";

import { authAxios, CategoriesType } from "../../ConstantType/ConstantType";
import { useEffect, useState } from "react";

export const Main = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  const [products, setProducts] = useState([]);

  const [filterId, setFilterId] = useState(11);

  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await authAxios.get(`Master/danh-sach-loai-san-pham`);
        setCategories(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const filterFunction = async () => {
      const filterProducts = {
        filter: {
          danhmucSpId: [filterId],
          text: "",
          nguoiPhuTrach: "",
        },
        pageSize: 20,
        pageIndex: 1,
      };
      try {
        const res = await authAxios.post(
          "/SanPham/search-spv1",
          filterProducts
        );
        setProducts(res.data.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    filterFunction();
  }, [filterId]);

  const handleAdd = (id: number) => {
    const productHaved = cart.includes((item: any) => item.id === id);
    if (productHaved) {
      setCart([...cart])
    } else {
      setCart([...cart, id]);
    }
  };

  return (
    <StyleMain>
      <Header />
      <Categories
        categories={categories}
        filterId={filterId}
        setFilterId={setFilterId}
        cart={cart}
      />
      <Products handleAdd={handleAdd} products={products} />
    </StyleMain>
  );
};
