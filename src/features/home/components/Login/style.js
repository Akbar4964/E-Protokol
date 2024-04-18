import styled from "styled-components";

export const Section = styled.section`
  .row {
    display: flex;
    margin-top: 60px;
    justify-content: space-between;
  }
  .login {
    border-radius: 15px;
    text-align: center;
    padding: 30px;
    width: 317px;
    height: 444px;
    top: 200px;
    left: 958px;
    background-color: #fff;
    box-shadow: 0 0 10px grey;
    p {
      margin-top: 30px;
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0em;
      color: #868485;
    }
    .btn {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      button:last-child {
        width: 120px;
        height: 40px;
        top: 37px;
        left: 137px;
        padding: 8px, 20px, 8px, 20px;
        border-radius: 8px;
        gap: 10px;
        border: 0;
        background-color: #208667;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        color: #fff;
        cursor: pointer;
      }
      button:first-child {
        width: 120px;
        height: 40px;
        top: 37px;
        left: 137px;
        padding: 8px, 20px, 8px, 20px;
        border-radius: 8px;
        gap: 10px;
        border: 2px solid #208667;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        letter-spacing: 0em;
        color: #208667;
        cursor: pointer;
      }
    }

    .input {
      margin-top: 20px;
      input {
        width: 257px;
        height: 40px;
        padding: 8px, 20px, 8px, 20px;
        border-radius: 8px;
        gap: 10px;
        width: 100%;
        border: 0;
        background-color: #f0f0f0;
        padding: 0 10px;
        ::placeholder {
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
          line-height: 17px;
          letter-spacing: 0em;
          text-align: left;
        }
        outline-color: #208667;
      }
    }
  }
  .enterence {
    width: 100%;
    background-color: #208667;
    margin-top: 40px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    color: #fff;
    cursor: pointer;
  }
`;

export const Heros = styled.section`
  .menu {
    display: flex;
    gap: 66px;
    margin-top: 44px;
    li {
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
    }
  }
`;
