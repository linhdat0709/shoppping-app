import styled from "@emotion/styled";

export const StyleSidebar = styled.div`
  width: 350px;
`;

export const StyleSidebarWrapper = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 20px;
  overflow-y: scroll;
  padding: 10px;
  width: 100%;
`;

export const StyleSidebarSlide = styled.div`
  cursor: pointer;
  transition: ease 1000ms;
  width: 100%;
`;

export const StyledSidebarItem = styled.div`
  position: relative;
  width: 100%;
  
  & .sidebarItemImg {
    background-color: #fff;
    & img {
      width: 100%;
      max-height: 100%;
    }
  }
`;

export const StyleSidebarItemTitle = styled.div`
  position: absolute;
  background-color: #fff;
  border-left: 5px solid #db644c;
  color: #000;
  font-family: Comfortaa, cursive;
  font-size: 16px;
  font-weight: 700;
  left: 10px;
  max-width: 300px;
  overflow: hidden;
  padding: 2px 8px 0;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  bottom: 3%;
`;

export const StyleSidebarContactFb = styled.div`
  margin: 20px 0;

  & .sidebar_title--feedback {
    border-left: 5px solid #fa3add;
    font-size: 18px;
    font-weight: 700;
    margin: 10px 0;
    padding-left: 8px;
  }
`;

export const StyleSidebarContentFeedback = styled.div`
  position: relative;

  & img {
    width: 100%;
  }
`;

export const StyleSidebarTextFeedback = styled.div`
  left: 20%;
  position: absolute;
  top: 60%;
  -webkit-user-select: none;
  user-select: none;
  width: 60%;

  & .sidebar_text--name {
    border-bottom: 2px solid #000;
    color: #db644c;
    display: inline;
    font-size: 14px;
    padding: 2px 0;
  }

  & .sidebar_text--info {
    font-family: Dancing Script, cursive;
    font-size: 16px;
    margin-top: 4px;
    padding: 2px 8px;
  }
`;

export const StyleSidebarContact = styled.div`
  padding: 10px 0;

  & .sidebarTitle {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const StyleSidebarSocial = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;

  & .sidebarItem {
    color: #084f23;
    cursor: pointer;
    font-size: 30px;
    /* height : 1em; */
  }

  & .sidebarItemIcon {
    font-size: 28px;
  }
`;

export const StyleSidebarInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;

  & .sidebar_item--info {
    font-size: 14px;
  }

  & span {
    display: inline-block;
    width: 70px;
  }
`;
export const StyleSidebarCopyRigt = styled.div`
  color: #ccc;
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  & .sidebar_copyright--icon {
    margin-right: 5px;
  }
`;
