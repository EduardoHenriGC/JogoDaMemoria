import { JogoDaMemoriaProvider } from "./JogoDaMemoriaContext";


export const AppProvider = ({ children }) => {

  return (
    <JogoDaMemoriaProvider>
      {children}
    </JogoDaMemoriaProvider>
  )
}