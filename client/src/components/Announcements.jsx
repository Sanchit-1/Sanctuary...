import styled from 'styled-components'
const Container=styled.div`
    height: 30px;
    background-color: #f1a761;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`

const Announcements = () => {
  return (
    <Container>
      Super Deal! Get 50% OFF
    </Container>
  )
}

export default Announcements
