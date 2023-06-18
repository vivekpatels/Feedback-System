import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }
  return (
    <header style={headerStyles}>
        <h3>{text}</h3>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.prototype = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header

// (props) are used when we dont know how many properties are there or we are unaware n then u can use props.text and such
// ({ text }) is used when  we know what is coming as props - object destrcturing
