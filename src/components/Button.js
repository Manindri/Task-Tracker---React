import PropTypes from 'prop-types';


const Button = ({ color, text, onClick}) => {
    

  return (
    <button 
        onClick={onClick} 
        style={{backgroundColor: color}} //in line styling
        className='btn'
    >
        {text}
    </button>
  )

}

export default Button;

Button.defaultProps = { 
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

//css in js
//const headingStyle = {
  //color: 'red',
  //backgroundColor: 'black',
//}