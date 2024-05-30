import React from "react";
import { AuthForm } from "../componets/AuthForm/AuthForm";
import Styles from "./login.module.css"

export default function page() {
    return(
        <main className={Styles["main"]}>
            <AuthForm/>
        </main>
    )
}