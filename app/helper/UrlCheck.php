<?php


namespace App\helper;


class UrlCheck
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

    public function check()
    {

        if (filter_var($this->url, FILTER_VALIDATE_URL) === FALSE) {
            return back()->with('error', 'Please enter valid URL');
        }

        return true;
    }

    public function checkHost()
    {
        if (!self::check())
        {
            return back()->with('error', 'Please enter valid URL');
        }

        try {
            return parse_url($this->url)['host'];
        } catch (\Exception $exception)
        {
            return back()->with('error','Please enter valid url');
        }
    }



}
