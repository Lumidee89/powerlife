<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MovieController extends Controller
{
    public function index()
    {
        $movies = Movie::latest()->get();

        return response()->json([
            'success' => true,
            'data' => $movies,
        ]);
    }

    public function featured()
    {
        $movies = Movie::where('featured', true)
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'data' => $movies,
        ]);
        }

    public function store(Request $request)
    {
        if ($request->user()->role !== 'super_admin') {

            return response()->json([
                'message' => 'Unauthorized',
            ], 403);
        }

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'thumbnail' => 'required|image',
            'video' => 'required|mimes:mp4,mov,avi,mkv',
            'category' => 'required|string',
            'duration' => 'nullable|string',
            'release_year' => 'nullable|string',
            'featured' => 'nullable|boolean',
        ]);

        $thumbnailPath = $request
            ->file('thumbnail')
            ->store('movies/thumbnails', 'public');

        $videoPath = $request
            ->file('video')
            ->store('movies/videos', 'public');
            $movie = Movie::create([
            'title' => $request->title,
            'description' => $request->description,
            'thumbnail' => asset('storage/' . $thumbnailPath),
            'video_url' => asset('storage/' . $videoPath),
            'category' => $request->category,
            'duration' => $request->duration,
            'release_year' => $request->release_year,
            'featured' => $request->featured ?? false,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Movie uploaded successfully',
            'data' => $movie,
        ]);
    }

    public function show($id)
    {
        $movie = Movie::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $movie,
        ]);
    }

    public function stream(Movie $movie)
    {
        return response()->file(
            storage_path(
                'app/public/movies/videos/' .
                basename($movie->video_url)
            ),
            [
                'Content-Type' => 'video/mp4',
                'Accept-Ranges' => 'bytes',
            ]
        );
    }
}