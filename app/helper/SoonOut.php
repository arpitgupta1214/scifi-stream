<?php


namespace App\helper;


use App\Streamer;
use Carbon\Carbon;

class SoonOut
{

    public function vid()
    {
        $streamers = Streamer::all();

        if (!$streamers->isEmpty()) {
            foreach ($streamers as $one) {
                $now = Carbon::now();
                $duration = $one->stream_duration;
                $started = $one->start_time;
                $endTime = Carbon::parse($started)->addSeconds($duration);
                $each = $now->diffInSeconds($endTime);
                $times[] = $each;
            }
            return min($times);
        }
        return null;

    }

    public function vidForJs()
    {
        $streamers = new Streamer();

        if (!$streamers->first3()->isEmpty()) {
            foreach ($streamers->first3() as $one) {
                $now = Carbon::now();
                $duration = $one->stream_duration;
                $started = $one->start_time;
                $endTime = Carbon::parse($started)->addSeconds($duration);
                $each = $now->diffInSeconds($endTime);
                $times['time'] = $each;
                $timesAndID['time'][] = $each;
                $timesAndID['id'][] = $one->id;

            }

            $time = min($timesAndID['time']);

            return Carbon::now()->addSeconds($time)->format('Y-m-d H:i:s');
        }
        return null;

    }


}
