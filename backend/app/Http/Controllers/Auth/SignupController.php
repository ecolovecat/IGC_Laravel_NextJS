<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Repositories\User\UserRepository;
use Illuminate\Http\Request;

class SignupController extends Controller
{
    //
    protected $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function signup(SignupRequest $request) {
        try {

            $user = $this->userRepository->create([
                'name' => $request->input('name'),
                'email' => $request->input('email'), // Corrected field name from 'name' to 'email'
                'password' => bcrypt($request->input('password')),
            ]);

            return response()->json([
                'message' => 'User registered successfully',
                'data' => $user,
            ], 201);
        } catch (\Throwable $e) {
            //throw $th;
            if ($e instanceof \Illuminate\Validation\ValidationException) {
                return response()->json(['message' => 'Validation error', 'errors' => $e->errors()], 422);
            }
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

}
