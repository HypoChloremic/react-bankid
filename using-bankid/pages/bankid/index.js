import React, {useState} from "react";
import { BankIdClient } from "bankid";
// 197409114324

export async function getServerSideProps({ req }){
    const client = new BankIdClient();
    const pno = "197409114324";

    const data = client
    .authenticateAndCollect({
        personalNumber: pno,
        endUserIp: "127.0.0.1",
    })
    .then(res => console.log(res.completionData))
    .catch(console.error);
    return {props: {"hello":1}}
}

export default function random(){
    const [PNR, setPNR] = useState("")
    const PostPNR = (event) => {
    //     event.preventDefault();
    //     fetch(
    //         POST /rp/v5.1/sign HTTP/1.1
    //         Content-Type: application/json
    //         Host: appapi2.bankid.com
    //         {
    //         "personalNumber":"190000000000",
    //         "endUserIp": "194.168.2.25",
    //         "userVisibleData": "IFRoaXMgaXMgYSBzYW1wbGUgdGV4dCB0byBiZSBzaWduZWQ="
    //         }
    //     )
    };

    return (
        <>
            <a href="bankid:///?redirect=google.com">Launch bankid</a>
            <form onSubmit={PostPNR}>
                <label>
                    Personnummer:
                    <input
                        value={PNR}
                        onChange={event=>setPNR(event.target.value)}
                        type="text"
                    />
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}