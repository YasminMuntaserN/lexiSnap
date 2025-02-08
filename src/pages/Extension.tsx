import ExtensionPagination from "../components/Extension/ExtensionPagination";
import Page from "../ui/Page";
import { useState } from "react";
import { Button } from "../styledComponents/Button";
import { Content } from "../ui/Content";
import Link from "../ui/Link";



function Extension() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showSteps, setShowSteps] = useState(false);

  return (
    <Page>
      {!showSteps && <Content>
            <div>
            <Link to="dashboard" style={{margin:"20px"}}/>
            <h1> Discover the LexiSnap Chrome Extension!</h1>
              <p>We're excited to introduce the LexiSnap Chrome Extension, designed to enhance your vocabulary learning experience.</p>
            </div>
              <div>
            <h2>Why Use the LexiSnap Chrome Extension?</h2>
            <p>
            Learning new vocabulary can sometimes be a
            challenge, especially when you come across
            unfamiliar words while browsing the web. Our
            Chrome extension is here to support you by
            making it easier to capture and save these
            words for later review and practice. Here's
            why the LexiSnap Chrome Extension is an
            essential addition to your learning toolkit:
            <br/>
            <span> <b>Seamless Integration:</b> The extension seamlessly
            integrates with your LexiSnap account, ensuring that
            every word you add is instantly available in your app.</span>
            <br/>
            <span><b>Effortless Addition:</b> With just a few clicks, you can
            add new vocabulary words from any webpage, saving
            you time and effort.</span>
            <br/>
            <span><b>Enhanced Learning:</b> By capturing words in their
            natural context, you can better understand their usage
            and meaning, improving your overall language skills.</span>
            </p>
            </div>
            <div>
            <h2>How to Use the LexiSnap Chrome Extension ?</h2>
            <p>
            Using the LexiSnap Chrome Extension is
            simple and straightforward. Follow these
            steps to start adding new words to your
            LexiSnap app:
            </p>
            <Button variant="Step" onClick={()=>setShowSteps(pre=>!pre)}>Show the steps</Button>
            </div>
          </Content>
          }
          {showSteps && <ExtensionPagination currentPage={currentPage} setCurrentPage={setCurrentPage} setShowSteps={setShowSteps}/>}
    </Page>
  );
}

export default Extension;