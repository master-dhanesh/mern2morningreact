import { createContext } from "react";

export const ImagesContext = createContext();

const Context = (props) => (
    <ImagesContext.Provider {...props}>{props.children}</ImagesContext.Provider>
);

export default Context;
