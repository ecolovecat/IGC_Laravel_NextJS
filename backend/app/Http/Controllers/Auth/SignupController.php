<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Repositories\User\UserRepository;
use Illuminate\Http\Request;

class SignupController extends Controller
{
    //
    protected $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function signup(Request $request) {
        try {
            $request->validate([
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
            ]);

            $user = $this->userRepository->create([
                'email' => $request->input('email'), // Corrected field name from 'name' to 'email'
                'password' => bcrypt($request->input('password')),
            ]);

            return response()->json([
                'message' => 'User registered successfully',
                'data' => $user,
            ], 201);
        } catch (\Throwable $e) {
            //throw $th;
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

}
