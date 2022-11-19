import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 2700px;
    height: auto;
    border-radius: 8px;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;

    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
      @media (max-width: 500px){
        grid-template-columns: repeat(auto-fill,minmax(100%,1fr)); 
        grid-auto-columns: minmax(100%,1fr);
      }
    }

    div::-webkit-scrollbar {
      height: 3px;
      background-color: ${"#03070307"};
    }
    div::-webkit-scrollbar-thumb {
      background-color: ${"#e5e5e5"};
      border-radius: 1.5px;
    }
  }
`;