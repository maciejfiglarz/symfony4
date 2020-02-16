<?php

namespace App\Helper;

use Symfony\Component\Routing\RouterInterface;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\RequestContext;

class DateHelper extends BaseHelper
{

    public function prepareLongDate($date)
    {
        $monthsArray = [
            '01' => 'styczeń',
            '02' => 'luty',
            '03' => 'marzec',
            '04' => 'kwiecień',
            '05' => 'maj',
            '06' => 'czerwiec',
            '07' => 'lipiec',
            '08' => 'sierpień',
            '09' => 'wrzesień',
            '10' => 'październik',
            '11' => 'listopad',
            '12' => 'grudzień'
        ];

        $day = $date->format('d');
        $month = $date->format('m');
        $year = $date->format('Y');
        return $day . ' ' . $monthsArray[$month] . ' ' . $year;
    }

    public function getDaysNumberSinceToday($date): ?string
    {
        $date = is_string($date) ? new \DateTime($date) : $date;
        $today = new \DateTime('now');

        $diff = $today->diff($date)->format("%a");
        return $diff;
    }

    public function displayDaysNumberSinceToday($date): ?string
    {
        $days = $this->getDaysNumberSinceToday($date);
        if ($days == 0) {
            return 'Nowy użytkownik';
        }
        return $days == 1 ? $days . ' dzień' : $days . ' dni';
    }

    public function tranformDateAgo(?string $datetime, $show_date = true): ?string
    {
        $okres = strtotime($datetime);
        $now = time();
        $ending_date = "";
        $ending_time = "";
        if ($okres > $now) {
            return "Podana data nie może być większa od obecnej.";
        }

        if ($show_date) {
            $ending_date = ", " . date("Y-m-d", $okres);
            $ending_time = ", " . date("H:i", $okres);
        }

        $diff = $now - $okres;

        $minut = floor($diff / 60);
        $godzin = floor($minut / 60);
        $dni = floor($godzin / 24);
        $miesiecy = intval((date('Y', $now) - date('Y', $okres)) * 12 + (date('m', $now) - date('m', $okres)));
        $lata = intval(date('Y', $now) - date('Y', $okres));

        if ($minut <= 60) {
            switch ($minut) {
                case 0:
                    return "przed chwilą";
                case 1:
                    return "minutę temu";
                case ($minut >= 2 && $minut <= 4):
                case ($minut >= 22 && $minut <= 24):
                case ($minut >= 32 && $minut <= 34):
                case ($minut >= 42 && $minut <= 44):
                case ($minut >= 52 && $minut <= 54):
                    return "$minut minuty temu";
                    break;
                default:
                    return "$minut minut temu";
                    break;
            }
        }

        $okres_wczoraj = $now - (60 * 60 * 24);
        $okres_przedwczoraj = $now - (60 * 60 * 24 * 2);

        if ($godzin > 0 && $godzin <= 6) {

            if ($godzin == 1) {
                return "godzinę temu ";
            } else {
                if ($godzin > 1 && $godzin < 5) return "$godzin godziny temu";
                if ($godzin > 4) return "$godzin godzin temu";
            }

        } else if (date("Y-m-d", $okres) == date("Y-m-d", $now)) {
            return "dzisiaj" . $ending_time;
        } else if (date("Y-m-d", $okres_wczoraj) == date("Y-m-d", $okres)) {
            return "wczoraj" . $ending_time;
        } else if (date("Y-m-d", $okres_przedwczoraj) == date("Y-m-d", $okres)) {
            return "przedwczoraj" . $ending_time;
        }

        if ($dni > 0 && $dni <= intval(date('t', $okres))) {
            switch ($dni) {
                case ($dni < 7):
                    return "$dni dni temu" . $ending_date;
                    break;
                case 7:
                    return "tydzień temu" . $ending_date;
                    break;
                case ($dni > 7 && $dni < 14):
                    return "ponad tydzień temu" . $ending_date;
                    break;
                case 14:
                    return "dwa tygodnie temu" . $ending_date;
                    break;
                case ($dni > 14 && $dni < 21):
                    return "ponad 2 tygodnie temu" . $ending_date;
                    break;
                case 21:
                    return "3 tygodnie temu, " . date("Y-m-d", $okres);
                    break;
                case ($dni > 21 && $dni < 28):
                    return "ponad 3 tygodnie temu" . $ending_date;
                    break;
                case ($dni >= 28 && $dni < 32):
                    return "miesiąc temu";
                    break;
            }
        }


        if ($miesiecy > 0 && $miesiecy <= 12) {
            switch ($miesiecy) {
                case 1:
                    return "miesiąc temu" . $ending_date;
                    break;
                case 2:
                case 4:
                    return "$miesiecy miesiące temu" . $ending_date;
                    break;
                case 3:
                    return "ćwierć roku temu" . $ending_date;
                    break;
                case 6:
                    return "pół roku temu" . $ending_date;
                    break;
                case 12:
                    return "roku temu" . $ending_date;
                    break;
                default:
                    return "$miesiecy miesiecy temu" . $ending_date;
                    break;
            }
        }

        if ($lata > 0) {
            $lata1 = array("2", "3", "4");
            $lata2 = array("0", "1", "5", "6", "7", "8", "9", "12", "13", "14");
            if ($lata == 1) {
                return "rok temu" . $ending_date;
            } else if (in_array(substr("" . $lata, -1), $lata2) || in_array(substr("" . $lata, -2, 2), $lata2)) {
                return "$lata lat temu" . $ending_date;
            } else if (in_array(substr((string)$lata, -1), $lata1)) {
                return "$lata lata temu" . $ending_date;
            }
        }

        return date("Y-m-d", $okres);
    }

}