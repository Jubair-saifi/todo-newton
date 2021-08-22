import React, { useState } from 'react';
import SideBar from './sidebar';
import Task from './task';
 const Content=()=>{
   const [selectedTab, setSelectedTab]=useState("INBOX");
   return(
     <section className="content">
       <SideBar  selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
       <Task/> 
     </section>
   )
 }

export default Content;