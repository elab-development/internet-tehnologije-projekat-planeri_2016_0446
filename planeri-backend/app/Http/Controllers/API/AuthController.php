<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string|min:8'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role_id' => $request->role_id ?? 2
        ]);

        $token = $user->createToken("auth_token")->plainTextToken;

        return response()->json(['data' => $user, "access_token" => $token, "token_type" => 'Bearer']);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password')))
            return response()->json(['message' => 'Unauthorized'], 401);

        $user = User::where('email', $request['email'])->first();

        $fullAccessToken = $user->createToken('auth_token')->plainTextToken;

        $token = explode('|', $fullAccessToken);


        return response()->json(['message' => 'Cao ' . $user->name . ', dobrosli na sajt Personalizovani planeri.', 'access_token' => $token[1], 'user' => $user]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json(['message' => "Deleted"]);
    }
}
