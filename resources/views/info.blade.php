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
    @endif

    <nav class="sidebar row container-fluid">
        <p class="sidebar-text1 ">sci-fi <span class="trademark">&#174;</span> communication | <a class="sidebar-text2">
                science based fiction</a></p>
    </nav>



    @include('layouts.footer')
@endsection
