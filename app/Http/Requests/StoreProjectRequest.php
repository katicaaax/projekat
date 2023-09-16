<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
//use Illuminate\Validation\Rules\Password;

class StoreProjectRequest extends FormRequest
{
 

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:55',
            'description' => 'required|string|max:55',
            'priority' => 'required|integer|max:10'
            
        ];
    }
}