import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./themes/default"
import { GlobalStyle } from "./global"
import { Transactions } from "./pages/Transactions"
import { TransactionProvider } from "./contexts/TransactionsContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
      <GlobalStyle />
    </ThemeProvider>
  ) 
}