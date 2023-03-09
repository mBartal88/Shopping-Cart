import { createContext, useState, ReactElement } from "react";

export type UserObjectType = {
    id: string
    email: string
    pw: string
}

export type UserContextType = {
    user: UserObjectType | null,
    setUser: React.Dispatch<React.SetStateAction<UserObjectType | null>>
}

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const UserContext = createContext<null | UserContextType>(null)

export const UserProvider = ({ children }: ChildrenType): ReactElement => {
    const [user, setUser] = useState<UserObjectType | null>(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}