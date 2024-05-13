import React from 'react'

const ReactContext = React.createContext({
  languageState: '',
  passChangeLanguage: () => {},
})

export default ReactContext
