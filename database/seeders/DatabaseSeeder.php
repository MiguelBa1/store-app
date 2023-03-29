<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = new Role();

        $adminRole = $role->create(['name' => 'admin']);
        $userRole = $role->create(['name' => 'user']);

        User::factory(200)->create()->each(function ($user) use ($userRole) {
            $user->assignRole($userRole);
        });

//      Crea un usuario administrador
        $admin = User::factory()->create([
            'name' => env('ADMIN_NAME'),
            'email' => env('ADMIN_EMAIL'),
            'password' => bcrypt(env('ADMIN_PASSWORD')),
        ]);

        $admin->assignRole($adminRole);

        $testUser = User::factory()->create([
            'name' => 'miguel',
            'email' => 'miguel@mail.com',
            'password' => bcrypt('password'),
        ]);

        $testUser->assignRole($userRole);

    }
}
