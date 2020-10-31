<?php


namespace App\helper;


use function PHPSTORM_META\type;

class PTime
{


    public $pTime;

    public function hour($pTime)
    {

        if (str_contains($pTime, 'H')) {
            $time = ltrim($pTime, 'PT');
            return intval(strtok($time, 'H'));
        }
        return 0;
    }

    public function hourInSec($pTime)
    {
        return intval(self::hour($pTime) * 60 * 60);
    }

    public function min($pTime)
    {

        if (str_contains($pTime, 'M'))
        {

            $time = ltrim($pTime, 'PT');
            if (str_contains($time, 'H'))
            {
                $removeTillH = strstr($time,'H');
                $timeWithoutH = str_replace('H','',$removeTillH);
                $result = strtok($timeWithoutH, 'M');
                return intval($result);
            }
            return intval(strtok($time, 'M'));
        }
        return 0;
    }


    public function minInSec($pTime)
    {
        return intval(self::min($pTime)) * 60;
    }

    public function sec($pTime)
    {

        $time = ltrim($pTime, 'PT');
        if (str_contains($time, 'S'))
        {

            if (str_contains($time, 'M')) {
                $removeTillM = strstr($time, 'M');
                $removeM = str_replace('M', '', $removeTillM);
                return intval(strtok($removeM, 'S'));
            }

            if (str_contains($time, 'H')) {
                $removeTillH = strtok($time, 'H');
                $removeH = str_replace('H', '', $removeTillH);
                return intval(strtok($removeH, 'S'));
            }

            if (!str_contains($time, 'H') && !str_contains($time, 'M')) {
                return intval(strtok($time, 'S'));
            }
        }
        return 0;
    }

    public function timeInSec($pTime)
    {

        return self::hourInSec($pTime) + self::minInSec($pTime) + self::sec($pTime);

    }

}
