import React from 'react'

function Footer() {
  return (
    <div className='mt-5'>
      <div className='text-center pb-3 mynav ' style={{ height: '5rem' }}>
        <div className="text-center pt-2 " id="social-cont">
          <a target="_blank" href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=gayat2000@gmail.com"><i class="fa-regular fa-envelope"></i></a>
          <a target="_blank" href="https://github.com/gayathirithavamani"><i class="fa-brands fa-github"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/gayathiri-t-717304251"><i class="fa-brands fa-linkedin"></i></a>
          <a target="_blank" href="https://wa.me/+917540019197"><i class="fa-brands fa-whatsapp"></i></a>
          <a target="_blank" href=""><i class="fa-brands fa-instagram"></i></a>
        </div>

        <div className="text-center myname">
          @2022 Designed by Gayathiri T
        </div>
      </div>

    </div>
  )
}

export default Footer