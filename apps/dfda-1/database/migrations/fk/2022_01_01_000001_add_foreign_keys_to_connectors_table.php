<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToConnectorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('connectors', function (Blueprint $table) {
            $table->foreign(['client_id'], 'connectors_client_id_fk')->references(['client_id'])->on('oa_clients');
            $table->foreign(['wp_post_id'], 'connectors_wp_posts_ID_fk')->references(['ID'])->deferrable()->on('wp_posts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('connectors', function (Blueprint $table) {
            $table->dropForeign('connectors_client_id_fk');
            $table->dropForeign('connectors_wp_posts_ID_fk');
        });
    }
}
