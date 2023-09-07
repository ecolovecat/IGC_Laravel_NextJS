<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'post_id', 'replied_comment'];

    public function users() {
        return $this->belongsTo(User::class);
    }

    public function posts() {
        return $this->belongsTo(Post::class);
    }

    public function repliedComment() {
        return $this->belongsTo(Comment::class, 'replied_comment');
    }
}
