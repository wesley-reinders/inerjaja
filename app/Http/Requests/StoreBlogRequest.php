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
            'content' => 'required|array',
            'owner' => 'required|string'
        ];
    }

    public function after()
    {
        return [
            function (Validator $validator) {
                $content = data_get($this, 'content');

                if ($validator->errors()->isNotEmpty()) {
                    return;
                }
                
                foreach ($content as $index) {
                    if ($index === "") {
                        $validator->errors()->add('content', 'Content cannot be empty.');
                        return;
                    }
                }

                if(count($content) > 10) {
                    $validator->errors()->add('content', 'Content cannot have more than 10 sections.');
                    return;
                }
                else if (count($content) < 1) {
                    $validator->errors()->add('content', 'There needs to be atleast 1 content section.');
                    return;
                }
            }
        ];
    }
}
