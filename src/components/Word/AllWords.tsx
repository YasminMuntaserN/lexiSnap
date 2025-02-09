import ScrollContainer from "../../ui/ScrollContainer";
import Word from "./Word";

function AllWords({words}){
  return (
    <ScrollContainer useFor="words" size="big">
    {
      words?.map((word ,index) =><Word key={index} word={word} />)
    }
    </ScrollContainer>
  )
}

export default AllWords;