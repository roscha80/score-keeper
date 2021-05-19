import styled from 'styled-components/macro'

export default function Header() {
  return (
    <Wrapper>
      <h1>ScoreMaster 3000</h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  box-sizing: border-box;
  font-size: 80%;
  text-align: center;
  padding: 0 0 0 10px;
`
