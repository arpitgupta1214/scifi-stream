<?php


namespace App\helper;


use App\Streamer;
use GuzzleHttp\Client;

class FacebookLink
{
    public $ip;
    public $link;
    public $time;

    public function FacebookStreamer($args = [])
    {
        $this->ip = $args['ip'];
        $this->link = $args['link'];
        $this->time = $args['time'];

        $streamers = Streamer::where('ip', $this->ip)->get();

        if (!$streamers->isEmpty()) {
            return back()->with('error', 'you already in queue');
        }






    }

}
