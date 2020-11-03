<?php


namespace App\helper;


use App\Streamer;
use Carbon\Carbon;

class StartTimeControl
{


    public static function countStreamers()
    {
        return Streamer::count();
    }

    public static function inQueueFirst()
    {


        $all = Streamer::all();

        foreach ($all as $one) {
            $arr[] = Carbon::parse($one->end_time)
                ->toDateTime()
                ->format('Y-m-d H:i:s');
        }

        $shift = new ArrayShiftMine([
            'arr' => $arr,
        ]);

       return $shift->arrayShift();


    }


}
