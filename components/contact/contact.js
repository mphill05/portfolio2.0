import {
  ContactContainer,
  ContactSection,
  FormCol,
  FormRow,
} from "./contact.styles";
import { StyledButton } from "../../styles/styledbtn.styles";
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = {
      name,
      email,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      setSubmitting(true)
      if (res.status === 200) {
        console.log('Response succeeded!' + res.status)
        setSubmitted(false)
        setName('')
        setEmail('')
        setMessage('')
        setMessage({
          className: 'messageField',
          text: 'Thanks! I\'ll be in contact shortly!'
        })
      }
    })
  }

  // const recaptchaKey = '6LeyZuscAAAAACNo-yLQQhW4y7lEEbK857LVoXQS';
  // const recaptchaRef = useRef();


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);

  //   if (e.target !== null) {

  //     emailjs.sendForm('service_mwihdnt', 'template_l7wqe3k', form.current, 'user_aRyqERSIkRT7xK8O4txAM')
  //       .then((result) => {
  //         setMessage({
  //           className: 'bg-green-500',
  //           text: 'Thanks! I\'ll be in contact shortly!'
  //         })
  //         e.target.reset();
  //         recaptchaRef.current.reset();
  //       })
  //   } else {
  //     setMessage({
  //       className: 'bg-red-500',
  //       text: 'Sorry, there was a problem. Please try again!'
  //     })
  //   }
  //   setSubmitting(false);
  // }

  // const handleInput = e => {
  //   e.preventDefault();
  //   const inputName = e.currentTarget.name;
  //   const value = e.currentTarget.value;


  //   setState(prev => ({ ...prev, [inputName]: value }))
  // }

  return (
    <ContactSection id='contact'>
      <ContactContainer className='container'>
        <h2 className='text-2xl messageField'><svg xmlns="http://www.w3.org/2000/svg" className="contactSVG" fill="none" viewBox="0 0 22 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg> Contact Me</h2>
        <form>
          <FormRow className='row100'>
            <FormCol className='col'>
              <div className='inputBox'>
                <input
                  htmlFor='name'
                  type='text'
                  name=''
                  onChange={(e) => { setName(e.target.value) }}
                  required
                />
                <span className='text'>Name</span>
                <span className='line'></span>
              </div>
            </FormCol>
          </FormRow>

          <FormRow className='row100'>
            <FormCol className='col'>
              <div className='inputBox'>
                <input
                  htmlFor='email'
                  type='text'
                  name=''
                  onChange={(e) => { setEmail(e.target.value) }}
                  required
                />
                <span className='text'>Email</span>
                <span className='line'></span>
              </div>
            </FormCol>
          </FormRow>

          <FormRow className='row100'>
            <FormCol className='col'>
              <div className='inputBox messageInbox'>
                <textarea
                  htmlFor='message'
                  onChange={(e) => { setMessage(e.target.value) }}
                  className="ml-2 mr-5"
                  required
                />
                <span className="text">Message</span>
                <span className="line"></span>
              </div>
            </FormCol>
          </FormRow>

          <FormRow className='row100 sendMsgBtn'>
            <FormCol className='col'>
              <StyledButton
                input
                onClick={(e) => { handleSubmit(e) }}
                // disabled={submitting}
                type='submit'
              >
                {submitting ? 'Submitting...' : 'Send Message'}
              </StyledButton>
            </FormCol>
          </FormRow>
        </form>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact;