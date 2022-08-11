import styled from "@emotion/styled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const StyleHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
  max-height: 75px;
`;
export const StyleHeaderTitle = styled.div`
  -webkit-user-select: none;
  user-select: none;
  & img {
    max-width: 100px;
    vertical-align: middle;
    /* max-height: 22px; */
  }
  & p {
    padding-left: 3px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export const StyleHeaderForm = styled.div`
  align-items: center;
  display: flex;
`;

export const StyleHeaderServcie = styled.div`
  margin-right: 16px;
`;

export const StyledHeaderServiceList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  & a {
    border-bottom: 2px solid transparent;
    cursor: pointer;
    padding: 4px 12px;
    text-decoration: none;
  }

  & a,
  a[href] {
    background-color: transparent;
    color: #000;
    display: block;
    height: 100%;
    text-decoration: none;
    width: 100%;
  }

  & a:hover{
    border-bottom: 2px solid #db644c;
    color: #db644c;
  }
`;

export const StyleHeaderSMService = styled.div`
  display: none;
  margin-right: 20px;
`;

export const StyledServiceIcon = styled(ArrowDropDownIcon)`
  margin-right: 20px;
  display: none;
`;

export const StyledHeaderLogin = styled.div`
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;

  & .headerLogin {
    font-weight: 700;
  }
`;

export const StyleHeaderSubLogin = styled.div`
  z-index: 9999;
  position: absolute;
  inset: 0px 0px auto auto;
  margin: 0px;
  transform: translate(-28px, 79px);
`;

export const StyleHeaderSubLoginItem = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 12%);
  max-height: 400px;
  min-width: 200px;
  outline: none;
  padding: 8px 4px;
  
`;

export const StyleButton = styled.button`
  align-items: center;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  display: inline-flex;
  display: flex;
  font-size: 14px;
  min-width: 120px;
  padding: 9px 16px;
  -webkit-user-select: none;
  user-select: none;

  &.buttonLarge {
    text-align: center;
    width: 100%;
  }

  &.buttonLarge:hover{
    border: 1px solid #db644c;
    color: #db644c;
    cursor: pointer;
  }

  &.buttonOutline {
		border: 1px solid #db644c;
	}

  &.buttonDisable {
    background-color: #bc7e7e;
    cursor: none;
    opacity: .3;
  }

  & .buttonContent {
    margin-left: 8px;
    text-transform: capitalize;
  }

  & .buttonIcon{
    font-style: 14px;
  }
  

`;
