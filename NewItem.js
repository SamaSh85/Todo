import React from "react";
import "./style.css";


export const NewItem=({name,id,onDelete})=>{
    return <div className=" flex flex-row justify-between mt-10">
        {name}
        <button onClick={()=>onDelete(id)} className="border border-sky-100">حذف</button>
    </div>
}