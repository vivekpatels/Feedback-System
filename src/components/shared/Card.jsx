import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.defaultProps = {
    reverse : false,
}

Card.prototype = {
    children: PropTypes.node.isRequired,
    reverse : PropTypes.bool.isRequired,
}

export default Card


// here children is taken, if you see Card as Parent Component it contains whatever between
// its opening n closing is its children so here in Child component, it is destructured as children to take
// whatever it's parent holds inside opening and closing tag