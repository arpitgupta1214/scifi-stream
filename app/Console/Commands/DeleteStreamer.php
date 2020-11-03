<?php

namespace App\Console\Commands;

use App\Streamer;
use Carbon\Carbon;
use Illuminate\Console\Command;

class DeleteStreamer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'DeleteStreamers:delete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $now = Carbon::now();
        $streamers = Streamer::all()->take(3);

        foreach ($streamers as $streamer){

            if ($streamer->created_at->addSeconds($streamer->stream_duration - 2)->format('Y-m-d H:i:s') < $now->format('Y-m-d H:i:s'))
            {
                Streamer::find($streamer->id)->delete();
            }

        }




    }
}
