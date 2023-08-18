import styled from 'styled-components';

export const InnerContainer = styled.div`
    padding: 30px;
    background-image: linear-gradient(
        50deg,
        hsl(0deg 0% 0%) 0%,
        hsl(0deg 2% 0%) 14%,
        hsl(0deg 3% 1%) 20%,
        hsl(0deg 5% 1%) 25%,
        hsl(0deg 6% 1%) 30%,
        hsl(0deg 8% 1%) 34%,
        hsl(0deg 10% 2%) 37%,
        hsl(0deg 12% 2%) 41%,
        hsl(0deg 14% 2%) 45%,
        hsl(0deg 16% 2%) 48%,
        hsl(0deg 17% 3%) 52%,
        hsl(0deg 18% 3%) 55%,
        hsl(0deg 18% 4%) 59%,
        hsl(0deg 19% 4%) 63%,
        hsl(0deg 20% 4%) 66%,
        hsl(0deg 21% 5%) 70%,
        hsl(0deg 21% 5%) 75%,
        hsl(0deg 22% 6%) 80%,
        hsl(0deg 23% 6%) 86%,
        hsl(0deg 24% 7%) 100%
    )
`

export const FormTitle = styled.h2`
    margin-top: 0px;
    font-weight: 600;
    font-size: 48px;
    line-height: 40px;
    margin-bottom: 70px;
`

export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 18px;
`
export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 8px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fffae1;
  border-radius: 2px
`

export const Button = styled.button`
  width: 110px;
  height: 40px;
  padding: 8px;
  background-color: transparent;
  font-size: 16px;
  color: #fffae1;
  border: 1px solid #fffae1;
  border-radius: 2px
`