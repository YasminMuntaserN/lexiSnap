import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 1.5rem; 
  padding:0.7rem; 
  width: 400px; 
  transition: all 0.3s; /* Equivalent to transition-all duration-300 */
  border: none;
  outline: 1px solid var(--color-gray);
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