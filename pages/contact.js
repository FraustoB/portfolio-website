
import Head from 'next/head';
import styles from '../styles/contact.module.scss';
import Navbar from '../comps/Navbar';
import { useState } from 'react';
import emailjs from 'emailjs-com';

import Image from 'next/image';




export default function Contact() {
    const [contInfo, setContInfo]=useState(
        {
            name: '',
            email: '',
            subject: '',
            message: '',
            hasSent: false
        }
    )
    const handleChange=(e) => setContInfo({ ...contInfo, [e.target.name]: e.target.value })
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_jaqy12b', 'template_jdnim5a', e.target, 'user_WL8FlxANz3H5VBWNI7AB9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        // sendEmail(e);
        setContInfo({
            name: '',
            email: '',
            subject: '',
            message: '',
            hasSent: true
        })
    }

    return (
        <>
            <Head>
                <title> frausto | Contact </title>
                <meta name='keywords' content='frausto' />
            </Head>
            <Navbar />
            <div className={styles.Background}>
                <div className={styles.Container}>

                    <span>
                        <Image
                            src="/email.png"
                            alt='mail'
                            height={45}
                            width={45}
                        />
                        <h2> Lets get in touch</h2>
                    </span>

                    <form onSubmit={handleSubmit}>
                        {contInfo.hasSent? <p>Thank you! I'll get back to you soon</p>:''}

                        <input onChange={handleChange} value={contInfo.name} name='name' id='name' placeholder='Name' />
                        <input onChange={handleChange} value={contInfo.email} name='email' id='email' placeholder='Email' />
                        <input onChange={handleChange} value={contInfo.subject} name='subject' id='subject' placeholder='Subject' />
                        <textarea onChange={handleChange} value={contInfo.message} name='message' id='message' placeholder='Message'
                            className='Contact-message' />

                        <button className='btn btn-secondary'>Send Off</button>
                    </form>

                </div>
            </div>)
        </>)
}