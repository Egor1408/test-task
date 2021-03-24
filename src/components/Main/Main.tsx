import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Main.css'

type MainProps = {
  arrButtons: { title: string, id: number }[],
}

const Main: React.FC<MainProps> = ({ arrButtons }) => {
  const [hoverState, setHoverState] = useState(false)
  const hoverStateHandler = (state: boolean) => {
    setHoverState(state)
  }

  return (
    <div
      className='main'
      onMouseEnter={() => setHoverState(true)}
    >

      {hoverState ? <Modal checkHover={hoverStateHandler} arrButtons={arrButtons} />
        : <React.Fragment>
          <div className='popular-label'>
            <span>Popular</span>
          </div>
          <div className='microgaming-label'>
            <span>MicroGaming</span>
          </div>
        </React.Fragment>}
    </div>
  )
}

export default Main