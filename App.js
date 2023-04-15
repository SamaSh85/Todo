
import React, { useRef} from 'react';
import {NewItem} from "./NewItem";
import "./style.css";
import "./index.css";
import useList from './Hook/useList';
import Input from './Input';
import {filterName,List} from './List';
import {Collapsable} from './Collapsable.js'; 

function App() {
 
    const {
        users,       
        newUser,
        setNewUser,
        search,
        setSearch,
        handleAdd,
        handleDelete,
        handleAddwithEnter,addRef
      
    }= useList();
    const changSearch=(val)=>{
    setSearch(val);
    }
    const changeUser=(val)=>{
        setNewUser(val);
    }
    
    //const ListUser=filterName(List);
   
    return (<div className="w-80  border-2 border-slate-200 ml-10 mt-10  shadow-lg p-5" >
       
          
           <Collapsable title="search">
           <Input  value={search} onChange={changSearch} placeholder="search a word" />
           </Collapsable>
       
        <h4>addUser</h4>
        <div  className=" flex flex-row">
            
          <Input value={newUser} onChange={changeUser} 
             onKeyUp={handleAddwithEnter} ref={addRef} placeholder="AddUser"/>         
            <button className="border-sky-100 border " onClick={handleAdd} >+addNewItem</button>
        </div>
       {
        users.filter(({name})=>name.includes(search)).map(({id,name})=>(<NewItem id={id} key={id} name={name} onDelete={handleDelete} />))  
       }

    </div>);


}

export default App;
