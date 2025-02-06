import { addEntity, getEntity } from "./BaseApi";

export const AddWord= (word)=> addEntity(word ,"words");

//https://lexisnap-server-v2.onrender.com/api/v2/words?page=1&sortBy=creationDate&sortOrder=asc
export const getWords= (pageNumber ,sortBy ,sortOrder)=> getEntity(`words?page=${pageNumber}&sortBy=${sortBy}&sortOrder=${sortOrder}`);