import styled from "styled-components";
import Page from "../ui/Page";
import Tag from "../components/Tags/Tag";
import { useGetTags } from "../components/Tags/hooks/useGetTags";
import { useEffect } from "react";
import Link from "../ui/Link";
import {Loader} from "../ui/Loader";
import { media } from "../styledComponents/Media";


const ContentContainer =styled.div`
display:grid;
justify-content:space-between;
gap:100px;
padding:20px;
width:90%;
margin:50px;
  ${media.mobile`
    padding:0px;
    margin:0px;
    `}
`;

const TagsContainer =styled.div`
display: flex;
/* flex-direction: column; */
gap:30px;
height: 450px;
flex-wrap: wrap;
`;

const Header= styled.div`
  font-size:32px;
  color:var(--main-color);
  padding:15px;
  border-bottom:0.5px solid var(--color-gray);
  margin-bottom:5px;
  font-weight:600;
  display:flex;
  gap:100px;
  ${media.mobile`
    font-size: 16px;
    `}
${media.tablet`
  font-size: 22px;
    `}
`;

function Tags() {
  const{ mutate , Tags,  isLoading, error}= useGetTags();
  
  useEffect(() => {
    mutate();
  }, [mutate]);
  
  return (
    <Page>
      <Header>
        <Link to="dashboard"/>
        <p> All Tags You Added </p>
      </Header>
      <ContentContainer>
        {isLoading && <Loader />}
        {error && <p>something get wrong { (error as Error).message}</p>}
        <TagsContainer>
            {Tags?.length > 0 ? (
              Tags.map((tag, index) => <Tag key={index} tag={tag} />)
            ) : (
              <p>No tags found.</p>
            )}
          </TagsContainer>
      </ContentContainer>
    </Page>
  );
}
  export default Tags;