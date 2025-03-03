import { useParams } from "react-router-dom"
import { useGetWord, useUpdateWord } from "../components/Word/hooks/useGetWords";
import { useWord } from "../context/WordContext";
import Page from "../ui/Page";
import { Loader } from "../ui/Loader";
import styled from "styled-components";
import { Icon } from "../ui/Icon";
import { GiSoundWaves } from "react-icons/gi";
import { speakWord } from "../services/Speech";
import { useEffect } from "react";
import WordOperations from "../components/Word/WordOperations";
import { FcReading } from "react-icons/fc";
import WordDetailsHeader from "./WordDetailsHeader";
import { Header } from "../styledComponents/Header";
import { useDeleteWord } from "../components/Word/hooks/useAddWord";
import { media } from "../styledComponents/Media";


const Container = styled.div`
padding-left:80px;
${media.mobile`
  padding-left:0;
    `}
${media.tablet`
  padding-left:0;
    `}
`;
const H2 = styled.h2`
 font-size:21px;
${media.mobile`
  font-size:12px;
    `}
${media.tablet`
  font-size:16px;
    `}
`;
function WordDetails(){
  const {wordId}=useParams();
  const {mutate :getWord , isLoading, error }=useGetWord();
  const {mutate :update,   isLoading :isUpdating, error :UpdatingError }=useUpdateWord();
  const {mutate :deleteWord ,  isLoading:isDeleting, error:DeletingError }=useDeleteWord();
  const {updateWord ,word}= useWord();

    useEffect(() => {
      updateWord({word:""})
      getWord(wordId, {
        onSuccess: (data) => {
          updateWord({
            _id:wordId,
            word: data.word,
            definitions: data.definitions,
            translations: data.translations,
            statements: data.statements.map(x => ({ text: x.text, translation: x.translation })),
            synonyms: data.synonyms.map(x => ({ word: x.word, _id: x._id })),
            opposites: data.opposites.map(x => ({ word: x.word, _id: x._id })),
            tags: data.tags
          });
        }
      });
    }, [getWord]);


  if(error || UpdatingError ||DeletingError) return <p>Something get Wrong {error.message}</p>
  return (
    <Page>
      {isLoading ||isUpdating ||isDeleting ?<Loader />
      :<Container>
        <WordDetailsHeader update={update} deleteWord={deleteWord}/>
        <Header style={{border:"none"}}>
          <Icon as={FcReading} />
          <H2>{word?.word}</H2>
          <Icon as={GiSoundWaves}  onClick={() => speakWord(word?.word)} />
        </Header>

        <WordOperations />
      </Container>
      }
    </Page>
  );
}

export default WordDetails;