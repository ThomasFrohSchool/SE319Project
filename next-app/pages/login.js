import Link from "next/link"
import Head from "next/head"
import styles from "../styles/login_styles.module.css"
import React, { useEffect } from 'react'
import { useCookies, Cookies } from "react-cookie"
import NavBar from "../components/NavBar"
import Router from "next/router"
import { loginUser } from "../services/UserService"

async function tryLogin(username, password) {
    var hello;
    const user = {
      uname: username,
      pword: password,
    }

    await loginUser(user).then(function(res)  {
        //console.log(res);
        //res = JSON.stringify(res);
        console.log("In function: ");
        console.log(res);
        hello = res;
    });
    return hello;
}

function getNameFromCookie(cname) {
    const cookies = new Cookies();
    return cookies.get(cname);  
}


export default function Login() {

    const [cookie, setCookie] = useCookies(["user"])
    const router = Router

    var uname = "";
    var pword = "";
    var response;

    const handleSignIn = async () => {
        const user = {
            uname: uname,
            pword: pword,
        }
        response = await tryLogin(uname, pword); //handle API call to sign in here.
        console.log("In main: ");
        console.log(response);

        if(response != null) {
            setCookie("user", uname, {
                path: "/",
                //maxAge: 10, // 600 = Expires after 10 min
                sameSite: true,
            })
            console.log("Cookie set");
        }
        else {
            alert("Login failed!");
        }
    }

    useEffect(() => {
        if (getNameFromCookie("user")) {
            Router.push("/");
        }
    })

    return (
        <>
            <Head>
                <title>Chess 2 | Login</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <main className={styles.main}>  
                <NavBar />
                <div className={styles.body}>
                    <fieldset className={styles.login_form}>
                        <legend className={styles.login_form_label}>Login</legend>
                        <form>
                            <table className={styles.table_form}>
                                <tbody>
                                    <tr className={styles.table_row}>
                                        <td className={styles.table_label}><label htmlFor="uname">Username</label></td>
                                        <td className={styles.table_entry}><input type="text" name="uname" className={styles.input_field} id="uname" onChange={event => uname = event.target.value}/></td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_label}><label htmlFor="pword">Password</label></td>
                                        <td className={styles.table_entry}><input type="password" name="pword" className={styles.input_field} id="pword" onChange={event => pword = event.target.value}/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={styles.button_format}>
                                <Link href="/register"><a><input type="button" value="Register"  className={styles.login_button}/></a></Link>
                                <input type="button" value="Login"  className={styles.login_button} onClick={handleSignIn} id="loginSubmit"/>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </main>
        </>
    );
}