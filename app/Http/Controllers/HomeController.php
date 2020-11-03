<?php

namespace App\Http\Controllers;

use App\About;
use App\Attribute;
use App\Category;
use App\helper\ClearStream;
use App\helper\ContinueTime;
use App\helper\DailyMotionLink;
use App\helper\RouteLink;
use App\helper\SoonOut;
use App\helper\StartTimeControl;
use App\helper\UpdateTime;
use App\helper\User_ip;
use App\Info;
use App\Product;
use App\Streamer;
use App\SubCategory;

use Carbon\Carbon;
use Carbon\CarbonTimeZone;
use http\Client\Response;

use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Session;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth')->only('createTranslate');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($locale, $forID)
    {


        ClearStream::clear();
        $info = Info::with('slides', 'partners')->get()->first();
        App::setLocale($locale);
        $attribute = Attribute::first();


        $check = new UpdateTime();
        $check->updateTime();


        $soon = new SoonOut();
        $soonOut = $soon->vid();
        $soonOutVid = $soon->vidForJs();


        $user_ip = User_ip::active();


        if ($forID >= 1) {
            $currentStreaming = Streamer::where('id', $forID)->first();
        } else {
            $currentStreaming = null;
        }


        $streamers = new Streamer();
        $first = Streamer::first();
        $three = $streamers->first3();

        $StreamersQuantity = Streamer::all()->count() - 3;
        if ($StreamersQuantity <= 0) {
            $StreamersQuantity = 0;
        }

        $linksWaiting = $streamers->skip3takeall();


        if (isset(Streamer::soonOut()->id)) {

            $soonOutVids_ID = Streamer::soonOut()->id;
        } else {

            $soonOutVids_ID = null;
        }

        if (is_null($currentStreaming)) {

            $fakeLink = ['link' => 'https://www.youtube.com/embed/lPVBrRd9wCo?controls=1&loop=1&autoplay=0&playlist=lPVBrRd9wCo'];

            $currentStreaming = (object)$fakeLink;

            return view('home', compact('attribute', 'locale', 'info', 'three', 'first', 'StreamersQuantity', 'linksWaiting', 'forID', 'currentStreaming', 'soonOut', 'soonOutVid', 'soonOutVids_ID', 'user_ip'));
        }


        return view('home', compact('attribute', 'locale', 'info', 'three', 'first', 'StreamersQuantity', 'linksWaiting', 'forID', 'currentStreaming', 'soonOut', 'soonOutVid', 'soonOutVids_ID', 'user_ip'));

    }

    public function streaming($locale, $id)
    {

        ClearStream::clear();
        return redirect('home/' . $locale . '/' . $id);
    }

    public function stream()
    {



//        sleep(1);


        $this->validate(request(), [
            'link' => 'required|max:1255',
            'time' => 'required|numeric|max:120',

        ]);


        ClearStream::clear();

        $ip = request()->ip();
        $link = request('link');
        $streamDuration = request('time');


        if (Streamer::count() > 9) {
            return back()->with('error', 'Queue Full please wait before space comes free');
        }

        $RouteLink = new RouteLink([
            'ip' => $ip,
            'url' => $link,
            'time' => $streamDuration
        ]);

        $RouteLink->to();


        $check = new UpdateTime();
        $check->updateTime();


        if (Streamer::count() < 4) {

            $error = Session::get('error');
            if (is_string($error))
            {
                return back()->with('error', $error);
            }
           return redirect('home');
        }

        return back();


    }

    public function cleanStreams()
    {
        ClearStream::clear();

        return redirect('/');
    }

    public function jsDeleteStream($id)
    {


        Streamer::find($id)->delete();

        return back();

    }


    public function show($locale, $id)
    {

        ClearStream::clear();
        $info = Info::with('slides', 'partners')->get()->first();
        App::setLocale($locale);
        $StreamersQuantity = Streamer::all()->count() - 3;
        $attribute = Attribute::first();

        $streamers = new Streamer();
        $three = $streamers->first3();
        $first = Streamer::first();

        return view('show', compact('attribute', 'locale', 'info', 'three', 'first', 'StreamersQuantity'));
    }


    public function portfolio($locale)
    {
        $info = Info::with('slides', 'partners')->get()->first();
        $categories = Category::with('sub')->get();
        $products = Product::all();
        $subCategory = SubCategory::with('products')->get();
        $productsTime = Product::with('images')->orderByDesc('created_at')->get();
        $productsPrice = Product::with('images')->orderByDesc('price')->get();
        $productsIO = Product::with('images')->where('favorite', 1)->orderByDesc('created_at')->get();
        $productsRandom = Product::with('images')->inRandomOrder()->get();

//        dd($productsRandom);


        App::setLocale($locale);

        $attribute = Attribute::first();

        return view('catalog', compact('attribute', 'locale', 'productsTime', 'productsPrice', 'categories', 'info', 'products', 'subCategory', 'productsIO', 'productsRandom'));
    }

    public function contact($locale)
    {
        App::setLocale($locale);
        $info = Info::with('slides', 'partners')->get()->first();
        $attribute = Attribute::first();

        return view('contact', compact('locale', 'attribute', 'info'));

    }

    public function about($locale)
    {

        App::setLocale($locale);
        $about = About::first();
        $info = Info::with('slides', 'partners')->get()->first();
        $attribute = Attribute::first();

        return view('about', compact('locale', 'attribute', 'info', 'about'));
    }

    public function createTranslate()
    {

        $data = [
            'name' => 'attributes',

            'en' => ['title' => 'Title',
                'description' => 'Description',
                'logo' => 'Logo',
                'meta_words' => 'Meta Words',
                'web_nav_item_home' => 'Home',
                'web_nav_item_catalog' => 'Catalog',
                'web_nav_item_about' => 'About',
                'web_nav_item_contact' => 'Contact',],

            'ka' => ['title' => 'სათაური',
                'description' => 'აღწერა',
                'logo' => 'ლოგო',
                'meta_words' => 'მეტა სიტყვები',
                'web_nav_item_home' => 'მთავარი',
                'web_nav_item_catalog' => 'კატალოგი',
                'web_nav_item_about' => 'ჩვენს შესახებ',
                'web_nav_item_contact' => 'კონტაქტი',],
        ];
        Attribute::create($data);

        return redirect('home');
    }


    public function children()
    {
        $info = Info::with('slides', 'partners')->get()->first();
        $attribute = Attribute::first();
        $locale = App::setLocale('en');


        return view('children', compact('info', 'attribute', 'locale'));
    }

    public function info()
    {
        $info = Info::with('slides', 'partners')->get()->first();
        $attribute = Attribute::first();
        $locale = App::setLocale('en');


        return view('info', compact('info', 'attribute', 'locale'));
    }

    public function creature()
    {
        $info = Info::with('slides', 'partners')->get()->first();
        $attribute = Attribute::first();
        $locale = App::setLocale('en');


        return view('creature', compact('info', 'attribute', 'locale'));
    }

    public function works()
    {
        $info = Info::with('slides', 'partners')->get()->first();
        $attribute = Attribute::first();
        $locale = App::setLocale('en');


        return view('works', compact('info', 'attribute', 'locale'));
    }


    public function policy()
    {


    }


    public function checkIp()
    {

        $arr = Streamer::all();
        $ipHere = 0;

        foreach ($arr as $one){

            if ($one->ip == request()->ip()){
                $ipHere ++;
            }

        }

        if ($ipHere > 0 ){
            dd('false');
            return false;
        }
        dd('true');
        return true;


    }

    public function testpage($locale)
    {


        $newStream = new Streamer();
        $exceptThree = $newStream->skip3takeall();
        $all = Streamer::all();





//        $numbers = array_column($array->toArray(), 'video_duration');
//        $min = min($numbers);
//        $max = max($numbers);

//        dd($min);

        ClearStream::clear();
        $info = Info::with('slides', 'partners')->get()->first();
        App::setLocale($locale);
        $attribute = Attribute::first();


        $check = new UpdateTime();
        $check->updateTime();


        $soon = new SoonOut();

        $soonOut = $soon->vid();
//        $now = Carbon::now()->timezone('asia/tbilisi');
//
//        $soonOutVid = $now->addSeconds($soonOut)->format('H:i:s');
//        dd($soonOutVid);

        $forID = 0;
        if ($forID >= 1) {
            $currentStreaming = Streamer::where('id', $forID)->first();
        } else {
            $currentStreaming = null;
        }


        $streamers = new Streamer();
        $first = Streamer::first();
        $three = $streamers->first3();

        $StreamersQuantity = Streamer::all()->count() - 3;
        if ($StreamersQuantity <= 0) {
            $StreamersQuantity = 0;
        }

        $linksWaiting = $streamers->skip3takeall();


        return view('testpage', compact('attribute', 'locale', 'info', 'three', 'first', 'StreamersQuantity', 'linksWaiting', 'forID', 'currentStreaming', 'soonOut'));

    }

}
