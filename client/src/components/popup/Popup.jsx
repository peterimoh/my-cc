import React from 'react'
import { Link as a } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';

//styling
import './popup.css'
import styled from 'styled-components';

const Popup = (props) => {
    console.log(props);
    return (
       <Wrapper className="kura_tm_modalbox opened">
		<div className="box_inner">
			<div className="close">
                    <a onClick={props.closeWeb}>
                    <AiOutlineClose className='svg sizer'/>
                    </a>
			</div>
                <div className="description_wrap">
                    {props.children}
            </div>
		</div>
	</Wrapper>
    )
}
const Wrapper = styled.div`
 
position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  z-index: 15;
  background-color: ${({ theme }) => theme.modal};
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;


 .box_inner{
    background-color: ${({ theme }) => theme.box_inner};
 }



`

export default Popup

// @media (max-width: 1400px) {
// 	 .box_inner{width: 700px;}
//  .main_details{flex-direction: column;}
// 	.main_details .textbox{width: 100%;padding-right: 0px;margin-bottom: 30px;}
//  .main_details .detailbox{width: 100%;}
// 	 .additional_images ul{margin: 0px;}
// 	.additional_images ul li{width: 100%;padding-left: 0px;}
// }


// @media (max-width: 1040px) {
// 	 .box_inner{width: 500px;}
// 	.close .svg{width: 40px;height: 40px;}	
// }


// @media (max-width: 768px) {
// 	 .box_inner{width: 500px;}
//    .close {
//     margin-left: -10px !important;
//   }
//   .close a .svg{width: 30px;height: 30px; font-size: 30px}
// 	 .close{margin-left: 10px;}
//   .description_wrap{padding: 30px;}
// 	 .title h3{font-size: 20px;}
// 	 .news_popup_informations .details h3{font-size: 20px;}
// }