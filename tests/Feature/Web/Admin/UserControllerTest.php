<?php

namespace Tests\Feature\Web\Admin;

use Inertia\Testing\AssertableInertia;
use Tests\Feature\Utilities\UserTestCase;

class UserControllerTest extends UserTestCase
{
    public function testIndexRendersCorrectView(): void
    {
        $response = $this
            ->actingAs($this->adminUser)
            ->get(route('admin.view.users'));

        $response->assertOk();
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Users/Index')
                ->has(
                    'users',
                    fn (AssertableInertia $page) => $page
                        ->where('current_page', 1)
                        ->where('data', fn ($users) => $users->count() === 1)
                        ->where('first_page_url', route('admin.view.users', ['page' => 1]))
                        ->where('from', 1)
                        ->where('last_page', 1)
                        ->where('last_page_url', route('admin.view.users', ['page' => 1]))
                        ->where('next_page_url', null)
                        ->where('path', route('admin.view.users'))
                        ->where('per_page', 10)
                        ->where('prev_page_url', null)
                        ->etc()
                )
        );
    }

    public function testEditRendersCorrectView(): void
    {
        $response = $this->actingAs($this->adminUser)->get(route('admin.edit.user', $this->customerUser->id));
        $response->assertOk();
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Users/Edit')->has(
                    'user',
                    fn (AssertableInertia $page) => $page
                        ->where('id', $this->customerUser->id)
                        ->where('name', $this->customerUser->name)
                        ->where('email', $this->customerUser->email)
                        ->where('role_name', $this->customerUser->roles->first()->name)
                        ->etc()
                )
        );
    }
}