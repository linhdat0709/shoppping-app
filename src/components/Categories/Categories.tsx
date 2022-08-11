import { useEffect, useState } from "react";
import { authAxios, CategoriesType } from "../../ConstantType/ConstantType";
import { StyleButton } from "../Header/Header.style";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  StyleCategories,
  StyleCategoriesLeft,
  StyleCategoriesLeftItem,
  StyleCategoriesLeftItemSeeMore,
  StyleCategoriesLeftList,
  StyleCategoriesPay,
  StyleCategoriesRight,
  StyleSortItem,
  StyleSortList,
} from "./Categories.style";

interface Props {
  categories: CategoriesType[];
  filterId: number;
  setFilterId: any;
  cart: any;
}

export const Categories = (props: Props) => {
  const { categories, filterId, setFilterId , cart } = props;

  const [seemore, setSeeMore] = useState<boolean>(false);

  const categoriesCollapse = categories.slice(0, 4);

  const categoriesList = categories.slice(4);

  const handleClickFilter = async (id: number) => {
    setFilterId(id);
  };

  return (
    <StyleCategories>
      <StyleCategoriesLeft>
        <StyleCategoriesLeftList>
          {categoriesCollapse.map((cate) => (
            <StyleCategoriesLeftItem
              key={cate.id}
              onClick={() => handleClickFilter(cate.id)}
              className={filterId === cate.id ? "active" : ""}
            >
              {cate.ten}
            </StyleCategoriesLeftItem>
          ))}
          <StyleCategoriesLeftItemSeeMore onClick={() => setSeeMore(!seemore)}>
            Xem thêm
            <ArrowDropDownIcon />
            <StyleSortList style={{ display: seemore ? "block" : "none" }}>
              {categoriesList.map((cate) => (
                <StyleSortItem
                  key={cate.id}
                  onClick={() => handleClickFilter(cate.id)}
                >
                  <StyleButton className="buttonLarge">{cate.ten}</StyleButton>
                </StyleSortItem>
              ))}
            </StyleSortList>
          </StyleCategoriesLeftItemSeeMore>
        </StyleCategoriesLeftList>
      </StyleCategoriesLeft>
      <StyleCategoriesRight>
        <StyleCategoriesPay>
          <StyleButton className={cart.length === 0 ? "buttonDisable" :"buttonOutline"}>
            <span>Thanh toán</span>
          </StyleButton>
          <span className="categoriesCountProduct" style = {{ display : cart.length === 0 ? "none" : "" }} >{cart.length}</span>
        </StyleCategoriesPay>
        <div className="categoriesTitle">Total</div>
        <div className="categoriesCountPrice">$0</div>
      </StyleCategoriesRight>
    </StyleCategories>
  );
};
