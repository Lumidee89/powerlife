<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SuperAdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->user()) {
            return redirect('/login');
        }

        if ($request->user()->role !== 'super_admin') {
            return redirect('/');
        }

        return $next($request);
    }
}