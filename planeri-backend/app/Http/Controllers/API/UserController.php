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

    public function update(Request $request, string $id)
    {
        $json = $request->json()->all();

        try {
            User::where('id', '=', $id)->update([
                'name' => $json['name'],
                'email' => $json['email']
            ]);

            return response()->json(["userMessage" => "User is updated."]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update user. Error: ' . $e->getMessage()], 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            User::where('id', '=', $id)->delete();
            return response()->json(["userMessage" => "User is deleted."]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete user. Error: ' . $e->getMessage()], 500);
        }
    }

    public function getUsersBySearch(string $searchExp)
    {
        $users = User::where('name', 'like', '%' . $searchExp . '%')
            ->orWhere('email', 'like', '%' . $searchExp . '%')
            ->get();
        return $users;
    }

    public function getRoles()
    {
        return Role::all();
    }

    public function getRole(string $roleId)
    {
        return Role::find($roleId);
    }
}
