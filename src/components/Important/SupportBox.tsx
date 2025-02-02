import { IoLogoPaypal } from "react-icons/io5";
import { SiTether } from "react-icons/si";
import { MdContentCopy } from "react-icons/md";
import styled from "styled-components";
import { media } from "../../styledComponents/Media";

const Box = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 0.5fr 2fr 1fr ;
  align-items:center;
  flex-direction: row;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  width:50%;
  ${media.mobile`width:100%;font-size: 15px;`}
  ${media.tablet`width:100%;font-size: 15px;`}
`;


function SupportBox(){
  return(
    <div>
      <Box>
      <IoLogoPaypal style={{fontSize:"30px" , color:"blue"}} />
      <p>PayPal</p>
      <MdContentCopy/>
      </Box>
      <Box>
      <SiTether style={{fontSize:"30px" , color:"green"}} />
      <p>USDT TRC20(Tron)</p>
      <MdContentCopy/>
      </Box>
      <Box>
      <SiTether style={{fontSize:"30px" , color:"green"}} />
      <p>USDT TRC20(Ethereum)</p>
      <MdContentCopy/>
      </Box>
    </div>
  )
}

export default SupportBox;