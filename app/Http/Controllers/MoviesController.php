<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMovieRequest;
use App\Models\Movie;
use Illuminate\Http\Request;

class MoviesController extends Controller
{
    public function index()
    {
        return Movie::all();
    }

    public function store(AddMovieRequest $request)
    {
        return Movie::create($request->all());
    }
}