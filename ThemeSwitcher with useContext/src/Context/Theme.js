
// this is the saecond and easiest way that generally used in companies.
// first way we did in minicontext project v did the same but in simple way. 
import { createContext,useContext } from "react";
// v can give default values to this createContext that v used to give in UseCOntext.Provider
// refer to that in miniContext

const ThemeContext= createContext({
    themeMode: 'light',
    darkTheme:()=>{},
    lightTheme:()=>{},
})
// now v dont have to make another file for provider v can do that this way and v have 
// above values that v need 
export const ThemeProvider = ThemeContext.Provider
// and here is the custom hook that get themecontext values for us
// so v dont have import useContext and UseContextProvider when v need
// so everything in single file.
export default function useTheme(){
    return useContext(ThemeContext)
}
