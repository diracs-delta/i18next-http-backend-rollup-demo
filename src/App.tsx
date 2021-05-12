import React, { useState } from 'react'
import i18n, { InitOptions } from 'i18next';
import logo from './logo.svg'
import './App.css'
import I18NextHttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from 'react-i18next';

const i18nConfig: InitOptions = {
  lng: 'en-US',
  fallbackLng: 'en-US',
  ns: ['glossary'],
  defaultNS: 'glossary',
  nonExplicitSupportedLngs: true, // use `en-US` if receiving `en` in supported languages
  load: 'currentOnly', // do not load `en` if `en-US` is already being loaded
  interpolation: {
    escapeValue: false, // not needed for react
  },
  react: {
    useSuspense: false, // do not use experimental react suspense component
  },
};

i18n
  .use(initReactI18next)
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .init(i18nConfig)

function App() {
  const { ready, t } = useTranslation();
  const [count, setCount] = useState(0)

  if (!ready) {
    return <></>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          My country is {t('myCountry')}
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
