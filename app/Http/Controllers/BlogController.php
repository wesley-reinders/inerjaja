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
        $blogs = Blog::query()->select('id', 'title', 'owner')->orderBy('created_at', 'desc')->get();
        return Inertia::render('Blogs/ListBlogs', [
            'blogs' => $blogs
        ]);
    }

        /**
     * Display a listing of the resource.
     */
    public function create()
    {
        return Inertia::render('Blogs/CreateBlog');
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
        //
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
