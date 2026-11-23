import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/client'
import { ViajeProvider } from './context/ViajeContext'
import App from './App.jsx'
import './styles/global.css'

// Inicia el backend mock (MSW) antes de renderizar.
// Se activa también en producción para que funcione en GitHub Pages.
async function iniciarMocks() {
  const { worker } = await import('./mocks/browser')
  return worker.start({
    serviceWorker: { url: `${import.meta.env.BASE_URL}mockServiceWorker.js` },
    onUnhandledRequest: 'bypass',
    quiet: import.meta.env.PROD,
  })
}

iniciarMocks().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ApolloProvider client={client}>
        <ViajeProvider>
          <App />
        </ViajeProvider>
      </ApolloProvider>
    </StrictMode>,
  )
})
