import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <footer className="bg-dark text-light text-center py-3 mt-4">
        <p className='p-0 m-0'>&copy; {new Date().getFullYear()} Dr. Kishorebabu Dasari | All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Footer