import classes from './FileUpload.module.css';
import React, { useState } from 'react';
import doAjax from '../Helper/doAjax';

const FileUpload = () => {
  const [filetoUpload, setFiles] = useState('');
  const [displaydata, setDisplaydata] = useState(null);
  const upload = (e) => {
    e.preventDefault();
    if (filetoUpload == null)
      return;
    doAjax.post("/logitech.json", filetoUpload);
  }
  const handleChange = e => {
    e.preventDefault();
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
      doAjax.post("/logitech.json", filetoUpload);
    };
  };
  const getJsonFileData = e => {
    e.preventDefault();
    doAjax.get('/logitech.json')
      .then((res) => {
        console.log(Object.values(res.data));
        if(Object.values(res.data)!==null){
          var mydata = Object.values(res.data);
          setDisplaydata(mydata);
        }
        
      });
  };
  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.control}>
          <label >Upload File</label>
          <input type="file" onChange={handleChange} />
        </div>
        <div className={classes.action}>
          <button onClick={upload}>Upload</button>
        </div>
        <div className={classes.action}>
          <button onClick={getJsonFileData}>display</button>
        </div>
        
      </form>
      
      {displaydata !== null && <div><table >
        <tr>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        
        {displaydata[0].map((item) => (
        <tr>
          <td>{item.userId}</td>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
        </tr>
       ))}
      </table>
      </div>}
    </React.Fragment>
  );
};

export default FileUpload;
