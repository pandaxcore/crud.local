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
        $user -> password = $req -> input('password');
        // $user -> password = Hash::make($req -> input('password'));
        $user -> save();

        return $user;
    }
}
