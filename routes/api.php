<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
   Route::resource('/projects', ProjectController::class)->only(['store','destroy']);  
    Route::apiResource('/users', UserController::class);
});

Route::resource('/projects', ProjectController::class)->only(['store','destroy']);  

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

/*

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });

    Route::resource('projects', ProjectController::class)->only(['store','destroy']);
    Route::resource('users', UserController::class)->only(['store','destroy']);
    Route::resource('categories', CategoryController::class)->only(['store','destroy']);
    Route::resource('tasks', TaskController::class)->only(['store','destroy']);


    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::resource('projects', ProjectController::class)->only(['index','show']);
Route::resource('tasks', TaskController::class)->only(['index','show']);
Route::resource('categories', CategoryController::class)->only(['index','show']);
Route::resource('users', UserController::class)->only(['index','show']);

*/