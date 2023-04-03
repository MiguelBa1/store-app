<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class PasswordController extends Controller
{
    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     * @throws ValidationException
     */
    public function update(User $user): JsonResponse
    {
        // Validate the request
        $this->validate(request(), [
            'password' => ['required', Password::defaults(), 'confirmed']
        ]);

        Log::warning('[PASSWORD]', [
            'admin_id' => auth()->user()->getAttribute('id'),
            'user_id' => $user->getAttribute('id'),
        ]);

        // Update the password
        $user->setAttribute('password', bcrypt(request()->get('password')));
        $user->save();

        return response()->json(['message' => 'Password updated successfully']);
    }
}