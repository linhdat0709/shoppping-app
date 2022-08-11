import styled from "@emotion/styled";

export const StyleCategories = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 4px 16px;
  width: 100%;
`;

export const StyleCategoriesLeft = styled.div`
  flex: 1 1;
  margin-right: 30px;
  /* overflow-x: scroll; */
  position: relative;
`;

export const StyleCategoriesLeftList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

export const StyleCategoriesLeftItem = styled.li`
  border: 1px solid #ccc;
  cursor: pointer;
  margin-right: 10px;
  min-width: 100px;
  /* text-align: center; */
  -webkit-user-select: none;
  user-select: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;


  &.active {
    background-color: rgb(219, 100, 76);
    color: rgb(255, 255, 255);
  }
`;

export const StyleCategoriesRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-width: 250px;
  & .categoriesTitle {
    display: inline-block;
    font-weight: 500;
    padding-left: 12px;
  }

  & .categoriesCountPrice {
    color: #db644c;
    cursor: pointer;
    font-size: 16px;
    padding: 0 8px;
    text-align: center;
    width: 80px;
  }
`;

export const StyleCategoriesLeftItemSeeMore = styled.div`
  border: 1px solid #ccc;
  cursor: pointer;
  margin-right: 10px;
  min-width: 100px;
  /* text-align: center; */
  -webkit-user-select: none;
  user-select: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5px 0;
`;

export const StyleSortList = styled.div`
  z-index: 9999;
  position: absolute;
  /* inset: 0px 0px auto auto; */
  margin: 0px;
  transform: translate(-28px, 79px);
  top: -32px;
  right: -30px;
  overflow: scroll;
  overflow-x: hidden;
  height: 200px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }
`;

export const StyleSortItem = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 12%);
  max-height: 400px;
  min-width: 200px;
  outline: none;
  padding: 8px 4px;
`;

export const StyleCategoriesPay = styled.div`
  position: relative;
  & .categoriesCountProduct {
    align-items: center;
    background-color: #94f696;
    border-radius: 50%;
    color: #db644c;
    display: flex;
    font-size: 12px;
    font-weight: 700;
    height: 25px;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    right: -10px;
    top: -10px;
    -webkit-user-select: none;
    user-select: none;
    width: 25px;
  }
`;
