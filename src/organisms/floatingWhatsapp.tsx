import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'


const FloatingWhatsapp = () => {
  return (
     <>
     <FloatingWhatsApp
      phoneNumber="+918875023261"
      accountName="The Buddha Institute"
       avatar="/final-logo-new.svg"
      chatMessage='Hello, How can we help you?'
      statusMessage='Feel free to connect with us'
      placeholder='Type something...'
      notification={true}
      notificationSound={true}
     allowEsc={true}
     allowClickAway={true}
     />
     </>
  )
}

export default FloatingWhatsapp
