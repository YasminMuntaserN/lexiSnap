import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { media } from "../styledComponents/Media";

const Input = styled.input`
  border-radius: 1.5rem; 
  padding:0.7rem; 
  width: 400px; 
  transition: all 0.3s; 
  border: none;
  outline: 1px solid var(--color-gray);
    ${media.mobile`
      width: 200px; 
    `}
`;

function SearchBar(){
  return (
    <div style={{position:"relative" }}>
      <Input
        placeholder="Search for a Word..."
        // onChange={handleInputChange}
        type="text"
      />
      <FaSearch style={{position:"absolute",right:'20px' ,top:'5px',fontSize:'27px' }}/>
    </div>
  );
}

export default SearchBar;