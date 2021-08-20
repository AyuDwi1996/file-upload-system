import classes from './FileUpload.module.css';
import {useState} from 'react';
import storage from '../../pages/firebase';
const FileUpload = () => {
const [filetoUpload , setFile] = useState('');
const upload = ()=>{
  if(filetoUpload == null)
    return;
  storage.ref(`${filetoUpload.name}`).put(filetoUpload)
  .on("state_changed" , alert("success") , alert);
}
  
  return (
     <form className={classes.form}>
     <div className={classes.control}>
       <label >Upload File</label>
       <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} />
     </div>
     <div className={classes.action}>
       <button onClick={upload}>Upload</button>
     </div>
   </form>
  );
};

export default FileUpload;
