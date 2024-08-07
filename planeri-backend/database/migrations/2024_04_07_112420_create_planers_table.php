<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('planers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('planer_type_id')->require();
            $table->string('cover')->require();
            $table->integer('page_number')->require();
            $table->boolean('has_calendar')->require();
            $table->string('page_layout')->nullable();
            $table->float('price')->require();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planers');
    }
};
