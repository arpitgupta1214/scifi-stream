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

    <nav class="sidebar row container-fluid">
        <p class="sidebar-text1 ">sci-fi <span class="trademark">&#174;</span> communication | <a class="sidebar-text2">
                science based fiction</a></p>
    </nav>

    <div class="container-fluid mute-share">
        <button class="btn-share" onclick="copyShareBtn()">share</button>
        <img id="mute" onclick="soundControl()" class="btn-mute" src="/assets/images/stream/unmuted.png">
        <img id="unmute" onclick="soundControl()" class="btn-mute" src="/assets/images/stream/muted.png" hidden>

    </div>

    <div class="container-fluid row">
        <div class="ifr-div col-12  padding row">
            <!--   POP UP   -->
            <div class="welcome-modal" id="popup" >
                <div class="popup container-fluid">
                    <p class="first-p"> This is sci-fi space, link anything you want others to see/listen
                        or just see what others have shared</p>
                    <p class="second-p">youtube/vimeo/facebook/soundcloud/mixcloud/dailymotion</p>
                </div>
                <button class="popup-close-btn" data-dismiss="popup">
                    <img data-dismiss="popup" src="/assets/images/stream/popclose.png" >
                </button>

            </div>

            <div class="iframe-mine-upper-div text-center container-fluid col-md-12 col-lg-6 col-xl-6">
                <div class="h3-iframe">
                    <h3 class="upload-link-h3 ">UPLOAD LINK</h3>
                    <iframe class="iframe-mine"
                            width="1440" height="620"
                            id="stream"

                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"

                            src="https://www.youtube.com/embed/lPVBrRd9wCo?controls=1&loop=1&autoplay=0&playlist=lPVBrRd9wCo&mute=1"

                    ></iframe>
                </div>

            </div>

            <div class="right-side-mine text-center container-fluid  col-md-12 col-lg-6 col-xl-6">

                @foreach($three as $one)

                    @if($forID == $one->id)
                        <label id="onAirTimeLeft" for="active"></label>
                    @endif


                    <form id="thisVideo" action="{{ route('streaming', [ $locale, $one->id ] ) }}" method="get">
                        <a

                            title=" {{ $one->loop }}x loop left"
                            @if($forID == $one->id)
                            id="active-stream"
                            class="active-stream "
                            @else
                            class="inactive-stream"
                            @endif
                            href="{{ route('streaming', [ $locale, $one->id] ) }}" type="submit"
                            onclick="document.getElementById('thisVideo').submit(); "
                        >{{ $one->name }}</a>
                    </form>

                @endforeach

                <button class="btn-link" type="button" data-toggle="modal" data-target="#myModal">Link Here ///</button>
                <label for="queue">IN QUEUE</label>
                <div id="queue" class="dropdown">
                    <button class="dropbtn" id="queue-btn"
                            value="{{ $StreamersQuantity }}">

                    </button>
                    <div class="dropdown-content">
                        @if(!is_null($linksWaiting))
                            @foreach($linksWaiting as $one)
                                <a href="#"> &#9679; {{$one->name}}</a>
                                {{--                            <a href="#"> &#9679; Various - Clear Mem...</a>--}}
                                {{--                            <a href="#"> &#9679; TL Premier: DJ Fra...</a>--}}
                                {{--                            <a href="#"> &#9679; Maelstrom - Heat Wave</a>--}}
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>


        </div>

        <!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">

                    <div class="modal-header-dev-mine container-fluid">
                        <p class="modal-header-mine">UPLOAD LINK</p>
                        <hr class="modal-hr-mine">
                    </div>
                    <div class="modal-body">
                        <form action="{{ route('stream', $locale ) }}" method="post">
                            @csrf
                            <input class="input-link" name="link" placeholder="Link here///">
                            <button type="submit" class="btn-upload">UPLOAD</button>
                            {{--                            <label class="stream-duration-label" for="stream-duration">TIME TO STREAM</label>--}}
                            <input class="stream-duration-input" name="time" id="stream-duration"
                                   placeholder="Time to stream(120 min max)" max="120">

                        </form>

                    </div>
                    {{--                    <div class="modal-footer">--}}
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    {{--                    </div>--}}
                </div>

            </div>
        </div>

    </div>






    @include('layouts.footer')
@endsection
