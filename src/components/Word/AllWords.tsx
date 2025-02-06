import Word from "./Word";

function AllWords({words}){
  return (
    <>
    {
      words?.map((word ,index) =><Word key={index} word={word} />)
    }
    </>
  )
}

export default AllWords;