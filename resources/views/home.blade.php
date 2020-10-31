@extends('layouts.header')
@section('body')


    @if ($message = Session::get('error'))
        <div class="alert alert-danger alert-block fade-message">
            <strong>{{ $message }}</strong>
        </div>

    @elseif($message = Session::get('message'))
        <div class="alert alert-success alert-block fade-message">
            <strong>{{ $message }}</strong>
        </div>

    @elseif($message = Session::get('errors'))
        <div class="alert alert-danger alert-block fade-message">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


    <div class="hidden">
        @if(isset($currentStreaming->created_at))
            <input id="current_id" value="{{ $currentStreaming->id }}" hidden>
            <input id="current_start_time" value="{{ $currentStreaming->start_time }}" hidden>
            <input id="current_end_time" value="{{ $currentStreaming->end_time }}" hidden>
            <input id="current_stream_duration" value="{{ $currentStreaming->stream_duration }}" hidden>
            <input id="current_video_duration" value="{{ $currentStreaming->video_duration }}" hidden>

        @endif

        <input id="user_ip_is_active" value="{{ $user_ip }}" hidden>

        @if($soonOutVids_ID != null)
            <input id="soonOutVids_ID" value="{{ $soonOutVids_ID }}" hidden>
        @endif

        @if(!is_null($soonOut))
            <input id="soonOutVid" value="{{ $soonOut }}" hidden>
            <input id="soonOutVidforJs" value="{{ $soonOutVid }}" hidden>
        @endif

    </div>

    <nav class="sidebar row container-fluid">
        <p class="sidebar-text1 ">sci-fi <span class="trademark">&#174;</span> communication | <a class="sidebar-text2">
                science based fiction</a></p>
    </nav>


    <div class="share-window">
        <p>You've got the link in your hands.<br> Now spread the legacy</p>
        <div class="share-window-input-div">
            <input value="" id="share-link" ><button onclick="shareBtnHide()">Copy</button>
        </div>

    </div>


    <div class="mobile-all-home-body">

        <div class="container-fluid mute-share">
            <div>
                <img src="/assets/images/stream/sharebtn.png" href="" class="btn-share-new" onclick="copyShareBtn()">
                {{--            <button class="btn-share" onclick="copyShareBtn()">share</button>--}}
            </div>


            {{--        <img id="mute" onclick="soundControl()" class="btn-mute" src="/assets/images/stream/unmuted.png">--}}
            {{--        <img id="unmute" onclick="soundControl()" class="btn-mute" src="/assets/images/stream/muted.png" hidden>--}}
            {{--        <button class="btn btn-danger" id="" type="button" onclick="teeet()">DELETE</button>--}}


        </div>

        <div class="container-fluid row ">
            <div class="ifr-div col-12  padding row">


                <div class="iframe-mine-upper-div text-center container-fluid col-md-12 col-lg-6 col-xl-6" >
                    <div class="h3-iframe" >
                        <div class="upload-link-h3-div">
                            <p class="upload-link-h3 " type="button" data-toggle="modal"  data-target="#myModal" onclick="topFunction()">UPLOAD
                                LINK</p>
                        </div>

                        <div  id="mute-div" class="iframe-mine-sound" onclick="soundControl()">
                            <!--   POP UP   -->
                            <div>
                                <img src="/assets/images/stream/mute_new.png" class="mute_new" id="mute_new">
                                <img src="/assets/images/stream/unmute_new.png" class="unmute_new" id="unmute_new">

                            </div>

                            <div>

                            </div>
                            <div class="welcome-modal  container-fluid" id="popup">
                                <div class="popup container-fluid">
                                    <p class="first-p"> At sci-fi we forge freedom. Place a link of something
                                        that needs to be seen or heard. Press upload and wait for the world to prosper.
                                    </p>
                                    <p class="second-p">Parental Guidance Suggested</p>
                                    <button class="popup-close-btn" data-dismiss="popup">
                                        <img data-dismiss="popup" src="/assets/images/stream/popclose.png">
                                    </button>
                                </div>

                            </div>

                            <iframe class="iframe-mine"
                                    {{--                                    width="745" height="490"--}}
                                    id="stream"

                                    allow="accelerometer; autoplay;"

                                    @if(is_null($first))
                                    src="https://www.youtube.com/embed/lPVBrRd9wCo?controls=1&loop=1&autoplay=0&playlist=lPVBrRd9wCo"
                                    @else
                                    src="{{ $currentStreaming->link }}"
                                @endif

                            ></iframe>
                        </div>

                    </div>

                </div>

                <div class="right-side-mine text-center container-fluid  col-md-12 col-lg-6 col-xl-6">

                    @foreach($three as $one)
                        @if($forID == $one->id)
                            <div class="container-fluid row">
                                {{--                            <i class="fa fa-play col-2" style="font-size:6px"></i>--}}
                                <p class="on-air-p"><i class="fa fa-play" style="font-size:4px;vertical-align: middle;"></i>ON
                                    AIR</p><label id="onAirTimeLeft" for="active" class="label-for-active "></label>
                            </div>
                        @endif

                        <form id="thisVideo" action="{{ route('streaming', [ $locale, $one->id ] ) }}" method="get">
                            <a

                                title="{{ $one->loop }}x loop left"
                                @if($forID == $one->id)
                                id="active-stream"
                                class="active-stream  mt-3 mb-3"
                                @else
                                class="inactive-stream  mt-3 mb-3"
                                @endif
                                href="{{ route('streaming', [ $locale, $one->id] ) }}" type="submit"
                                onclick="document.getElementById('thisVideo').submit(); "
                            >{{ $one->name }}</a>
                        </form>

                    @endforeach

                    <button class="btn-link" onclick="topFunction()" type="button" data-toggle="modal" data-target="#myModal">Link Here ///</button>
                    <label for="queue" class="inqueuelabel">IN QUEUE</label>
                    <div id="queue" class="dropdown">
                        <button class="dropbtn" id="queue-dropdown-btn"
                                value="{{ $StreamersQuantity ?? ''}}">

                        </button>

                        <div class="dropdown-content" id="dropdown-content">
                            @if(!is_null($linksWaiting))
                                <ol>
                                    @foreach($linksWaiting as $one)
                                        <li class="queue-id ">
                                            <a
                                                id="selectQueueStream"
                                                data-content="{{  $one->id
                                           . '_cut-'
                                           . $one->stream_duration
                                           . '+'
                                           . $one->start_time }}"
                                                href="#"
                                                onclick="queueShow('{{ $one->id }}',
                                                    '{{ $one->stream_duration }}',
                                                    '{{ $one->start_time }}')"

                                            >{{$one->name}}</a></li>
                                    @endforeach
                                </ol>

                            @endif
                        </div>
                    </div>
                </div>


            </div>

            <div>

                <!-- Modal -->
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">


                        <div class="link-already-active-error-div" id="link-already-active-error-div">
{{--                            <button class="link-already-active-error-close">X</button>--}}
                            <p class="link-already-active-error-first-txt">
                                You can't upload <br>
                                another link is still active.<br>
                                C'est la vie
                            </p>

                        </div>

                        <div class="link-already-active-success-div" id="link-already-active-success-div">
                            <p class="link-already-active-success-first-txt">
                                You’ve just posted this. <br> Now it’s inevitable.

                            </p>

                        </div>

                        <!-- Modal content-->
                        <div class="modal-content text-center">

                            <div class="modal-header-dev-mine container-fluid">
                                <p class="modal-header-mine">UPLOAD LINK</p>
                                <hr class="modal-hr-mine">
                            </div>
                            <div class="modal-body">

                                <div id="link-has-add">

                                    <input class="input-link" id="input-link" name="link" placeholder="Link here///"
                                           autocapitalize="none"
                                           required  data-disable-touch-keyboard
                                        {{--                                   oninvalid="this.setCustomValidity('How long can you last?')"--}}
                                    ><img
                                        width="120" height="61" id="link-input-error" class="input-link-error"
                                        src="/assets/images/stream/error.png">
                                    <button type="submit" id="upload-btn"
                                            onclick="checkUrlAndGo()"
                                            class="btn-upload">UPLOAD
                                    </button>

                                    <input class="stream-duration-input" name="time" id="stream-duration"
                                           placeholder="Time to stream(120 min max)"
                                           type="number" max="120" required
                                        {{--                                   oninvalid="this.setCustomValidity('How long can you last?')"--}}
                                    ><img
                                        width="120" height="61" id="link-duration-error-without"
                                        class="link-duration-error-without" src="/assets/images/stream/withouttime.png">

                                    <img
                                        width="120" height="61" id="link-duration-error-time-max"
                                        class="link-duration-error-time-max" src="/assets/images/stream/wrongtime.png">

                                    <div class="modal-bottom-side">
                                        <p class="modal-text-1">Upload anything from our
                                            "underwear buddy" platforms: if they can feature it,
                                            you can stream it.
                                        </p>
                                        <hr class="modal-hr-2">
                                        <p class="modal-text-2">
                                            <a class="modal-text-2" href="https://www.youtube.com/"
                                               target="_blank">youtube </a>/
                                            <a class="modal-text-2" href="https://vimeo.com/watch"
                                               target="_blank">vimeo </a>/
                                            <a class="modal-text-2" href="https://soundcloud.com/"
                                               target="_blank">soundcloud </a>/
                                            <a class="modal-text-2" href="https://www.dailymotion.com/us" target="_blank">dailymotion </a>/
                                        </p>

                                        <hr class="modal-hr-3">
                                    </div>

                                </div>
                            </div>
                            {{--                    <div class="modal-footer">--}}
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            {{--                    </div>--}}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>



    <div class="loader-wrapper">
        <span class="loader"><span class="loader-inner"></span></span>
    </div>
    <script async defer src="/assets/js/sound-cloud-api-js.file.js"></script>

    @include('layouts.footer')
@endsection
