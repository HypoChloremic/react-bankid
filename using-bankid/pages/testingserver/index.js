import React from "react";
import { BankIdClient } from "bankid";

export async function getServerSideProps({ req }){
    // console.log(req.method, req.body);
    const client = new BankIdClient();
    const pno = "197409114324";
    const message="asdasd"
    // try {
    console.log("asdasdasd")
    client
        .authenticateAndCollect({
            personalNumber: pno,
            endUserIp: "127.0.0.1",
        })
        .then(e=>console.log(e))
        .catch(e=>console.log(e))
    console.log("passed the client part");

    return {
        props: {
            name: "othername"
        }
    }
}

export default function Home({name="person"}){
    return (
        <form method="post">
            <input name="name" defaultValue={name}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

