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
        Schema::create('planer_layouts', function (Blueprint $table) {
            $table->id();
            $table->string('name')->require();
            $table->string('image')->require();
            $table->string('price')->require();
            $table->integer('planer_type_id')->require();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planer_layouts');
    }
};
