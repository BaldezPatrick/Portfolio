import React from 'react';
import './contact.css';
import dataContacts from './data';

const Contact = () => {
  return (
    <section id="contact">
        <h2>Contact</h2>
        <p>
          Shoot me a message via any of the contacts bellow
        </p>
        <div className="container contact-container">
            {
              dataContacts.map((contact) => {
                <a key={contact.id} href={contact.link} target="_blank" rel="noopener norferrer">{contact.icon}</a>
              })
            }
        </div>
    </section>
  )
}

export default Contact