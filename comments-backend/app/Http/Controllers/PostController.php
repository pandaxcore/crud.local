<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    //
    function addPost(Request $req){
        // return $req->file('file_name')->store('posts');

        $post = new Post;
        $post -> name = $req -> input('name');
        $post -> description = $req -> input('description');
        $post -> file_path = $req -> file('file_path')->store('pictures');
        // $post -> created_at = $req -> input('created_at');
        // $post -> updated_at = $req -> input('updated_at');
        // $post -> user_id = $req -> input('user_id');
        $post -> save();

        return $post;
    }

    function list(){
        return Post::all();
    }
}
