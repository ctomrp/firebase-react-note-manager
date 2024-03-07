import s from './style.module.css'

function ButtonPrimary({children, type, onClick, isDisabled}) {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-primary ${s.button}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default ButtonPrimary