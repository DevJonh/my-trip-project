import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  max-width: var(--container);
  height: 100vh;
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);

  strong {
    color: var(--highlight);
  }
`

export const Body = styled.div`
  p {
    max-width: 50%;
    margin: 0 auto;
    text-align: left;
    line-height: var(--medium);
  }
`
