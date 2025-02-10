import { addEntity, getEntity ,getEntities } from "./BaseApi";

export const AddTag= (tag)=> addEntity(tag ,"tags");

export const getTags= ()=> getEntities(`tags?sortBy=itemsCount&sortOrder=desc`);

export const getTag= (id)=> getEntity(`tags/${id}`);