<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Movie;

use Illuminate\Http\Request;

use Inertia\Inertia;

class MovieController extends Controller
{
    public function index()
    {
        $movies = Movie::latest()->get();

        return Inertia::render(
            'Admin/Movies/Index',
            [
                'movies' => $movies,
            ]
        );
    }

    public function create()
    {
        return Inertia::render(
            'Admin/Movies/AddMovie'
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',

            'description' => 'required',

            'thumbnail' => 'required|image',

            'video' => 'required|mimes:mp4,mov,avi,mkv',

            'category' => 'required|string',

            'featured' => 'nullable|boolean',
        ]);

        $thumbnailPath = $request
            ->file('thumbnail')
            ->store(
                'movies/thumbnails',
                'public'
            );

        $videoPath = $request
            ->file('video')
            ->store(
                'movies/videos',
                'public'
            );

        Movie::create([
            'title' => $request->title,

            'description' =>
                $request->description,

            'thumbnail' =>
                url('storage/' . $thumbnailPath),

            'video_url' =>
                url('storage/' . $videoPath),

            'category' =>
                $request->category,

            'featured' =>
                $request->featured ?? false,
        ]);

        return redirect()
            ->route('movies.index')
            ->with(
                'success',
                'Movie uploaded successfully'
            );
    }

    public function edit($id)
    {
        $movie = Movie::findOrFail($id);

        return Inertia::render(
            'Admin/Movies/EditMovie',
            [
                'movie' => $movie,
            ]
        );
    }

    public function update(
        Request $request,
        $id
    ) {

        $movie = Movie::findOrFail($id);

        $request->validate([
            'title' => 'required',

            'description' => 'required',

            'category' => 'required',
        ]);

        if ($request->hasFile('thumbnail')) {

            $thumbnailPath = $request
                ->file('thumbnail')
                ->store(
                    'movies/thumbnails',
                    'public'
                );

            $movie->thumbnail =
                asset(
                    'storage/' .
                    $thumbnailPath
                );
        }

        if ($request->hasFile('video')) {

            $videoPath = $request
                ->file('video')
                ->store(
                    'movies/videos',
                    'public'
                );

            $movie->video_url =
                asset(
                    'storage/' .
                    $videoPath
                );
        }

        $movie->update([
            'title' => $request->title,

            'description' =>
                $request->description,

            'category' =>
                $request->category,

            'featured' =>
                $request->featured ?? false,
        ]);

        return redirect()
            ->route('movies.index')
            ->with(
                'success',
                'Movie updated successfully'
            );
    }

    public function destroy($id)
    {
        $movie = Movie::findOrFail($id);

        $movie->delete();

        return back()->with(
            'success',
            'Movie deleted successfully'
        );
    }
}