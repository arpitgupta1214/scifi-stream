<?php


namespace App\helper;


use App\Streamer;

class User_ip
{
    public static function active()
    {
        $arr = Streamer::all();
        $count = 0;

        foreach ($arr as $one)
        {
            if ($one->ip == request()->ip())
            {
                $count++;
            }

        }

        if ($count > 0){
            return true;
        }
        return false;
    }

}
