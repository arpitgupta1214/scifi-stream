<?php


namespace App\helper;


class RouteLink
{

    public $ip;
    public $url;
    public $time;

    public function __construct($args = [])
    {

        $this->ip = $args['ip'];
        $this->url = $args['url'];
        $this->time = $args['time'];
    }

    public function to()
    {
        $check = new UrlCheck([
            'ip' => $this->ip,
            'url' => $this->url,
            'time' => $this->time
        ]);


        $youtube = new YoutubeLink();
        $soundCloud = new SoundCloudLink();
        $vimeo = new VimeoLink();
        $daily = new DailyMotionLink();
        $facebook = new FacebookLink();


        if ($check->checkHost() == 'www.youtube.com'
            or $check->checkHost() == 'youtube.com'
            or  $check->checkHost() == 'www.youtu.be'
            or $check->checkHost() == 'youtu.be')
        {

           return $youtube->youtubeStreamer([
                'ip' => $this->ip,
                'link' => $this->url,
                'time' => $this->time
             ]);
        }

        if ($check->checkHost() == 'soundcloud.com' or $check->checkHost() == 'www.soundcloud.com')
        {
            return $soundCloud->SoundCloudStreamer([
                'ip' => $this->ip,
                'link' => $this->url,
                'time' => $this->time
            ]);
        }

        if ($check->checkHost() == 'vimeo.com' or $check->checkHost() == 'www.vimeo.com')
        {
            return $vimeo->vimeoStreamer([
                'ip' => $this->ip,
                'link' => $this->url,
                'time' => $this->time
            ]);
        }

        if ($check->checkHost() == 'dailymotion.com' or $check->checkHost() == 'www.dailymotion.com')
        {
            return $daily->DailyMotionStreamer([
                'ip' => $this->ip,
                'link' => $this->url,
                'time' => $this->time
            ]);
        }

        if ($check->checkHost() == 'facebook.com' or $check->checkHost() == 'www.facebook.com')
        {
            return $facebook->FacebookStreamer([
                'ip' => $this->ip,
                'link' => $this->url,
                'time' => $this->time
            ]);
        }

        return back()->with('error', 'Not supported host');
    }


}
