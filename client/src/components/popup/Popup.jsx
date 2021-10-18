import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';

//styling
import './popup.css'

const Popup = (props) => {
    return (
       <div className="kura_tm_modalbox">
		<div className="box_inner">
			<div className="close">
                    <Link>
                    <AiOutlineClose className='svg'/>
                    </Link>
			</div>
                <div className="description_wrap">
                    {props.children}
            </div>
		</div>
	</div>
    )
}

export default Popup
