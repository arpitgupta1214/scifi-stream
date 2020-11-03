<?php


namespace App\helper;


use App\Streamer;
use Carbon\Carbon;

class UpdateTime
{

    public function checkEntryFirst()
    {
        $streamFirst = Streamer::first();

        if (is_null($streamFirst)) {
            return null;
        }
        return $streamFirst;
    }

    public function checkEntrySecond()
    {
        $streamSecond = new Streamer();

        if (is_null($streamSecond->second())) {
            return null;
        }
        return $streamSecond->second();
    }

    public function checkEntryThird()
    {
        $streamThird = new Streamer();

        if (is_null($streamThird->third())) {
            return null;
        }
        return $streamThird->third();
    }

    function GetBetween($content, $start, $end)
    {
        $r = explode($start, $content);
        if (isset($r[1])) {
            $r = explode($end, $r[1]);
            return $r[0];
        }
        return '';
    }


    public function updateTime()
    {


        if (!is_null(self::checkEntryFirst())) {

            $url = new UrlCheck([
                'ip' => self::checkEntryFirst()->ip,
                'url' => self::checkEntryFirst()->link,
                'time' => self::checkEntryFirst()->time,
            ]);

            $continueTIme = new ContinueTime([
                'start_time' => self::checkEntryFirst()->start_time,
                'video_duration' => self::checkEntryFirst()->video_duration
            ]);


            if (str_contains($url->checkHost(), 'youtube.com')) {
                $link = self::checkEntryFirst()->link;
                $toChange = self::GetBetween($link, 'autoplay=1&', 'controls=0');

                if (empty($toChange)) {
                    $newLink = str_replace('autoplay=1&', 'autoplay=1&' . $continueTIme->forYoutube() . '&', $link);
                } else {
                    $newLink = str_replace($toChange, $continueTIme->forYoutube() . '&', $link);
                }

                //       looP
                $now = Carbon::now();
                $first = Streamer::first();
                $creatPlusStreamDur = Carbon::parse($first->start_time)->addSeconds($first->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $first->video_duration);

                Streamer::first()->update([
                    'link' => $newLink,
                    'loop' => $loop
                ]);

            }

            if (str_contains($url->checkHost(), 'vimeo.com')) {
                $link = self::checkEntryFirst()->link;
                $toChange = self::GetBetween($link, 'autoplay', 's&controls');
                $newLink = str_replace($toChange, '=1#t=' . $continueTIme->forVimeo(), $link);

                //       looP
                $now = Carbon::now();
                $first = Streamer::first();
                $creatPlusStreamDur = Carbon::parse($first->start_time)->addSeconds($first->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $first->video_duration);

                Streamer::first()->update([
                    'link' => $newLink,
                    'loop' => $loop
                ]);

            }

            if (str_contains($url->checkHost(), 'dailymotion.com')) {
                $link = self::checkEntryFirst()->link;
                $toChange = self::GetBetween($link, 'autoplay=', '&loop=1');
                $newLink = str_replace($toChange, '1&start=' . $continueTIme->forDaily(), $link);

                //       looP
                $now = Carbon::now();
                $first = Streamer::first();
                $creatPlusStreamDur = Carbon::parse($first->start_time)->addSeconds($first->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $first->video_duration);

                Streamer::first()->update([
                    'link' => $newLink,
                    'loop' => $loop
                ]);

            }

            if (str_contains($url->checkHost(), 'soundcloud.com'))
            {

                $now = Carbon::now();
                $first = Streamer::first();
                $creatPlusStreamDur = Carbon::parse($first->start_time)->addSeconds($first->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $first->video_duration);

                Streamer::first()->update([
                    'loop' => $loop
                ]);

            }


        }

        if (!self::checkEntrySecond()->isEmpty()) {


            $url = new UrlCheck([
                'ip' => self::checkEntrySecond()[0]->ip,
                'url' => self::checkEntrySecond()[0]->link,
                'time' => self::checkEntrySecond()[0]->time,
            ]);


            $continueTIme = new ContinueTime([
                'start_time' => self::checkEntrySecond()[0]->start_time,
                'video_duration' => self::checkEntrySecond()[0]->video_duration
            ]);


            if (str_contains($url->checkHost(), 'youtube.com')) {

                $link = self::checkEntrySecond()[0]->link;

                $toChange = self::GetBetween($link, 'autoplay=1&', 'controls=0');

                if (empty($toChange)) {
                    $newLink = str_replace('autoplay=1&', 'autoplay=1&' . $continueTIme->forYoutube() . '&', $link);
                } else {
                    $newLink = str_replace($toChange, $continueTIme->forYoutube() . '&', $link);
                }

                $StreamerSecond = new Streamer();
                $now = Carbon::now();
                $second = Streamer::where('id', $StreamerSecond->second()[0]->id)->first();
                $creatPlusStreamDur = Carbon::parse($second->start_time)->addSeconds($second->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $second->video_duration);

                Streamer::where('id', $StreamerSecond->second()[0]->id)->update([
                    'link' => $newLink,
                    'loop' => $loop,
                ]);

            }

            if (str_contains($url->checkHost(), 'vimeo.com')) {
                $link = self::checkEntrySecond()[0]->link;
                $toChange = self::GetBetween($link, 'autopla', 'ontrols');


                $newLink = str_replace($toChange, 'y=1#t=' . $continueTIme->forVimeo() . 's&c', $link);

                $StreamerSecond = new Streamer();
                $now = Carbon::now();
                $second = Streamer::where('id', $StreamerSecond->second()[0]->id)->first();
                $creatPlusStreamDur = Carbon::parse($second->start_time)->addSeconds($second->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $second->video_duration);

                Streamer::where('id', $StreamerSecond->second()[0]->id)->update([
                    'link' => $newLink,
                    'loop' => $loop,
                ]);
            }

            if (str_contains($url->checkHost(), 'dailymotion.com')) {
                $link = self::checkEntrySecond()[0]->link;
                $toChange = self::GetBetween($link, 'autoplay=', '&loop=1');

                $newLink = str_replace($toChange, '1&start=' . $continueTIme->forDaily(), $link);

                $StreamerSecond = new Streamer();
                $now = Carbon::now();
                $second = Streamer::where('id', $StreamerSecond->second()[0]->id)->first();
                $creatPlusStreamDur = Carbon::parse($second->start_time)->addSeconds($second->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $second->video_duration);

                Streamer::where('id', $StreamerSecond->second()[0]->id)->update([
                    'link' => $newLink,
                    'loop' => $loop,
                ]);
            }

            if (str_contains($url->checkHost(), 'soundcloud.com'))
            {

                $StreamerSecond = new Streamer();
                $now = Carbon::now();
                $second = Streamer::where('id', $StreamerSecond->second()[0]->id)->first();
                $creatPlusStreamDur = Carbon::parse($second->start_time)->addSeconds($second->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $second->video_duration);
                Streamer::where('id', $StreamerSecond->second()[0]->id)->update([
                    'loop' => $loop
                ]);

            }


        }

        if (!self::checkEntryThird()->isEmpty()) {

            $url = new UrlCheck([
                'ip' => self::checkEntryThird()[0]->ip,
                'url' => self::checkEntryThird()[0]->link,
                'time' => self::checkEntryThird()[0]->time,
            ]);

            $continueTIme = new ContinueTime([
                'start_time' => self::checkEntryThird()[0]->start_time,
                'video_duration' => self::checkEntryThird()[0]->video_duration
            ]);

            if (str_contains($url->checkHost(), 'youtube.com')) {
                $link = self::checkEntryThird()[0]->link;

                $toChange = self::GetBetween($link, 'autoplay=1&', 'controls=0');

                if (empty($toChange)) {
                    $newLink = str_replace('autoplay=1&', 'autoplay=1&' . $continueTIme->forYoutube() . '&', $link);
                } else {
                    $newLink = str_replace($toChange, $continueTIme->forYoutube() . '&', $link);
                }

                $StreamerThird = new Streamer();
                $now = Carbon::now();
                $third = Streamer::where('id', $StreamerThird->third()[0]->id)->first();
                $creatPlusStreamDur = Carbon::parse($third->start_time)->addSeconds($third->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $third->video_duration);
                Streamer::where('id', $StreamerThird->third()[0]->id)->update([
                    'link' => $newLink,
                    'loop' => $loop
                ]);
            }

            if (str_contains($url->checkHost(), 'vimeo.com')) {
                $link = self::checkEntryThird()[0]->link;
                $toChange = self::GetBetween($link, 'autopla', 'ontrols');

                $newLink = str_replace($toChange, 'y=1#t=' . $continueTIme->forVimeo() . 's&c', $link);

                $StreamerThird = new Streamer();
                $now = Carbon::now();
                $third = Streamer::where('id', $StreamerThird->third()[0]->id)->first();
                $creatPlusStreamDur = Carbon::parse($third->start_time)->addSeconds($third->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $third->video_duration);
                Streamer::where('id', $StreamerThird->third()[0]->id)->update([
                    'link' => $newLink,
                    'loop' => $loop
                ]);
            }

            if (str_contains($url->checkHost(), 'dailymotion.com')) {
                $link = self::checkEntryThird()[0]->link;
                $toChange = self::GetBetween($link, 'autoplay=', '&loop=1');

                $newLink = str_replace($toChange, '1&start=' . $continueTIme->forDaily(), $link);

                $StreamerThird = new Streamer();
                $now = Carbon::now();
                $third = Streamer::where('id', $StreamerThird->third()[0]->id)->first();
                $creatPlusStreamDur = Carbon::parse($third->start_time)->addSeconds($third->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $third->video_duration);
                Streamer::where('id', $StreamerThird->third()[0]->id)->update([
                    'link' => $newLink,
                    'loop' => $loop
                ]);
            }

            if (str_contains($url->checkHost(), 'soundcloud.com'))
            {

                $StreamerThird = new Streamer();
                $now = Carbon::now();
                $third = Streamer::where('id', $StreamerThird->third()[0]->id)->first();
                $creatPlusStreamDur = Carbon::parse($third->start_time)->addSeconds($third->stream_duration);
                $durationLeftInSec = $now->diffInSeconds($creatPlusStreamDur);
                $loop = intval($durationLeftInSec / $third->video_duration);
                Streamer::where('id', $StreamerThird->third()[0]->id)->update([
                    'loop' => $loop
                ]);

            }

        }


        return back();
    }


}
