<?php


namespace App\helper;


use App\Streamer;
use Carbon\Carbon;
use GuzzleHttp\Client;

class DailyMotionLink
{
    public $ip;
    public $link;
    public $time;

    public function DailyMotionStreamer($args = [])
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
        $parts = parse_url($this->link);
        $video_id = str_replace('/video/', '', $parts['path']);


        $guzzle = new Client();
        $getApi = 'https://api.dailymotion.com/video/' . $video_id;

        $DailyVidApi = $guzzle->request('get', $getApi);
        $DailyVideo = json_decode($DailyVidApi->getBody()->getContents());


        $checkVideoAllowLink = $getApi . '?fields=allow_embed';
        $checkVideoAllow = $guzzle->request('get', $checkVideoAllowLink);
        $dailBody = json_decode($checkVideoAllow->getBody());

        if ($dailBody->allow_embed == false) {
            $error['error'] = true;
            echo $error;
//            return redirect('home')->with('error', 'Video is not shareable for other web-pages, please choose another one');
        }


        $searchfor = 'video:duration';
        $file = file_get_contents($this->link);
        $html = new \DOMDocument();
        @$html->loadHTML($file);


        foreach ($html->getElementsByTagName('meta') as $a) {

            $property = $a->getAttribute('property');
            if ($property == $searchfor) {
                $video_duration = intval($a->getAttribute('content'));
            }
        }


        $streamDurationInSecs = intval($this->time ?? 60) * 60;
        $loop = intval($streamDurationInSecs / $video_duration);


        if (Streamer::count() <= 2) {
            $start_time = Carbon::now();
        } else {

            $start_time = StartTimeControl::inQueueFirst();
        }

        $end_time = Carbon::parse($start_time)->addSeconds($streamDurationInSecs);


        $examples = "http://www.dailymotion.com/embed/video/x7vrygn?api=postMessage&id=player&syndication=lr:174800&autoplay=1&mute=0&info=1&quality=auto&start=66&html=1";

        $readyLink = 'https://www.dailymotion.com/embed/video/' . $video_id . '?info=0&api=postMessage&autoplay=1&start=0&loop=1';

        try {


            Streamer::create([
                'ip' => $this->ip,
                'link' => $readyLink,
                'name' => $DailyVideo->title,
                'video_duration' => $video_duration,
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
