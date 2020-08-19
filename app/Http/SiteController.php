<?php

namespace App\Http;

class SiteController
{
    public function __invoke()
    {
        return view('site');
    }
}