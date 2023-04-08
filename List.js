import React from "react";
import { NewItem } from "./NewItem";

export const filterName=(Component)=>(props)=>{
    const searchItem=props.search;
    const filterData=props.data.filter(({name})=>name.includes(searchItem));
    return <Component data={filterData} />
  }


export const List=({data,handleDelete})=>{
    
        data.map(({id,name})=>(<NewItem id={id} key={id} name={name} onDelete={handleDelete} />))    
}
//const ListUser=filterName(List);

