<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Movie;
use App\Models\User;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalMovies = Movie::count();

        $totalUsers = User::count();

        /*
        Temporary values for now.
        Later these will come from:
        - streams table
        - subscriptions/payments table
        */

        $streamsToday = 0;

        $revenue = 0;

        $recentMovies = Movie::latest()
            ->take(5)
            ->get();

        return Inertia::render(
            'Admin/Dashboard',
            [
                'stats' => [
                    [
                        'title' => 'Total Movies',
                        'value' => $totalMovies,
                        'icon' => 'movies',
                    ],

                    [
                        'title' => 'Total Users',
                        'value' => $totalUsers,
                        'icon' => 'users',
                    ],

                    [
                        'title' => 'Streams Today',
                        'value' => $streamsToday,
                        'icon' => 'streams',
                    ],

                    [
                        'title' => 'Revenue',
                        'value' => '$' . number_format($revenue),
                        'icon' => 'revenue',
                    ],
                ],

                'recentMovies' => $recentMovies,
            ]
        );
    }
}