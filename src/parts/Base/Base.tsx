import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Base: React.FC<{children: ReactNode}> = (props) => {
    return(
        <div>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}