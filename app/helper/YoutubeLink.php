<?php


namespace App\helper;


use Alaouy\Youtube\Facades\Youtube;
use App\Streamer;
use Carbon\Carbon;

class YoutubeLink
{
    public $ip;
    public $link;
    public $time;


    public function youtubeStreamer($args = [])
    {
        $this->ip = $args['ip'];
        $this->link = $args['link'];
        $this->time = $args['time'];


        $streamers = Streamer::where('ip', $this->ip)->get();

        if (!$streamers->isEmpty()) {
            $error['error'] = true;
            echo $error;
//            return back()->with('error', 'you already in queue');
        }

        $video_id = Youtube::parseVidFromURL($this->link);


        $video = Youtube::getVideoInfo($video_id);


        if (!$video) {
            $error['error'] = true;
            echo $error;
//            return back()->with('error', 'Video Unavailable');
        }

        $name = $video->snippet->title;

        $time = new PTime();

        $videoDurationInSecs = $time->timeInSec($video->contentDetails->duration);

        $readyLink = 'https://www.youtube.com/embed/'
            . $video_id
            . '?autoplay=1&controls=0&enablejsapi=1&version=3&loop=1&playsinline=1&playlist='
            . $video_id
//            . '&origin=http://127.0.0.1:8000'
        ;


        $streamDurationInSecs = intval($this->time ?? 60) * 60;
        $loop = intval($streamDurationInSecs / $videoDurationInSecs);


        if (Streamer::count() <= 2) {
            $start_time = Carbon::now();
        } else {

            $start_time = StartTimeControl::inQueueFirst();
        }

        $end_time = Carbon::parse($start_time)->addSeconds($streamDurationInSecs);


        try {

            Streamer::create([
                'ip' => $this->ip,
                'link' => $readyLink,
                'name' => $name,
                'video_duration' => $videoDurationInSecs,
                'stream_duration' => $streamDurationInSecs,
                'start_time' => $start_time,
                'end_time' => $end_time,
                'loop' => $loop
            ]);

            return back()->with('message', 'queue succeed');

        } catch (\Exception $exception) {

            $error['error'] = true;
            echo $error;
//            dd($exception);
//            return back()->with('error', ' Ops something went wrong, please try again later!');
        }


    }


}
