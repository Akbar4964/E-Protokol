import styled from "styled-components";

export const Footers = styled.div`
  .footer {
    height: auto;
    padding: 30px 0;
    background-color: #208667;
  }

  .row {
    display: flex;
    justify-content: space-between;

    .developed {
      p {
        color: #fff;
        font-size: 22px;
        font-family: Inter;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: -0.36000001430511475px;
        text-align: left;
      }

      h1 {
        color: #fff;
        font-size: 15px;
        font-family: Inter;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: -0.36000001430511475px;
        text-align: left;
      }
    }

    .row1 {
      display: flex;
      gap: 50px;

      ul {
        li {
          margin-top: 7px;
          color: #fff;
          font-size: 15px;
          font-family: Inter;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: -0.36000001430511475px;
        }
      }
    }

    .row2 {
      li {
        margin-top: 10px;
        display: flex;
        align-items: center;
        gap: 7px;

        a {
          color: #fff;
          font-size: 15px;
          font-family: Inter;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: -0.36000001430511475px;
        }
      }
    }
  }
`;
