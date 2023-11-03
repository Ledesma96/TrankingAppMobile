import { useState } from "react";
import { createContext } from "react";

export const RefreshContext = createContext(null)

export const RefreshDataProvider = ({children}) => {
    const [refresh, setRefresh] = useState(0)
    return (
        <RefreshContext.Provider value={[refresh, setRefresh]}>
            {children}
        </RefreshContext.Provider>
    )
}
