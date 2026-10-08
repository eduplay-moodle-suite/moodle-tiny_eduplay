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

/**
 * Validation of EduPlay video links. Mirrors the strict parser of local_eduplay.
 *
 * @module      tiny_eduplay/url
 * @copyright   2026 Kelson da Costa Medeiros <kelsoncm@gmail.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

const BASE = 'https://eduplay.rnp.br';
const PATTERN = /^https:\/\/eduplay\.rnp\.br\/app\/video\/(?:embed\/)?([1-9][0-9]{0,17})\/?$/;

/**
 * Get the canonical URL for a canonical or embed EduPlay video link.
 *
 * @param {string} value The text typed by the user.
 * @returns {string|null} The canonical URL, or null when the value is not a supported link.
 */
export const getCanonicalUrl = (value) => {
    const match = PATTERN.exec(String(value).trim());
    return match ? `${BASE}/app/video/${match[1]}` : null;
};
