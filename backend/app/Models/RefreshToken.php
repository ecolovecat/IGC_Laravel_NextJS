<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RefreshToken extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'refresh_token', 'expired_at', 'created_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
