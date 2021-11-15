import { useState, useEffect } from "react"
import React from "react"
import Validate from "./Validate"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import notify from "./toast"
import styles from "./SignUp.module.css"
import { Link } from "react-router-dom"

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  useEffect(() => {
    setErrors(Validate(data, 'signup'))
  }, [data])

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked })
    } else {
      setData({ ...data, [event.target.name]: event.target.value })
    }
  }

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (!Object.keys(errors).length) {
      notify("You signed up seccessfully", "success")
    } else {
      notify("Invalid data!", "error")
      setTouched({
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      })
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>SignUp</h2>
        <div className={styles.formField}>
          <label>Username</label>
          <input
            className={(errors.username && touched.username) ? styles.uncompleted : styles.formInput}
            type="text"
            name="username"
            onChange={changeHandler}
            onBlur={focusHandler}
          />
          {errors.username && touched.username && (
            <span>{errors.username}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
            type="text"
            name="email"
            onChange={changeHandler}
            onBlur={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
            type="password"
            name="password"
            onChange={changeHandler}
            onBlur={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
            type="password"
            name="confirmPassword"
            onChange={changeHandler}
            onBlur={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    name="isAccepted"
                    onChange={changeHandler}
                    onBlur={focusHandler}
                />
                <label>I accept terms & policy</label>
                {errors.isAccepted && touched.isAccepted && (
                    <span>{errors.isAccepted}</span>
                )}
            </div>
        </div>
        <div className={styles.formButtons}>
            <Link to="/login">Login</Link>
            <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default SignUp
