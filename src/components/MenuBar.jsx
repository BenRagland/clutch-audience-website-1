import React from 'react'
import ListenerButton from './Buttons/ListenerButton'
import MenuTab from './Buttons/MenuTab'
import CtaButton from './Buttons/CtaButton'

function MenuBar() {
  return (
    <div>
        <img />
        <div className="ButtonContainer">
            <ListenerButton />
            <MenuTab name="" />
            <MenuTab name="" />
            <MenuTab name="" />
            <CtaButton />
        </div>

    </div>
  )
}

export default MenuBar