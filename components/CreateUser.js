import React from 'react'
import styles from "../styles/login_styles.module.css"
import Link from "next/link"

const CreateUser = ({onChangeForm, createUser }) => {
/*
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Last Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createUser()} className="btn btn-danger">Register</button>
                    */
    return(
        <fieldset className={styles.register_form}>
            <legend className={styles.login_form_label}>Register</legend>
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create User</h2>
                <form>
                    <form>
                        <table className={styles.table_form}>
                            <tr className={styles.table_row}>
                                <td className={styles.table_label}><label htmlFor="exampleInputEmail1">First Name</label></td>
                                <td className={styles.table_entry}><input type="text" onChange={(e) => onChangeForm(e)}  className={styles.input_field} name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" /></td>
                            </tr>
                            <tr>
                                <td className={styles.table_label}><label htmlFor="exampleInputPassword1">Last Name</label></td>
                                <td className={styles.table_entry}><input type="text" onChange={(e) => onChangeForm(e)} className={styles.input_field} name="lastname" id="lastname" placeholder="Last Name" /></td>
                            </tr>
                            <tr>
                                <td className={styles.table_label}><label htmlFor="exampleInputEmail1">Email</label></td>
                                <td className={styles.table_entry}><input type="text" onChange={(e) => onChangeForm(e)} className={styles.input_field} name="email" id="email" aria-describedby="emailHelp" placeholder="Email" /></td>
                            </tr>
                        </table>
                        <div className={styles.button_format}>
                            <button type="button" onClick= {(e) => createUser()} className="btn btn-danger" className={styles.login_button}>Register</button>
                        </div>
                        </form>
                </form>
                </div>
            </div>
        </fieldset>
    )
}

export default CreateUser