import { StyleButton } from "../Header/Header.style";
import {
  StyleItem,
  StyleItemAction,
  StyleItemPrice,
  StyleItemSold,
  StyleItemTitle,
} from "./Item.style";

interface Props {
  imgURL: any;
  handleAdd:any
}

export const Item = (props: Props) => {
  const { imgURL , handleAdd } = props;

  const PF = process.env.PUBLIC_FOLDER

  console.log("img", imgURL);

  return imgURL.map((item : any) => (
    <StyleItem className="item" key={item.id}>
      <div className="itemImg">
        <img src={ item?.url ? item.url : PF + "anh-dep-thien-nhien-3.jpg"  } alt="img" />
      </div>

      <StyleItemTitle>Áo thun nam in hình</StyleItemTitle>

      <StyleItemSold>Sold : 231</StyleItemSold>
      <StyleItemPrice>
        <div className="itemPrice">42$</div>
        <div className="itemDiscount">0$</div>
      </StyleItemPrice>
      <StyleItemAction>
        <div className="info">
          <StyleButton className="buttonInline">Details</StyleButton>
        </div>
        <div className="buy">
          <StyleButton className="buttonInline" onClick={() => handleAdd(item.id)} >Add</StyleButton>
        </div>
      </StyleItemAction>
    </StyleItem>
  ));
};
