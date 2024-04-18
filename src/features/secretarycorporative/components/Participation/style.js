import styled from "styled-components";

export const Attends = styled.div`
  margin: 70px 0;

  .routes {
    display: flex;
    justify-content: end;
    gap: 7px;
    margin: 40px 0;
    .homepage {
      color: #20866780;
      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;
    }
    .meetingspage {
      color: #208667;
      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0.20000000298023224px;
      text-align: left;
    }
  }

  .participation-buttons {
    display: flex;
    justify-content: space-between;
  }

  .participation-active-button {
    width: 195px;
    height: 40px;
    color: #fff;
    border: 0;
    border-radius: 8px;
    background-color: #208667;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    cursor: pointer;
  }

  .participation-archive-button {
    width: 195px;
    height: 40px;
    margin-left: 20px;
    color: #208667;
    border: 1px solid #208667;
    border-radius: 8px;
    background-color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    cursor: pointer;
  }

  .participation-search-input-row {
    width: 631px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #208667;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0 20px;
  }

  .participation-search-input {
    width: 100%;
    height: 100%;
    color: #208667;
    border: 0;
    outline: 0;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    text-align: left;
    ::placeholder {
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 19.36px;
      text-align: left;
      color: #9d9d9d;
    }
  }

  .meetings-organ {
    width: 100%;
    height: 138px;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    margin-top: 30px;
    border: 1px solid #ddf8f0;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      border: 1px solid #208667;
    }
  }

  .meetings-organ-title {
    font-family: Inter;
    font-size: 22px;
    font-weight: 700;
    line-height: 26.63px;
    text-align: left;
    color: #208667;
  }

  .meetings-organ-text {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 26.63px;
    text-align: left;
    margin-top: 22px;
  }

  .meetings-organ-circle {
    width: 60px;
    height: 60px;
    margin-top: 20px;
    border-radius: 50%;
    border: 1px solid #208667;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #208667;
    font-family: Inter;
    font-size: 17px;
  }
`;
