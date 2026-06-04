import AppRouter from './router/AppRouter'
import { Analytics } from "@vercel/analytics/next"

function App() {
  return <AppRouter />, <Analytics />
}

export default App
