
import Notecontainer from './Notecontainer';
import { useState,useEffect } from 'react';
const Maincontainer=(()=>{
    const [note,setNote]=useState(JSON.parse(localStorage.getItem("allnotes")) || []);
    const [btn,setBtn]=useState(false);

    {}
    const addnote=(color)=>{
        let tempnote=[...note];
        const date=new Date();
        const mytime=date.toLocaleDateString()+" "+date.toLocaleTimeString();
        tempnote.push({
            id:date.getTime()+Math.floor(Math.random()*1000),
            content:" ",
            time:mytime,
            color,
        })
        setNote(tempnote);
    }

    const change=(data,id)=>{
        const tempnote=[...note];
        const indexs=tempnote.findIndex((ele)=>ele.id===id);
        if(indexs < 0) return ;
        tempnote[indexs].content=data;
        setNote(tempnote);
    }
    const deletenote=(id)=>{
        const tempnote=[...note];
        const indexs=tempnote.findIndex((ele)=>ele.id===id);
        if(indexs < 0) return ;
        tempnote.splice(indexs,1);
        setNote(tempnote);
    }

    useEffect(()=>{
        localStorage.setItem("allnotes",JSON.stringify(note));
    },[note])

    const colorarr=["limegreen","aqua","pink","#F4D03F","#CACFD2","#F1948A"];
    return(
        <>
        <div className="maincontainer">
            <div className="addbutton">
                <div className="row">
                    <div className='col-12 display-2 ps-5 mx-5'>Create Your Notes</div>
                    <div className="col-2">
                    <div className='mainbutton'>
                        <button className="btn btn-primary" onClick={()=>setBtn(!btn)}>Add</button>
                    </div>

                    <div className={btn?"btncontainer_active":"btncontainer"}>
                            <input  type='color' onBlur={(e)=>addnote(e.target.value)} />
                            {/* {
                                colorarr.map((ele,i)=>{
                                    return (
                                        <div className='' style={{"background-color":ele}} key={i} onClick={()=>addnote(ele)}></div>
                                    )
                                })
                            } */}
                                
                    </div>
                    </div>
                    <div className="col-10">
                        <Notecontainer note={note} change={change} deletenote={deletenote} />
                    </div>
                </div>            
            </div>
        </div>
        </>
    )
})

export default Maincontainer;