import Link from "next/link"
import Head from "next/head"
import styles from "../styles/login_styles.module.css"

export default function Login() {
    return (
        <>
            <Head>
                <title>Chess 2 | Login</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <main className={styles.main}>
            <Link href="/index"><a>Register</a></Link>
                <div className={styles.body}>
                    <fieldset className={styles.login_form}>
                        <legend className={styles.login_form_label}>Login</legend>
                        <form>
                            <table className={styles.table_form}>
                                <tr className={styles.table_row}>
                                    <td className={styles.table_label}><label for="uname">Username</label></td>
                                    <td className={styles.table_entry}><input type="text" name="uname" className={styles.input_field}/></td>
                                </tr>
                                <tr>
                                    <td className={styles.table_label}><label for="pword">Password</label></td>
                                    <td className={styles.table_entry}><input type="password" name="pword" className={styles.input_field}/></td>
                                </tr>
                            </table>
                            <div className={styles.button_format}>
                                <input type="button" value="Register"  className={styles.login_button}/>
                                <input type="submit" value="Login"  className={styles.login_button}/>
                            </div>
                        </form>
                        
                    </fieldset>
                </div>
            </main>
        </>
    );
}