import styled from "styled-components";

export const Sliders = styled.div`
  .slide {
    width: 100%;
    height: 100%;
    display: none;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .slide.active {
    display: block;
    opacity: 1;
  }

  .indicators {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .indicator {
    margin: 0 5px;
  }

  .row1 {
    h2 {
      width: 781px;
      height: 110px;
      color: #fff;
      font-family: Inter;
      font-size: 32px;
      font-weight: 700;
      line-height: 39px;
      letter-spacing: 0em;
      text-align: left;
    }

    .security {
      margin-top: 69px;
    }
  }
`;
