import { addEntity, getEntity, updateEntity,getEntities, deleteEntity } from "./BaseApi";

export const AddWord= (word)=> addEntity(word ,"words");

export const getWords= (pageNumber ,sortBy ,sortOrder)=> getEntities(`words?page=${pageNumber}&sortBy=${sortBy}&sortOrder=${sortOrder}`);


export const getWord= (id)=> getEntity(`words/${id}`);

export const updateWord= (id ,data)=> updateEntity(`words/${id}` ,data);

export const deleteWord= (id)=> deleteEntity(`words/${id}?removeStatements=true`);
