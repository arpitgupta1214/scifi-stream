<?php


namespace App\helper;


use Carbon\Carbon;

class ContinueTime
{
    public $start_time;
    public $video_duration;


    public  function __construct($args = [])
    {
        $this->start_time = $args['start_time'];
        $this->video_duration = $args['video_duration'];

    }


    public function trackOnAirInSecs()
    {
       return Carbon::parse($this->start_time->format('H:i:s'))->diffInSeconds(Carbon::now());
    }

    public function timeContinuesAtInSec()
    {
       return self::trackOnAirInSecs() % $this->video_duration;
    }

    public function timeContinuesAtInFormat()
    {
        $secs = self::timeContinuesAtInSec();
        return gmdate("H:i:s", $secs);

    }

    public function forYoutube()
    {
        return 'start=' . self::timeContinuesAtInSec();
    }

    public function forVimeo()
    {

        $videoDuration = Carbon::create(0, 0, 0, 0, 0, 0)
            ->addSeconds(self::timeContinuesAtInSec())->toTimeString();
//            ->format('h:i:s');

        $hourChanged  = substr_replace($videoDuration,'h',2,1);
        $minChanged  = substr_replace($hourChanged,'m',5,1);
        $result  = substr_replace($minChanged,'s',8,1);

        return $result;
    }

    public function forDaily()
    {
        return self::timeContinuesAtInSec();
    }
}
