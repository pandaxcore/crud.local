import Header from './Header'
import {Button} from 'react-bootstrap'
import {useState} from 'react'

function AddPost() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [file_path, setFilePath] = useState("");
    // const [user_id, setUserId] = useState("");

    async function addPost() {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('file_path', file_path);
        // formData.append('user_id', user_id);
        
        let result = await fetch('http://crud.local/api/addpost', {
            method:'POST',
            body:formData
        });
        alert("post has been saved");
        console.log(formData);
    }

    return(
        <div>
            <Header />
            <h2>AddPost page</h2>
            <div className="col-sm-6 offset-sm-3">
                <br/>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="name" /> <br/>
                <input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="description" /> <br/>
                <input type="file" className="form-control" onChange={(e)=>setFilePath(e.target.files[0])} placeholder="file" /> <br/>
                {/* <input type="text" className="form-control" onChange={(e)=>setUserId(e.target.value)} placeholder="user ID" /> <br/> */}
                <button className="btn btn-primary" onClick={addPost}>send</button>
            </div>
        </div>
    )
}

export default AddPost