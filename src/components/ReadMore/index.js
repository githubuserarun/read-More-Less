import {useState} from 'react'
import {
  BgContainer,
  Button,
  ContentContainer,
  Description,
  H1,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [value, setValue] = useState('false')

  const onClickBtn = () => {
    setValue(prev => !prev)
  }

  return (
    <BgContainer>
      <H1>React Hooks</H1>
      <p>Hooks are a new addition to react </p>
      <ContentContainer>
        <img
          width="600px"
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {value ? reactHooksDescription.slice(0, 170) : reactHooksDescription}
        </Description>
        <Button onClick={onClickBtn}>
          {value ? 'Read More' : 'Read Less'}
        </Button>
      </ContentContainer>
    </BgContainer>
  )
}
export default ReadMore
