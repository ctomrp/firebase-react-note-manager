import s from './style.module.css'

function ButtonPrimary({children, onClick}) {
  return (
    <button type='button' className={`btn btn-primary ${s.button}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default ButtonPrimary