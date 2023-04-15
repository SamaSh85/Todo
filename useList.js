import { useState,useRef } from "react";

const useList=()=>{
    const initialusers=[
        {id:1,name:"hesan"},
        {id:2,name:"sahar"},
        {id:3,name:"sama"}
    ]
    const[users,setUsers]=useState(initialusers);
    const[newUser,setNewUser]=useState('');
    const[search,setSearch]=useState('');
    const addRef=useRef(null);
    const handleAdd=()=>{
        setUsers((prev)=>([...prev,{id:users.length+1,name:newUser}])

        );
        setNewUser('');
        
        addRef.current.focus();
    }
    const handleDelete=(userid)=>{
        setUsers((prevUser)=>prevUser.filter(({id})=>{
            return  id !==userid
        }));
    }
    const handleAddwithEnter=(e)=>{
        if(e.keyCode===13)
            handleAdd();
    }
    return {
        users,    
        newUser,
        setNewUser,
        search,
        setSearch,
        handleAdd,
        handleDelete,
        handleAddwithEnter,
        addRef
        
    }
}
export default useList;