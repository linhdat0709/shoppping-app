import styled from "@emotion/styled";

export const StyleItem = styled.div`
  &.item {
    border-radius: 4px;
    cursor: pointer;
    height: 350px;
    margin: 8px;
    padding: 4px;
    -webkit-user-select: none;
    user-select: none;
    width: calc(33.33333% - 16px);
  }

  &.item:hover {
    box-shadow: 0 0 8px rgb(0 0 0 / 12%);
    outline: 1px solid #db644c;
		

  }

  & .itemImg {
    align-items: center;
    display: flex;
    height: 60%;
    overflow: hidden;
    width: 100%;
  }

  & img {
    width: 100%;
    border-style: none;
    vertical-align: middle;
		transition: all 0.3s ease-in-out;
  }

`;


export const StyleItemTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 4px;
  overflow: hidden;
  padding: 0 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: uppercase;
`;

export const StyleItemSold = styled.div`
  color: #ccc;
  font-size: 12px;
  padding: 0 4px;
`;
export const StyleItemPrice = styled.div`
  cursor: auto;
  padding: 8px 4px;
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: space-between;

  & .itemPrice {
    color: #db644c;
    font-size: 16px;
    font-weight: 500;
    padding: 4px 0;
  }

  & .itemDiscount {
    color: #ccc;
    text-decoration: line-through;
    font-size: 14px;
  }
`;

export const StyleItemAction = styled.div`
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  padding: 0 4px;

  & .buttonInline {
    border: 1px solid #ccc;
    min-width: auto;
  }

  & .buttonInline:hover {
    border: 1px solid #db644c;
    color: #db644c;
    cursor: pointer;
  }
`;
