<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'api/login',
        'api/planers',
        'api/planers/*',
        'api/planerTypes',
        'api/planerTypes/*',
        'api/planerLayouts',
        'api/planerLayouts/*',
        'api/users',
        'api/users/*',
        'api/register',
        'api/login',
        'api/orders',
        'api/orders/*',
        'api/productsByIds',
        'api/generate-pdf',
    ];
}
