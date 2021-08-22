import React from 'react';
 const task=()=>{
   return(
     <div className="tasks">
       <h1>
         Inbox
       </h1>
       <div className="add-task-btn">
        <span className="plus">+</span>
        <span className="add-task-text">Add task</span>
       </div>

       <div className="add-task-dialog">
       <input/>
       <div className="add-task-action-container">
         <div className="btns-container">
           <button className="add-btn">Add task</button>
           <button className="cancel-btn">Cancel</button>
         </div>
         <div className="icon-container"></div>
       </div>
       </div>

     </div>
   )
 }

export default task;