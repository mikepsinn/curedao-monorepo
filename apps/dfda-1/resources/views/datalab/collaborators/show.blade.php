<?php /** @var App\Models\Collaborator $collaborator */ ?>
@extends('layouts.admin-lte-app', ['title' => null ])

@section('content')
    @include('model-header')
   <div class="content">
        <div class="box box-primary">
            <div class="box-body">
                <div class="row" style="padding-left: 20px">
                    @include('datalab.collaborators.show_fields')
                    <a href="{{ route('datalab.collaborators.index') }}" class="btn btn-default">Back</a>
                </div>
            </div>
        </div>
    </div>
@endsection
