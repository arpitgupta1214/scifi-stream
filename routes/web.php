<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Attribute;

use App\helper\ClearStream;
use App\Streamer;


Route::get('/', function () {


    $attributes = Attribute::first();
    $locale = app()->getLocale();
    $all = Streamer::all();

    if ($all->isEmpty()) {
        $first = 0;
    } else {

        if (Streamer::count() < 4) {
            $first = Streamer::latest()->first()->id;
        } else {
            $first = $all->first()->id;
        }

    }


    return redirect('home/en/' . $first)->with($locale, $attributes);
});

Route::get('/home', function () {
    $attributes = Attribute::first();
    $locale = app()->getLocale();
    $all = Streamer::all();

    if ($all->isEmpty()) {
        $first = 0;
    } else {

        if (Streamer::count() < 4) {
            $first = Streamer::latest()->first()->id;
        } else {
            $first = $all->first()->id;
        }

    }

    return redirect('home/en/' . $first)->with($locale, $attributes);
});

Route::get('/home/en', function () {
    $attributes = Attribute::first();
    $locale = app()->getLocale();
    $all = Streamer::all();

    if ($all->isEmpty()) {
        $first = 0;
    } else {

        if (Streamer::count() < 4) {

            $first = Streamer::latest()->first()->id;

        } else {
            $first = $all->first()->id;
        }

    }

    return redirect('home/en/' . $first)->with($locale, $attributes);
});

Route::get('/admin', function () {
    $attributes = Attribute::first();
    $locale = app()->getLocale();
    return redirect('admin/en')->with($locale, $attributes);
});


Auth::routes(['register' => false]);


Route::get('/home/{locale}/{forID}', 'HomeController@index')->name('home');
Route::get('/portfolio/{locale}', 'HomeController@portfolio')->name('portfolio');
Route::get('/about/{locale}', 'HomeController@about')->name('about');
Route::get('/contact/{locale}', 'HomeController@contact')->name('contact');


Route::get('createTranslate', 'HomeController@createTranslate')->name('createTranslate');


Route::post('destroyAll', 'adminControllers\ContactController@destroyAll')->name('destroyAll');


Route::middleware('auth')->prefix('admin/{locale}')->group(function () {


    Route::get('/', 'adminControllers\AdminController@index')->name('dashboard');

    Route::resource('category', 'adminControllers\CategoryController');
    Route::resource('sub-category', 'adminControllers\SubCategoryController');
    Route::resource('product', 'adminControllers\ProductController');
    Route::resource('attribute', 'adminControllers\AttributeController');
    Route::resource('contact', 'adminControllers\ContactController');
    Route::resource('image', 'adminControllers\ImageController');
    Route::resource('about', 'adminControllers\AboutController');
    Route::resource('info', 'adminControllers\InfoController');
    Route::resource('slide', 'adminControllers\SlideController');
    Route::resource('partner', 'adminControllers\PartnerController');

});


Route::get('/content/{locale}', 'HomeController@content')->name('content');
Route::post('/search/{locale}', 'HomeController@search')->name('search');
Route::post('/stream', 'HomeController@stream')->name('stream');
Route::get('/show/{locale}/{id}', 'HomeController@show')->name('show');
Route::get('/streaming/{locale}/{id}', 'HomeController@streaming')->name('streaming');
Route::get('/policy', 'HomeController@policy')->name('policy');
Route::get('/home/en/cleanStreams', 'HomeController@cleanStreams')->name('cleanStreams');
Route::get('/children', 'HomeController@children')->name('children');
Route::get('/info', 'HomeController@info')->name('info');
Route::get('/creature', 'HomeController@creature')->name('creature');
Route::get('/works', 'HomeController@works')->name('works');
Route::get('/testpage/{locale}/{id}', 'HomeController@testpage')->name('testpage');
Route::post('/jsDeleteStream/{id}', 'HomeController@jsDeleteStream')->name('jsDeleteStream');
Route::post('/checkIp', 'HomeController@checkIp')->name('checkIp');


Route::get('/testpage', function () {


    $attributes = Attribute::first();
    $locale = app()->getLocale();
    $all = Streamer::all();

    if ($all->isEmpty()) {
        $first = 0;
    } else {
        $first = $all->first()->id;
    }


    return redirect('testpage/en/' . $first)->with($locale, $attributes);
});

Route::get('/testpage/en', function () {
    $attributes = Attribute::first();
    $locale = app()->getLocale();
    $all = Streamer::all();

    if ($all->isEmpty()) {
        $first = 0;
    } else {
        $first = $all->first()->id;
    }

    return redirect('testpage/en/' . $first)->with($locale, $attributes);
});

