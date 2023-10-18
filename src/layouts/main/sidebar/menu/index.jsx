import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { mainMenu } from '~/utils/consts'
import Button from '~/components/button'
import More from './more'
import SendBtn from './sendBtn'

export default function Menu() {
  return (
    <nav className='mt-0.5 mb-1'>
        {
            mainMenu.map((menu, index) => (
                <NavLink to={menu.path} className='py-[3px] block group' key={index}>
                    {({ isActive }) => (
                        <div className={classNames("p-3 rounded-full inline-flex transition-colors items-center gap-5 group-hover:bg-[#eff3f41a]", {"font-bold": isActive})}>
                            <div className='w-[26.25px] h-[26.25px] relative'>
                                {menu?.notifications && <span className='w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 text-[11px] flex items-center justify-center'>{menu?.notifications}</span>}
                                {isActive && menu.icon.active}
                                {!isActive && menu.icon.passive}
                            </div>
                            <div className='pr-4 text-xl'>
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))
        }

        <More/>

        <SendBtn/>
    </nav>
  )
}
