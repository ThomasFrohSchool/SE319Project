import styles from '../styles/nav_bar.module.css'
import { Cookies } from "react-cookie"
import Link from "next/link"

function getNameFromCookie(cname) {
  const cookies = new Cookies();
  return cookies.get(cname);  
}

export default function NavBar() {

  const user = getNameFromCookie("user");
  var pageHeader;

  if (!user) {
    pageHeader = (
      <>
        <div className={styles.bar}>
          <div className={styles.button_bar}>
            <Link href="/login"><input type="submit" value="Login"  className={styles.button} id="loginButton"/></Link>
            <Link href="/register"><a><input type="button" value="Register" className={styles.button} id="regButton"/></a></Link>
            <Link href="/"><input type="button" value="Home"  className={styles.button} id="homeButton"/></Link>
          </div>
        </div>
      </>
    );
  }
  else {
    pageHeader = (
      <>
        <div className={styles.bar}>
          <p className={styles.user_text} id="welcomeTag">Hello, <strong>{user}</strong>!</p>
        </div>
      </>
    );
  }

  return (
    <>
      {pageHeader}
    </>
  );
}