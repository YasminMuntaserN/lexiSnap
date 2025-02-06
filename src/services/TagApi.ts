import { addEntity, getEntity } from "./BaseApi";

export const AddTag= (tag)=> addEntity(tag ,"tags");

//https://lexisnap-server-v2.onrender.com/api/v2/tags?sortBy=itemsCount&sortOrder=desc
export const getTags= ()=> getEntity(`tags?sortBy=itemsCount&sortOrder=desc`);

//https://lexisnap-server-v2.onrender.com/api/v2/
export const getTag= (id)=> getEntity(`tags/${id}`);