<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

namespace tiny_eduplay;

/**
 * Tests for the Tiny plugin information.
 *
 * @package    tiny_eduplay
 * @category   test
 * @copyright  2026 Kelson da Costa Medeiros <kelsoncm@gmail.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @covers     \tiny_eduplay\plugininfo
 */
final class plugininfo_test extends \basic_testcase {
    /**
     * The plugin exposes one toolbar button and one menu item.
     */
    public function test_buttons_and_menuitems(): void {
        $this->assertSame(['tiny_eduplay/tiny_eduplay'], plugininfo::get_available_buttons());
        $this->assertSame(['tiny_eduplay/tiny_eduplay'], plugininfo::get_available_menuitems());
    }
}
