export const Button = (props) => {
  const {children="...", classname="bg-black", type, onClick= () => {}} = props;
  return (
    <button 
      className={`h-10 rounded-md ${classname}`} // button ini mengatur default button jika tidak menggunakan className
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;