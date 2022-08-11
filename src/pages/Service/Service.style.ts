import styled from "@emotion/styled";

export const StyleServicePage = styled.div`
  height: 100vh;
  justify-content: space-between;
  padding: 20px;
  position: relative;
`;

export const StyleService = styled.div`
  background-color: #fde5e4;
  display: flex;
  height: 300px;
  justify-content: center;
  padding: 8px 4px;
`;

export const StyleServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  max-width: 800px;
  position: absolute;

  & .title {
    color: #db644c;
    font-size: 24px;
    text-align: center;
  }

  & .formInput {
    margin: 4px 0;
    position: relative;
  }

  & .input {
    font-size: 16px;
    padding: 12px;
    touch-action: manipulation;
    overflow: visible;
  }

  & .formControl {
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  & .formControl:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }

  & .btn {
    font-size: 12px;
    padding: 12px 20px;
    position: absolute;
    right: 1%;
    top: 50%;
    transform: translate(-1%, -50%);
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid #dc3545;
    border-radius: 0.375rem;
    background-color: #dc3545;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover{
      color: #fff;
      background-color: #bb2d3b;
      border-color: #b02a37;
    }
  }

  
  & .bg {
    background-image: url(https://stupendous-florentine-180ebc.netlify.app/static/media/bg.74a3ec5cd9a4ae0fdb48.png);
    background-position: 60%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 180px;
    width: 100%;
  }
`;
