import { addEntity, getEntity, updateEntity,getEntities } from "./BaseApi";

export const AddWord= (word)=> addEntity(word ,"words");

//https://lexisnap-server-v2.onrender.com/api/v2/words?page=1&sortBy=creationDate&sortOrder=asc
export const getWords= (pageNumber ,sortBy ,sortOrder)=> getEntities(`words?page=${pageNumber}&sortBy=${sortBy}&sortOrder=${sortOrder}`);


//https://lexisnap-server-v2.onrender.com/api/v2/words/67a36e2a4161eeab4a1eabe6
export const getWord= (id)=> getEntity(`words/${id}`);

//https://lexisnap-server-v2.onrender.com/api/v2/words/67a1cb8846c65d8588651d61
export const updateWord= (id ,data)=> updateEntity(`words/${id}` ,data);