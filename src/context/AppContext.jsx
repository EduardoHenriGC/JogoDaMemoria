import {JogoDaMemoriaProvider } from "./JogoDaMemoriaContext";


export const AppProvider = ({children,session}) => {



    return (
    
      <JogoDaMemoriaProvider>
      
    
        
  {children}



  </JogoDaMemoriaProvider>
    
    
    )
}