<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
public function login(LoginRequest $request){
    $data = $request->validated();
    /** @var \App\Models\User $user */
   $user = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => bcrypt($data['password']),

    ]);

    $token = $user->createToken('main')-> plainTextToken;

    return response(compact('user', 'token'));

}

public function signup(SignupRequest $request){
    
}

public function logiut(Request $request){
    
}


}
