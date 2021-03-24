import React from 'react';
import Button from '../Button/Button'
import './Modal.css';

type ModalProps = {
  checkHover: (state: boolean) => void,
  arrButtons: { title: string, id: number }[],
}
const Modal: React.FC<ModalProps> = ({ checkHover, arrButtons }) => {
  return (
    <div className='modal-wrap' onMouseLeave={() => checkHover(false)}>
      <div className='star' />
      <h1 className='title'>Name fo the game
      long long name
      </h1>
      <div className='buttonsWrap'>
        {arrButtons.map((item) => {
          return <Button key={item.id} title={item.title} />
        })}
      </div>
    </div>
  )
}


export default Modal;