import Header from './Header'
import React,{useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'

function PostList(){

    const[data, setData] = useState([]);

    useEffect( ()=>{
        getPostsList();
    },[]);
    

    async function deleteOperation(post_id) {
        
        let result = await fetch("http://crud.local/api/delete/"+post_id,{
            method:'DELETE'
        });
        result = await result.json();
        getPostsList();
    }

    async function getPostsList(){
        let result = await fetch("http://crud.local/api/list");
        result = await result.json();
        setData(result)
    }

    return (
        <div>
            <Header />
            <h2>Post List</h2>
            <div className="col-sm-8 offset-sm-2">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Image</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>
                            <tr>
                            <td>{item.post_id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><img style={{width:100}} src={"http://crud.local/" + item.file_path} /></td>
                            <td><span onClick={()=>deleteOperation(item.post_id)} className="delete">Delete</span></td>
                            </tr>
                        )
                    }
                </tbody>
                </Table>
                </div>
        </div>
    )

}

export default PostList;