import React from 'react'
import nav1 from '../assets/Nav1.svg'
import nav2 from '../assets/Nav2.svg'
import nav3 from '../assets/Nav3.svg'
import nav4 from '../assets/Nav4.svg'
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.svg'


const HeaderComponent = () => {
  return (
    <div className="bg-[#161D2F] p-5 flex justify-between flex-col items-center w-fit h-[80vh] rounded-2xl max-[850px]:flex-row max-[850px]:h-fit max-[850px]:w-full">
        <div className="flex flex-col items-center gap-15 max-[850px]:flex-row max-[850px]:justify-between max-[850px]:w-[60%] max-[460px]:w-fit">
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <nav>
                    <ul className="flex flex-col gap-5 text-white font-bold text-lg max-[850px]:flex-row">
                        <li>
                            <a>
                                <img src={nav1} alt="Nav1" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={nav2} alt="Nav2" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={nav3} alt="Nav3" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={nav4} alt="Nav4" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div>
            <img src={avatar} alt="profile" className="w-10 h-10 rounded-full border-2 border-white"/>
        </div>
    </div>
  )
}

export default HeaderComponent