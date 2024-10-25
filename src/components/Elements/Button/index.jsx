const Button = (props) => {
  // Destructuring props
  const {children = '...', classname = 'bg-black', onClick = () => {}, type} = props; 

  return (
    <button 
      className={`h-10 px-6 font-semibold rounded-md ${classname}`} // Backticks digunakan untuk template literal
      type={type} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
