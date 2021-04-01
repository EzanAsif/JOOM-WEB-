import React from 'react'
import './styles.css'

const ContactUs = () => {
    return (
        <div className = "ContactUs">
            <div className="title">
                How to contact us
            </div>
            <div className="legalAddDesc">
                Legal address:
            </div>
            <div className="legalAdd">
                Riga, Gustava Zemgala Street, 78-1, LV-1039
            </div>
            <div className="contactDesc">
                Contact our PR & Media team — 
                <a href="mailto:pr@joom.com">pr@joom.com</a>
            </div>
            <div className="contactDesc">
            For inquiries about your orders — 
                <a href="mailto:support@joom.com">support@joom.com</a>
            </div>
        </div>
    )
}

export default ContactUs
