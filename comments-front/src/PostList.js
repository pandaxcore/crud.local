import Header from './Header'
import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function PostList(){
    const [data, setData] = useState([]);

    useEffect( async () => {
        getData();
    }, []);

    // console.log("result", data);

    async function deleteOperation(post_id) {
        // alert(post_id);
        let result = await fetch("http://crud.local/api/delete/" + post_id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.log(result);
        getData();
    }

    async function getData() {
        let result = await fetch("http://crud.local/api/list");
        result = await result.json();
        setData(result);
    }

    return(
        <div>
            <Header />
            <h2>Posts List</h2>
            <div className="col-sm-6 offset-sm-3">
            <Table>
                <thead>
                    <tr>
                        <td>Post ID</td>
                        <td>Name</td>
                        <td>Comments</td>
                        <td>Image</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>
                            <tr>
                                <td>{item.post_id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                {/* <td>{item.file_path}</td> */}
                                <td><img src={"http://crud.local/"+item.file_path} /></td>
                                <td><Button onClick={()=>deleteOperation(item.post_id)} variant="danger">Delete</Button></td>
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