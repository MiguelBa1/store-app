<?php

use App\Http\Controllers\Api\Brands\AdminBrandController;
use App\Http\Controllers\Api\Cart\CartProductController;
use App\Http\Controllers\Api\Categories\AdminCategoryController;
use App\Http\Controllers\Api\Cities\CityController;
use App\Http\Controllers\Api\Products\AdminProductController;
use App\Http\Controllers\Api\Products\AdminProductStatusController;
use App\Http\Controllers\Api\Users\AdminPasswordController;
use App\Http\Controllers\Api\Users\AdminProfileController;
use App\Http\Controllers\Api\Users\AdminUserStatusController;
use App\Http\Controllers\Api\Cart\CartController;
use App\Http\Controllers\Api\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum', 'role:admin', 'check.user.status', 'verified'])->prefix('admin')->group(function () {
    Route::prefix('users')->group(function () {
        Route::patch('{user}/status', [AdminUserStatusController::class, 'update'])->name('admin.api.users.status.update');
        Route::patch('{user}/password', [AdminPasswordController::class, 'update'])->name('admin.api.users.password.update');
        Route::patch('{user}/profile', [AdminProfileController::class, 'update'])->name('admin.api.users.profile.update');
    });
    Route::prefix('products')->group(function () {
        Route::post('/', [AdminProductController::class, 'store'])->name('admin.api.products.store');
        Route::post('{product}', [AdminProductController::class, 'update'])->name('admin.api.products.update');
        Route::delete('{product}', [AdminProductController::class, 'destroy'])->name('admin.api.products.destroy');
        Route::patch('{product}/status', [AdminProductStatusController::class, 'update'])->name('admin.api.products.status.update');
    });
    Route::prefix('brands')->group(function () {
        Route::get('/', [AdminBrandController::class, 'index'])->name('admin.api.brands.index');
        Route::post('/', [AdminBrandController::class, 'store'])->name('admin.api.brands.store');
        Route::patch('{brand}', [AdminBrandController::class, 'update'])->name('admin.api.brands.update');
    });

    Route::prefix('categories')->group(function () {
        Route::get('/', [AdminCategoryController::class, 'index'])->name('admin.api.categories.index');
        Route::post('/', [AdminCategoryController::class, 'store'])->name('admin.api.categories.store');
        Route::patch('{category}', [AdminCategoryController::class, 'update'])->name('admin.api.categories.update');
    });
});

Route::get('cities/{department_id}', [CityController::class, 'index'])->name('api.list.cities');

Route::middleware(['auth:sanctum', 'verified', 'check.user.status'])->prefix('cart')->group(function () {
    Route::get('/', [CartController::class, 'index'])->name('api.cart.index');
    Route::post('/add', [CartController::class, 'store'])->name('api.cart.store');
    Route::delete('/remove/{product_id}', [CartController::class, 'destroy'])->name('api.cart.destroy');

    Route::get('/products', [CartProductController::class, 'index'])->name('api.cart.products.index');
});

Route::middleware(['auth:sanctum', 'verified', 'check.user.status'])->prefix('order')->group(function () {
    Route::post('/', [OrderController::class, 'store'])->name('api.order.store');
});
