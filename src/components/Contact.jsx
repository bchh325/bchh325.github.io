import React, { useRef, useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { BsSendFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'
import styles from './Contact.module.css'
import { notification } from 'antd'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null)

  const [isSending, setIsSending] = useState(false)
  const [inputs, setInputs] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })

  const copyHandler = () => {
    notification.destroy()
    navigator.clipboard.writeText("chhorb.bryan@gmail.com")
    notification.success({
      message: "Email address copied!",
      placement: 'top',
      duration: 1.5
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    if (inputs.message !== "" && inputs.user_email !== "" && inputs.user_name !== "" && !isSending) {
      setIsSending(true)
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          console.log(formRef.current)
          notification.destroy()
          notification.success({
            message: "Email Sent!",
            placement: 'top',
            duration: 3
          })
          setIsSending(false)
          setInputs({
            user_name: "",
            user_email: "",
            message: ""
          })
        }, (error) => {
          setIsSending(false)
          console.log(error.text);
        });
    } else {
      if (!isSending) {
        notification.destroy()
        notification.error({
          message: "One or more fields are empty!",
          placement: 'top',
          duration: 3
        })
      } else {
        notification.destroy()
        notification.error({
          message: "Please wait for the current email to finish sending.",
          placement: 'top',
          duration: 3
        })
      }
    }

  }

  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Email Me!</span>
      </div>
      <div className={styles.sendInfo}>
        <div className={styles.buttons}>
          <div onClick={copyHandler}>chhorb.bryan@gmail.com</div>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className={styles.forms}>
          <input onChange={handleInputs} value={inputs.user_name} placeholder='Name' type="text" name="user_name" />
          <input onChange={handleInputs} value={inputs.user_email} placeholder='Your Email' type="email" name="user_email" />
          <textarea onChange={handleInputs} value={inputs.message} placeholder='Message' cols="30" rows="10" name="message" />
        </form>
        <div className={styles.buttons}>
          <div onClick={sendEmail}>Send <BsSendFill /></div>
        </div>
      </div>
    </div>
  )
}

//service_2wdpb3t
