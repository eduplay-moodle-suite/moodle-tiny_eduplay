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
 * Tiny EduPlay UI: dialog to validate and insert an EduPlay video link.
 *
 * @module      tiny_eduplay/ui
 * @copyright   2026 Kelson da Costa Medeiros <kelsoncm@gmail.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import ModalSaveCancel from 'core/modal_save_cancel';
import ModalEvents from 'core/modal_events';
import Templates from 'core/templates';
import {getString} from 'core/str';
import {component} from 'tiny_eduplay/common';
import {getCanonicalUrl} from 'tiny_eduplay/url';

/**
 * Open the dialog and, once confirmed, insert the link as a plain anchor.
 * The media_eduplay player turns it into the official player when the content is displayed.
 *
 * @param {TinyMCE} editor
 */
export const handleAction = async(editor) => {
    const [title, insertLabel] = await Promise.all([
        getString('buttontitle', component),
        getString('insert', component),
    ]);

    const modal = await ModalSaveCancel.create({
        title,
        body: Templates.render('tiny_eduplay/insert', {
            selectedtext: editor.selection.getContent({format: 'text'}),
        }),
        buttons: {save: insertLabel},
        show: true,
        removeOnClose: true,
    });

    const root = modal.getRoot();
    const urlInput = root.find('[data-eduplay="url"]');
    const textInput = root.find('[data-eduplay="text"]');
    const error = root.find('[data-eduplay="error"]');

    root.on(ModalEvents.save, (e) => {
        const url = getCanonicalUrl(urlInput.val());
        if (url === null) {
            // Keep the dialog open and explain the problem.
            e.preventDefault();
            error.removeClass('d-none').addClass('d-block');
            urlInput.attr('aria-invalid', 'true').addClass('is-invalid');
            urlInput.trigger('focus');
            return;
        }
        const text = editor.dom.encode(String(textInput.val()).trim() || url);
        editor.insertContent(`<a href="${url}">${text}</a>`);
    });
};
