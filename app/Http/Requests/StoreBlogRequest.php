<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;


class StoreBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'content' => 'required|json',
            'owner' => 'required|string'
        ];
    }

    public function after()
    {
        return [
            function (Validator $validator) {
                $content = json_decode(data_get($this, 'content'));

                if ($validator->errors()->isNotEmpty()) {
                    return;
                }

                if(count($content) > 5) {
                    $validator->errors()->add('content', 'Content cannot have more than 20 sections.');
                    return;
                }
            }
        ];
    }
}
