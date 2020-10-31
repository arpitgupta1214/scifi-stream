<?php


namespace App\helper;


use App\Streamer;
use Carbon\Carbon;

class SoundCloudLink
{
    public $ip;
    public $link;
    public $time;

    public function SoundCloudStreamer($args = [])
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


        $searchfor = 'twitter:player';
        $checkValidurl = 'twitter:player';

        $file = file_get_contents($this->link);
        $html = new \DOMDocument();
        @$html->loadHTML($file);


        foreach ($html->getElementsByTagName('meta') as $a)
        {
            $property = $a->getAttribute('name');
            if ($property !== $checkValidurl) {
                $goodURL = $a->getAttribute('name');

            }

        }


        foreach ($html->getElementsByTagName('meta') as $a) {
            $property = $a->getAttribute('property');

            if ($property === $searchfor) {

                $embedURL = $a->getAttribute('content');
            }


        }


        foreach ($html->getElementsByTagName('title') as $a) {
            $name = $a->textContent;
        }


        $autoPlayReadyURL = str_replace('auto_play=false', 'auto_play=true', $embedURL);


        foreach ($html->getElementsByTagName('meta') as $a) {
            $property = $a->getAttribute('itemprop');

            if ($property === 'duration') {

                $durationStr = $a->getAttribute('content');
            }
        }


        $time = new PTime();
        $time->timeInSec($durationStr);

        $videoDurationInSecs = $time->timeInSec($durationStr);
        $streamDurationInSecs = intval($this->time ?? 60) * 60;
        $loop = intval($streamDurationInSecs / $videoDurationInSecs);

        $exampleLink = "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/90787841&auto_play=true&show_artwork=true&visual=true&origin=twitter&sharing=false&download=false&show_user=false&single_active=false";

        if (Streamer::count() <= 2)
        {
            $start_time = Carbon::now();
        } else {

            $start_time =  StartTimeControl::inQueueFirst();
        }

        $end_time = Carbon::parse($start_time)->addSeconds($streamDurationInSecs);



        $readyLink = str_replace('origin=twitter','origin=twitter&sharing=false&download=false&show_user=false&single_active=false',
            $autoPlayReadyURL);



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
