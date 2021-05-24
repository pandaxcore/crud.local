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

    function delete($post_id){
        $result = Post::where('post_id', $post_id)->delete();
        if($result){
            return ["result" => "post has been deleted"];
        } else {
            return ["result" => "operation failed there is no post with such id"];
        }
        // return $id;
    }

    function post($post_id){
        // return $post_id;
        return Post::find($post_id);
        // return $post_id;
        // return Post::all();
    }
}
