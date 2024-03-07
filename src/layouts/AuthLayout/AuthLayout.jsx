import s from './style.module.css'
import { ReactComponent as LogoSGV } from 'assets/images/logo.svg'

function AuthLayout({children}) {
    const header = (
        <div className={s.header}>
            <LogoSGV className={s.logoTop} />
            <h3 className={s.logoTitle}>Notomatic</h3>
        </div>
    )

    const background = (
        <div>
            <div className='d-flex'>
                <LogoSGV className={s.logo} />
                <h1 className={s.bgTitle}>Notomatic</h1>
            </div>
            <p className='text-white'>One place for the team notes</p>
        </div>
    )

  return (
    <div className={s.root}>
        {header}
        <div className={s.leftSection}>
        {children}
        </div>
        <div className={`${s.rightSection} d-none d-lg-flex`}>{background}</div>
    </div>
  )
}

export default AuthLayout