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
        Schema::table('users', function (Blueprint $table) {
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('set null')->name('fk_users_role_id');;
        });

        Schema::table('planer_layouts', function (Blueprint $table) {
            $table->foreign('planer_type_id')->references('id')->on('planer_types')->onDelete('cascade')->name('fk_planer_layouts_planer_type_id');
        });

        Schema::table('planers', function (Blueprint $table) {
            $table->foreign('planer_type_id')->references('id')->on('planer_types')->onDelete('cascade')->name('fk_planers_layouts_planer_type_id');
        });

        Schema::table('list_of_order_items', function (Blueprint $table) {
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade')->name('fk_list_of_order_items_order_id');
        });

        Schema::table('list_of_order_items', function (Blueprint $table) {
            $table->foreign('planer_id')->references('id')->on('planers')->onDelete('cascade')->name('fk_list_of_order_items_planer_id');
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
