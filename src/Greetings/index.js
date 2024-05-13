import ReactContext from '../ReactContext'

import {Div, UnorderedList, Button, Img} from './StyledComponents'

const Greetings = () => {
  return (
    <ReactContext.Consumer>
      {value => {
        const {languageState, languageGreetingsList, passChangeLanguage} = value
          return (
            <Div>
              <h1>Multilingual Greetings</h1>
              <UnorderedList>
                {languageGreetingsList.map(each => {
                  const changelanguage = () => {
                    passChangeLanguage(each)
                  }
                  return (
                    <li key={each.id}>
                      <Button
                        onClick={changelanguage}
                        isTrue={languageState.id === each.id}
                      >
                        {each.buttonText}
                      </Button>
                    </li>
                  )
                })}
              </UnorderedList>
              <Img
                alt={languageState.imageAltText}
                src={languageState.imageUrl}
              />
            </Div>
          )
      }}
    </ReactContext.Consumer>
  )
}

export default Greetings
