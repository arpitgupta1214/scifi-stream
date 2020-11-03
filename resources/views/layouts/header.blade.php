<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content="{{ $info->description ?? ''}}"/>
    <meta name="keywords" content="{{ $info->meta_words ?? '' }}"/>
    <meta name="author" content="Gvrito Enterprise"/>
    <meta property="og:title" content="{{ $info->title ?? '' }}"/>
    <meta property="og:description" content="{{ $info->description ?? '' }}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content="/images/info/{{ $info->banner ?? '' }}"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{--    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">--}}
    {{--    <meta http-equiv="Pragma" content="no-cache">--}}
    {{--    <meta http-equiv="Expires" content="0">--}}
    <link rel="shortcut icon" type="image/ico" href="/images/info/{{ $info->favicon ?? '' }}"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
    <link href="/assets/css/streamer.css" rel="stylesheet" type="text/css">
    <title>{{ $info->title ?? '' }}</title>

</head>
<body>
<header>
    <div class="container-fluid">
        <div class="mobile-size-sci-fi">
            <p class="mobile-sidebar-text1 ">sci-fi <span class="mobile-trademark">&#174;</span> communication | <a
                    class="mobile-sidebar-text2">
                    science based fiction</a></p>
        </div>
        <nav class="navbar " id="navbar">
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <div class="navbar-links">
                <ul class="fortestlink">
                    <li class="nav-item {{ (request()->is('works*' )) ? 'active_link' : '' }}"><a
                            href="{{ route('works') }}">works///</a></li>
                    <li class="nav-item {{ (request()->is('home*' )) ? 'active_link' : '' }}"><a
                            href="/home">stream///</a></li>
                    <li class="nav-item {{ (request()->is('children*' )) ? 'active_link' : '' }}"><a
                            href="{{ route('children') }}">children///</a></li>
                    <li class="nav-item {{ (request()->is('info*' )) ? 'active_link' : '' }}"><a
                            href="{{ route('info') }}">info///</a></li>
                    <li class="nav-item {{ (request()->is('creature*' )) ? 'active_link' : '' }}"><a
                            href="{{ route('creature') }}">creatures///</a></li>

                    {{--            <li class="nav-item {{ (request()->is('testpage/en/*' )) ? 'active' : '' }}"><a href="{{ route('testpage', [$locale, 1]) }}">test///</a></li>--}}
                </ul>
            </div>
        </nav>


    </div>

    <hr class="header-hr">

    {{--    <!--   POP UP   -->--}}
    {{--    <div class="welcome-modal container-fluid" id="popup" >--}}
    {{--        <div class="popup container-fluid">--}}
    {{--            <p class="first-p"> This is sci-fi space, link anything you want others to see/listen--}}
    {{--                or just see what others have shared</p>--}}
    {{--            <p class="second-p">youtube/vimeo/dailymotion/soundcloud</p>--}}
    {{--            <button class="popup-close-btn" data-dismiss="popup">--}}
    {{--                <img data-dismiss="popup" src="/assets/images/stream/popclose.png" >--}}
    {{--            </button>--}}
    {{--        </div>--}}

    {{--    </div>--}}

</header>

<div class="bodyallinside">
    @yield('body')
</div>


</body>
</html>
