import Card from './Card'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'
import { useModalContext } from '../context/modal-context'
import './modal.css'

const Modal = ({className, children}) => {
  const {showModal} = useModalContext();
  return (
    <Fragment>
        {
            showModal && ReactDOM.createPortal(<>
            <Card className={className}>{children}</Card>
            </>, document.querySelector('#overlays'))
        }
    </Fragment>
  )
}

export default Modal