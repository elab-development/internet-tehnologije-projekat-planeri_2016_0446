<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show(string $id)
    {
        return User::find($id);
    }

    public function getUsersBySearch(string $searchExp)
    {
        $users = User::where('name', 'like', '%' . $searchExp . '%')
            ->orWhere('email', 'like', '%' . $searchExp . '%')
            ->get();
        return $users;
    }

    public function getRole(string $roleId)
    {
        return Role::find($roleId);
    }
}
