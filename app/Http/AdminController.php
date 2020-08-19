<?php

namespace App\Http;

class AdminController
{
    public function __invoke()
    {
        return view('admin');
    }
}