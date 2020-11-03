<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Streamer extends Model
{
    protected $guarded = [];
    protected $table = 'streamers';
    protected $dates = ['start_time', 'end_time'];

    public function first3()
    {
        return Streamer::orderBy('created_at', 'ASC')->limit(3)->get();
    }

    public  function diff()
    {
        $end = Carbon::parse($this->created_at->format('Y-m-d H:m:s'))->addMinutes($this->stream_duration);
        return Carbon::now()->diffForHumans(Carbon::parse($end));
    }

    public function second()
    {

        return Streamer::orderBy('created_at', 'asc')->skip(1)->take(1)->get();


    }

    public function third()
    {
        return Streamer::orderBy('created_at', 'asc')->skip(2)->take(1)->get();
    }

    public function skip3takeall()
    {
        if (Streamer::count() > 3)
        {
            return Streamer::skip(3)->take(Streamer::count()-3)->get();
        }
        return null;
    }

    public static function soonOut()
    {
        return Streamer::orderBy('end_time','asc')->first();
    }

}
