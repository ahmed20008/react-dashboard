import React, { useContext, useState, createContext } from "react";



const StateContext = createContext();

const intialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(intialState);

    const handleClick = (clicked) => {
        setIsClicked({ ...intialState, [clicked]: true })
    }

    const [screenSize, setscreenSize] = useState(undefined)

    return (
        <>
            <StateContext.Provider
                value={{
                    activeMenu,
                    setActiveMenu,
                    isClicked,
                    setIsClicked,
                    handleClick,
                    screenSize,
                    setscreenSize,

                }}
            >
                {children}
            </StateContext.Provider >
        </>
    );
}

export const useStateContext = () => useContext(StateContext);