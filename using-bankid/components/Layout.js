import React from "react";
import NavbarTailwind from "./NavbarTailwind";

export default function Layout({children}){
    return (
        <>
            <NavbarTailwind />
            <main>{children}</main>
        </>
    )
}