<html>
<head>
    <meta charset="utf-8"/>
    <meta name="description" content="{{ $info->description ?? ''}}"/>
    <meta name="keywords" content="{{ $info->meta_words ?? '' }}"/>
    <meta name="author" content="Gvrito Enterprise"/>
    <meta property="og:title" content="{{ $info->title ?? '' }}"/>
    <meta property="og:description" content="{{ $info->description ?? '' }}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content=""/>
    <meta property="og:image" content="{{ $info->banner ?? '' }}"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <!-- FAVICON-->
    <link rel="icon" type="image/gif" sizes="16x16"  href="/images/info/{{ $info->favicon ?? '' }} ">
{{--    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">--}}
{{--    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">--}}
{{--    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">--}}
{{--    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">--}}
{{--    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">--}}
{{--    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">--}}
{{--    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">--}}
{{--    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">--}}
{{--    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">--}}
{{--    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">--}}
{{--    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">--}}
{{--    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">--}}
{{--    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">--}}
{{--    <link rel="manifest" href="/manifest.json">--}}


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
    <!-- main css -->
    <link rel="stylesheet" href="/assets/css/style.css"/>
    <link rel="stylesheet" href="/assets/css/homePage.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"></script>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="/assets/js/script.js"></script>
    <script src="/assets/js/app.js"></script>


    <title>{{ $info->title ?? '' }}</title>
</head>
<body>

@yield('content')


</body>
</html>
