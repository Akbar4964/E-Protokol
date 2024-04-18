import styled from "styled-components";

export const Programs = styled.div`
  margin: 30px 0;

  .program-title {
    margin: 30px 0;
    font-family: Inter;
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    color: #208667;
  }

  .program {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .program-card {
      width: 262px;
      height: 420px;
      padding: 20px;
      border-radius: 24px;
      box-shadow: 0px 2px 45px 0px #00000014;
      text-align: center;

      &_title {
        width: 222px;
        height: 46px;
        margin-top: 20px;
        font-family: Inter;
        font-size: 19px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: center;
        color: #208667;
      }

      &_text {
        height: 30px;
        margin-top: 10px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: center;
        color: #000000;
      }
      button {
        width: 222px;
        height: 48px;
        margin-top: 22px;
        border: 0;
        border-radius: 12px;
        background-color: #208667;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
