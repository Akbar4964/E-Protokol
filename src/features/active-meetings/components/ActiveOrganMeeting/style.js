import styled from "styled-components";

export const ActivatedMeetings = styled.div`
  margin-top: 40px;
  margin-bottom: 136px;
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
  .organ-title {
    font-family: Inter;
    font-size: 28px;
    font-weight: 700;
    line-height: 33.89px;
    text-align: left;
    color: #208667;
    text-transform: uppercase;
  }

  .active-meetings {
    width: 100%;
    height: 121px;
    border-radius: 20px;
    border: 1px solid #ddf8f0;
    margin-top: 17px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    &:hover {
      border: 1px solid #208667;
    }
  }

  .meeting-protokol {
    width: 76px;
    height: 53px;
    border: 1px solid #208667;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    text-align: left;
    color: #208667;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .col > p {
    padding: 5px 0;
  }

  .meeting-status {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    text-align: left;
    color: #000;
  }

  .meeting-time {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: left;
    color: #000;
  }

  .meeting-title {
    font-family: Inter;
    font-size: 22px;
    font-weight: 700;
    line-height: 26.63px;
    text-align: left;
    color: #208667;
  }

  .meeting-btn {
    display: flex;
    align-items: center;
  }

  .ant-btn {
    width: 172px;
    height: 38px;
    border-radius: 8px;
    border: 1px solid #208667;
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    color: #208667;
    background-color: #fff;
    margin-top: 20px;
    cursor: pointer;
  }

  .nodata > img {
    width: 350px;
  }

  .nodata {
    text-align: center;
  }
`;
