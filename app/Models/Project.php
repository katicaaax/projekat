<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name',
        'description',
        'priority',
        'user_id'

    ];
    protected $table = 'projects';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
