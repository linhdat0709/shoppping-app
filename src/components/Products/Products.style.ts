import styled from "@emotion/styled";

export const StyleProduct = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  padding: 4px 0;
  width: 100%;
`;

export const StyleFormSearch = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  top: 0;
  width: 100%;

  & .sort:hover > button {
    background-color: #db644c;
    border-radius: 4px;
    color: #fff;
  }

  & button {
    background-color: #f3f2f3;
    padding: 4px 12px;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  & button:hover {
  }
`;

export const StyleSearch = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;

  & input {
    background-color: #f3f2f3;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    padding: 4px 12px;
    width: 100%;
  }
`;
export const StyleRenderProduct = styled.div`
  /* animation: RenderProduct_fadein__gEbXD 0.5s ease; */
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 230px);
  overflow-y: scroll;
  padding: 10px 4px;
  width: 100%;
`;
