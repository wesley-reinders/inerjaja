<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogRequest;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $blogs = Blog::query()
        ->orderBy('created_at', 'desc')
        ->get()
        ->map(function ($blog) {
            $blog['readable_created_at'] = $blog->readable_created_at;
            return $blog; // Ensure the modified $blog is returned
        });

    
        return Inertia::render('Blogs/ListBlogs', [
        'blogs' => $blogs
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $blog = $request->all();
        Blog::query()->create($blog);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return Inertia::render('Blogs/Blog', [
            'editable' => true,
            'blog' => $blog
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        return Inertia::render('Blogs/EditBlog');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
