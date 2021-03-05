import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: var(--container);
  margin: auto;
  padding: 0 2%;
  margin-bottom: 4%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
`
export const Body = styled.div`
  margin-bottom: var(--medium);
  p {
    margin: 0 auto;
    text-align: left;
    line-height: var(--medium);
  }
`
export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);
  img {
    border-radius: 8px;
    border: 1px solid #eeeeee;
    z-index: 3;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
