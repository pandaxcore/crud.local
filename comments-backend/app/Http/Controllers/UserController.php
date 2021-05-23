<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    //
    function register(Request $req){

        // return "this is an Register function";
        // return $req -> input();
        
        $user = new User;
        $user -> name = $req -> input('name');
        $user -> email = $req -> input('email');
        $user -> password = Hash::make($req -> input('password'));
        // $user -> password = Hash::make($req -> input('password'));
        $user -> save();

        return $user;
    }

    function login(Request $req){
        $user = User::where('email', $req->email)->first();
        if(!$user || !Hash::check($req->password, $user->password)){
            return ["error" => "email or password incorrect"];
        }
        
        return $user;
        
    }
}
