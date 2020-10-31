@extends('layouts.apps')
@section('content')
    @include('layouts.header')
    @if ($message = Session::get('error'))
        <div class="alert alert-danger alert-block">
            <strong>{{ $message }}</strong>
        </div>

    @elseif($message = Session::get('message'))
        <div class="alert alert-success alert-block">
            <strong>{{ $message }}</strong>
        </div>
    @endif

    @if(!is_null(session('timer')))
        <meta http-equiv="refresh" content="{{ session('timer') - 2 }}">
    @endif
    <div id="fb-root"></div>
    <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
    <script src="http://w.soundcloud.com/player/api.js" type="text/javascript"></script>
    <script async defer src="https://www.youtube.com/iframe_api"></script>



    <div class="container">
        <div class="row col-12">


            <iframe
                style="pointer-events: none;"
                class="col-6" width="420" height="345" id="stream"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"


                @if(is_null($first))
                src="https://www.youtube.com/embed/nxb7H72-iVk?controls=1&loop=1"
                @else

                src="https://www.youtube.com/embed/nxb7H72-iVk?controls=1&loop=1"
                @endif
            >
            </iframe>


            <div class="col-6">
                <form action="{{ route('stream', $locale) }}" method="post">
                    @csrf
                    <div class="col-6">
                        <h4 class=" mb-5">First three</h4>


                        <div>

                            @foreach($three as $one)

                                <div class="border mb-2">
                                    <p title="{{  $one->diff() }}" data-countdown="{{ $one->stream_duration  }}"><input
                                            type="{{ $one->name }}" id="streamerP"
                                            style="color: green; cursor: pointer;" onclick="document.getElementById('thisVideo').submit();"

                                            src=" {{  $one->link }} "

                                            placeholder="{{ $one->name }}"></p>
                                    <label> Loop left {{ $one->loop }}</label>
                                    <label class=" ">Timer {{ $one->diff() }}</label>
                                </div>


                            @endforeach
                        </div>

                        <p>In queue is {{ ($StreamersQuantity <= 0) ? 0 : $StreamersQuantity }}</p>

                        <div>
                            <label>link here</label>
                            <input name="link" placeholder="link" required>

                        </div>
                        <div>
                            <label>Choose duration (max 2 hour)</label>
                            <input name="time" type="time" min="00:01" max="02:00">
                        </div>


                        <button class="form-control btn-success mt-2" type="submit">Upload</button>

                    </div>
                    <button type="button" id="mute" class="  btn btn-default rounded-circle btn-danger"
                            onclick="soundControl()"
                    >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-volume-mute-fill"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd"
                                  d="M9.146 5.646a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0z"/>
                        </svg>
                    </button>
                    <button type="button" id="unmute" class=" btn btn-default rounded-circle btn-warning"
                            onclick="soundControl()"
                            hidden
                    >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-volume-up-fill"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                            <path
                                d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                            <path
                                d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/>
                            <path fill-rule="evenodd"
                                  d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                        </svg>
                    </button>

                </form>
            </div>


        </div>

    </div>

{{--    <form id="thisVideo" action="{{ route('show', [$locale , $one->id] ) }}" method="get">--}}

{{--    </form>--}}




    <script async defer src="/assets/js/sound-control.js" type="text/javascript"></script>
    {{--    <script async defer src="/assets/js/testsforjs.js" type="text/javascript"></script>--}}
    <script async defer src="/assets/js/home-page.js" type="text/javascript"></script>
    <script async defer src="/assets/js/youtube-control.js" type="text/javascript"></script>
    <script async defer src="/assets/js/soundCloud-control.js" type="text/javascript"></script>
    <script async defer src="/assets/js/change-streamer.js" type="text/javascript"></script>

    @include('layouts.footer')
@endsection
