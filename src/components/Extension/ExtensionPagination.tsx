import { MdContentCopy } from "react-icons/md";
import Image from "../../ui/Image";
import Pagination from "../../ui/Pagination";
import styled from "styled-components";
import { media } from "../../styledComponents/Media";
import { useTheme } from "../../context/ThemeContext";

const Content =styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  color:var(--background-color);
  ${media.mobile`margin: 0;
  align-items:start; 
  text-align:left; 
  `}
  ${media.desktop`margin: auto; 
      align-items: center; 
      justify-content: center; 
      text-align: center; `}
`;

interface ExtensionPaginationProps{
  currentPage: number;
  setShowSteps: (boolean)=>void;
  setCurrentPage: (int)=>void;
}

function ExtensionPagination({currentPage, setCurrentPage ,setShowSteps}:ExtensionPaginationProps){
  const {isMobileMode}=useTheme();
  const renderContent = () => {
    switch(currentPage) {
      case 1:
        return (
          <Content>
          <h2> 1- Install the Extension:</h2>
          <p>Download and install the LexiSnap Chrome Extension from the Chrome Web Store.,
            <span>Copy the extension URL <MdContentCopy /></span></p>
          <Image src="./test.png" size={isMobileMode?"med":"full"}/>
          </Content>
        );
      case 2:
        return (
          <Content>
          <h2> 2- Sign In:</h2>
          <p>Open the extension and sign in using your LexiSnap account credentials. This will link the extension to your app.</p>
          <Image src="./test.png" size={isMobileMode?"med":"full"}/>
          </Content>
        );
      case 3:
        return (
          <Content>
          <h2> 3- Select Text:</h2>
          <p> While browsing the web, highlight
            any word or phrase you want to add to your
            vocabulary list.</p>
            <Image src="./test.png" size={isMobileMode?"med":"full"}/>
          </Content>
        );
        case 4:
          return (
            <Content>
            <h2> 4- Add to LexiSnap:</h2>
            <p> Right-click on the selected
              text and choose the "Add to LexiSnap" option
              from the context menu.</p>
            <Image src="./test.png" size={isMobileMode?"med":"full"}/>
            </Content>
          );
          case 5:
            return (
              <Content>
              <h2> 5- Edit and Save:</h2>
              <p> You will have the opportunity to
                edit the word or phrase before saving it to your
                LexiSnap app. Make any necessary changes
                and save it for future review and practice.</p>
              <Image src="./test.png" size={isMobileMode?"med":"full"}/>
              </Content>
            );
            case 6:
              return (
                <Content>
                <h2> 6- Manual Addition:</h2>
                <p>  You can add any word
                  without selecting text by clicking on the
                  extension icon and manually entering the word
                  you want to add.</p>
                <Image src="./test.png" size={isMobileMode?"med":"full"}/>
                </Content>
              );
      default:
        return null;
    }
  }
  return (
    <>
    {renderContent()}
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} setShowSteps={setShowSteps}/>
    </>
  )
}
export default ExtensionPagination;