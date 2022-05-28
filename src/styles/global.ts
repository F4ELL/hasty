import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Work Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 400px;

    background-color: #FFF;
    border-radius: 15px;

    padding: 1.8rem 3.5rem;
    position: relative;
  }

  .react-modal-close {
    position: absolute;
    right: 1.8rem;
    top: 1.8rem;

    border: 0;
    background: transparent;

    img {
      width: 15px;
      height: 15px;
    }
  }

`