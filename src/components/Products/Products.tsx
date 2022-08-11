import { Item } from "../Item/Item";
import {
  StyleFormSearch,
  StyleProduct,
  StyleRenderProduct,
  StyleSearch,
} from "./Products.style";

interface Props {
  products: any;
  handleAdd : any
}

const Products = (props: Props) => {
  const { products ,handleAdd } = props;

  const productsImg = products.map((item: any) => item.sanPhamTepDinhKems);

  const newProductsImgArr = productsImg.flat();

  console.log("newProductsImgArr",newProductsImgArr)

  return (
    <StyleProduct>
      <StyleFormSearch>
        <div className="sort">
          <button>Sort Price</button>
        </div>
        <StyleSearch>
          <input placeholder="search" />
        </StyleSearch>
      </StyleFormSearch>
      <StyleRenderProduct>
        <Item handleAdd = { handleAdd } imgURL={newProductsImgArr} />
      </StyleRenderProduct>
    </StyleProduct>
  );
};

export default Products;
