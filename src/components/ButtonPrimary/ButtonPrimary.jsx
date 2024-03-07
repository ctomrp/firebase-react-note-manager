import s from './style.module.css'

function ButtonPrimary({className, children, type, onClick, isDisabled}) {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-primary ${s.button} ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default ButtonPrimary