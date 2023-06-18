import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function AboutIcon() {
  return (
    <div className='about-link'>
        <Link to="/about">  
        <FaQuestion size={30} />
        </Link>
    </div>
  )
}

export default AboutIcon

// <a href='/about'> </>    ---> will lead to full page loading instead use <Link> from react-router-dom
// to smoothly take to specific component and <Link to='/about'> will always take to instead of href=''