import React, { useState } from 'react';
import './ContactUs.css';
import { API_BASE_URL } from './Config'
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import { useEffect } from 'react';


function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [data, setData] = useState('')

  useEffect(() => {
    const API_URL = API_BASE_URL + '/api/GetAddressInfo';
    fetch(API_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data)
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate name
    if (e.target.value < 3) {
      setNameError('Please enter your valid name');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Please enter a valid phone number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    // Validate message
    if (!message.trim()) {
      setMessageError('Please enter a message');
      isValid = false;
    } else {
      setMessageError('');
    }

    // Submit the form
    if (isValid) {

      const API_URL = API_BASE_URL + '/api/ContactUs';
      fetch(API_URL, {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ name, email, phone, message }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'ok') {
            alert("Contact details successful saved");
          } else {
            alert("Something went wrong with BContactUs");
          }
          window.location.reload();
        });
    }


  };

  return (
    <>
      <div className='contactUs-base'>
        <h1 style={{ color: 'pink', marginTop: '100px', textAlign: 'center' }}>Get In Touch</h1>
        <hr style={{ marginTop: '7px' }} />
        <p className='p1'>I'd ♡ to help!</p>
        <p className='p2'>Turning vision into reality with code And design</p>
      </div>

      <div className='form-container'>
        <form className="form" onSubmit={handleSubmit}>
          <h3 style={{ textAlign: 'center', color: 'black', marginTop: '5px' }}>Contact Me</h3>

          <div className='inputBox'>
            <input type="text" className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
            <span>Name</span>
            {nameError && <div className="error">{nameError}</div>}
          </div>

          <div className='inputBox'>
            <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span>Email</span>
            {emailError && <div className="error">{emailError}</div>}
          </div>

          <div className='inputBox'>
            <input type="number" className="form-input" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <span>Phone</span>
            {phoneError && <div className="error">{phoneError}</div>}
          </div>

          <div className='inputBox'>
            <textarea className="form-input" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <span>Message</span>
            {messageError && <div className="error">{messageError}</div>}
          </div>

          <div>
            <input type='submit' className="form-btn" value='Send ➟' />
          </div>

        </form>
        <div className='contact-col'>
          <div className='m-col'>
            <h2 className='icon'><FaHome />   Address</h2>
            <div>Gandhi Nagar, Indore 453112
              {/* {(data.length !== 0) && <ul>
                <li>{data[0].address}</li>
              </ul>} */}
            </div>
          </div>

          <div className='m-col'>
            <h2 className='icon' ><FaPhone />   Phone</h2>
            <div>+91 8435125742
              {/* {(data.length !== 0) && <ul>
                <li>{data[0].phone}</li>
              </ul>} */}
            </div>
          </div>

          <div className='m-col'>
            <h2 className='icon' ><FaMailBulk />   Email</h2>
            <div>manglanagar91@gmail.com
              {/* {(data.length !== 0) && <ul>
                <li>{data[0].email}</li>
              </ul>} */}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ContactUs;
