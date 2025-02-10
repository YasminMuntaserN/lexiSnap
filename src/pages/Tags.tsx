import styled from "styled-components";
import Page from "../ui/Page";
import AddNewTag from "../components/Tags/AddNewTag";
import Tag from "../components/Tags/Tag";
import { useGetTags } from "../components/Tags/hooks/useGetTags";
import { useEffect } from "react";
import Link from "../ui/Link";
import {Loader} from "../ui/Loader";


const ContentContainer =styled.div`
display:grid;
grid-template-columns:2fr 0.2fr;
justify-content:space-between;
gap:100px;
padding:20px;
width:90%;
margin:50px;
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
`;

function Tags() {
  const{ mutate , Tags,  isLoading, error}= useGetTags();
  
  useEffect(()=>mutate ,[mutate]);
  return (
    <Page>
      <Header>
        <Link to="dashboard"/>
        <p> All Tags You Added </p>
      </Header>
      <ContentContainer>
        {isLoading && <Loader />}
        {error && <p>something get wrong {error.message}</p>}
        <TagsContainer >
        {Tags?.map((tag, index) => (
        <Tag key={index} tag={tag}/>
        ))}
        </TagsContainer>
        <AddNewTag />
      </ContentContainer>
    </Page>
  );
}
  export default Tags;