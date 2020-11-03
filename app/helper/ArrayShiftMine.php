<?php


namespace App\helper;


use App\Streamer;

class ArrayShiftMine
{
    public $arr;


    public function __construct($args = [])
    {
        $this->arr = $args['arr'];
    }

    public function arrayShift()
    {
        $num = Streamer::count() - 3;

        $compare_function = function ($a, $b) {

            $a_timestamp = strtotime($a); // convert a (string) date/time to a (int) timestamp
            $b_timestamp = strtotime($b);

            // new feature in php 7
            return $a_timestamp <=> $b_timestamp;
        };

        usort($this->arr, $compare_function);

        $sortedArray = $this->arr;


        if ($num >= 0) {
            $number = 0;
            while ($number < $num) {
                $number++;
                array_shift($sortedArray);
            }
            return $sortedArray[0];
        }
        return false;
    }


}
