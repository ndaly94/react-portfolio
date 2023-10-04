import AnimatedLetters from '../AnimatedLetters';
import './index.scss'; 
import Loader from 'react-loaders';
import { useState, useEffect, useRef } from 'react';
import '../Layout/index.scss';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_9liy3js',
            'template_dmzhj5m',
            form.current,
            'ZmpTafqByQtQiLFhW'
        )
        .then(
            () => {
            alert('Message Successfully Sent')
            window.location.reload(false)
            },
            () => {
                alert('Message Failed To Send, Please Try Again')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                    </h1>
                    <p>
                        I am always looking for opportunities to work with you. If you have any questions or projects you think I may be interested in, feel free to contact me.
                    </p>
                    <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
        </div>
        </div>
    </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact