<?php


namespace App\helper;


use Illuminate\Support\Facades\Artisan;

class ClearStream
{
        public static function clear()
        {
            return  Artisan::call('schedule:run');
        }
}
