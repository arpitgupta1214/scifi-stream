<?php


namespace App\helper;


use Alaouy\Youtube\Facades\Youtube;
use App\Streamer;
use Carbon\Carbon;
use GuzzleHttp\Client;

class VimeoLink
{
    public $ip;
    public $link;
    public $time;


    public function vimeoStreamer($args = [])
    {
        $this->ip = $args['ip'];
        $this->link = $args['link'];
        $this->time = $args['time'];

        $streamers = Streamer::where('ip', $this->ip)->get();

        if (!$streamers->isEmpty()) {
            return back()->with('error', 'you already in queue');
        }

        $guzzle = new Client();
        $getApi = 'https://vimeo.com/api/oembed.json?url=' . $this->link;

        $vimVidApi = $guzzle->request('get', $getApi);
        $VimVideo = json_decode($vimVidApi->getBody()->getContents());

        $video_id = $VimVideo->video_id;


        if (!$VimVideo) {
            echo false;
//            return back()->with('error', 'Video Unavailable');
        }


//        $file = file_get_contents($this->link,false);

        $curl_handle=curl_init();
        curl_setopt($curl_handle, CURLOPT_URL,$this->link);
        curl_setopt($curl_handle, CURLOPT_CONNECTTIMEOUT, 2);
        curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl_handle, CURLOPT_USERAGENT, 'Your application name');
        $file = curl_exec($curl_handle);

        $html = new \DOMDocument();
        @$html->loadHTML($file);

        $checkValidurl = 'twitter:title';

        if (isset($VimVideo->title)) {
            $name = $VimVideo->title;

        } else {
            foreach ($html->getElementsByTagName('meta') as $a) {
                $property = $a->getAttribute('name');

                if ($property == $checkValidurl) {
                    $name = $a->getAttribute('content');

                }
            }
        }


        if (isset($VimVideo->duration)) {


            $videoDurationInSecs = intval($VimVideo->duration);

        } else {

            echo false;
//            return back()->with('error', 'Video is not shareable, please choose another one');

        }



        $streamDurationInSecs = intval($this->time ?? 60) * 60;
        $loop = intval($streamDurationInSecs / $videoDurationInSecs);

        if (Streamer::count() <= 2) {
            $start_time = Carbon::now();
        } else {

            $start_time = StartTimeControl::inQueueFirst();
        }

        $end_time = Carbon::parse($start_time)->addSeconds($streamDurationInSecs);


        $readyLink = 'https://player.vimeo.com/video/'
            . $video_id .
            '?loop=1&autopause=0&autoplay=1#t=0s&controls=0';

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

//            dd($exception);
            echo false;
//            return back()->with('error', ' Ops something went wrong, please try again later!');
        }


    }
}
