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
        Schema::table('planers', function (Blueprint $table) {
            $table->string('size');
            $table->string('cover_design');
            $table->string('front_page')->nullable();
            $table->string('dates')->nullable();
            $table->string('daily_planer_design')->nullable();
            $table->string('notes')->nullable();
            $table->string('package_layout')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
