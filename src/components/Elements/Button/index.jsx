const Button = (props) => {
  const {children = "...", classname="bg-blue",onClick= () => {},type} = props
  return (
    <button 
    className={`h-10 px-6 rounded-md ${classname}`}
    type={type}
    onClick={onClick}
    >{children}</button>
  )
}
export default Button;