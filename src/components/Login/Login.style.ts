import styled from "@emotion/styled";

export const StyleLogin = styled.div`
  align-items: center !important;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  justify-content: center !important;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
  & .login {
    animation: fadeIn 0.5s forwards;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 600px;
    min-height: 200px;
    overflow: hidden;
    padding: 8px;
    width: 70%;
  }

  & .close {
    text-align: right;
  }

  & .closeBtn {
    padding: 3px 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
    text-decoration: none;
    vertical-align: center !important;
    background-color: #dc3545;
    border-radius: 0.375rem;
    line-height: 0.5;
    border: 1px solid #dc3545;
    user-select: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  & .title {
    animation: text 0.5s ease;
    color: #db644c;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    transition: all 1s;
    white-space: nowrap;
  }

  & .typeLogin {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }

  & .Btn {
    padding: 9px 16px;
    border: 1px solid #ccc;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    min-width: auto;
  }

  & .active {
		background-color: #db644c;
		color: #fff;
  }

  & .registerBtnContainer {
  }
`;
