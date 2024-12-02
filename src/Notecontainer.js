
import './notecontainer.css';

function Notecontainer(props) {
    const revarray=(arr)=>{
        let temparr=[];
        for(let i=arr.length-1;i>=0;i--){
            temparr.push(arr[i]);
        }
        return temparr;
    }
   const note=revarray(props.note);
  return (
    <>
    <div className="notecontainer">
        <div className='row p-3'>
        {props.note.length>0 ? note.map((elem)=>{
            console.log(elem.content,elem.id);
            return(
                <div className='col-10 col-sm-6 col-lg-4' key={elem.id}>
                    <div className='note' style={{"background-color":elem.color}}>
                        <textarea defaultValue={elem.content} onChange={(e)=>{props.change(e.target.value,elem.id)}}></textarea>
                        <div className='content p-3'><div>{elem.time}</div> <div><i onClick={()=>{props.deletenote(elem.id)}} className="bi bi-trash-fill text-danger" style={{"cursor":"pointer"}}></i></div></div>
                    
                    </div>
                </div>
            )
        }):<h1>No Notes Here </h1>
            
        }
          
        </div>
    </div>
    </>
  );
}

export default Notecontainer;
