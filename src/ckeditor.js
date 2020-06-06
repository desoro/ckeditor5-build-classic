/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import StrikeThrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageEmbed from '@ckeditor/ckeditor5-image-via-url/src/imageviaurlembed';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Emoji from '@wwalc/ckeditor5-emoji/src/emoji';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
  Autoformat,
  Paragraph,
  ParagraphButtonUI,
  Heading,
  HeadingButtonsUI,
	Bold,
  Italic,
  Underline,
  StrikeThrough,
	BlockQuote,  
  Image,
  ImageEmbed,
  ImageToolbar,
  ImageStyle,
	Link,
	List,
	MediaEmbed,  
  HorizontalLine,
  Emoji
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' }
    ]
  },
  image: {
    toolbar: [ 'imageTextAlternative', 'imageChange' ],
    styles: [
        'full',
        'alignLeft',
        'alignRight'
    ]
  },
  emoji: [
    { name: 'grin', text: '😀' },
    { name: 'grin-big-eyes', text: '😃' },
    { name: 'grin-smile-eyes', text: '😄' },
    { name: 'beam-smile-eyes', text: '😁' },
    { name: 'grin-squint', text: '😆' },
    { name: 'grin-sweat', text: '😅' },
    { name: 'rofl', text: '🤣' },
    { name: 'tears-joy', text: '😂' },
    { name: 'slight-smile', text: '🙂' },
    { name: 'upside-down', text: '🙃' },
    { name: 'grin-sweat', text: '😅' },
    { name: 'wink', text: '😉' },
    { name: 'cheeks-smile-eyes', text: '😊' },
    { name: 'slight-smile-halo', text: '😇' },

    { name: 'smile-hearts', text: '🥰' },
    { name: 'smile-eye-hearts', text: '😍' },
    { name: 'star-struck', text: '🤩' },
    { name: 'kissing', text: '😘' },

    { name: 'savoring', text: '😋' },
    { name: 'tongue-out', text: '😛' },
    { name: 'zany', text: '🤪' },
    { name: 'money-mouth', text: '🤑' },

    { name: 'hugging', text: '🤗' },
    { name: 'shushing', text: '🤫' },
    { name: 'thinking', text: '🤔' },

    { name: 'zipper-mouth', text: '🤐' },
    { name: 'raised-brow', text: '🤨' },
    { name: 'neutral', text: '😐' },
    { name: 'expressionless', text: '😑' },
    { name: 'no-mouth', text: '😶' },
    { name: 'smirking', text: '😏' },
    { name: 'unamused', text: '😒' },
    { name: 'eye-roll', text: '🙄' },
    { name: 'grimming', text: '😬' },
    { name: 'lying', text: '🤥' },

    { name: 'relieved', text: '😌' },
    { name: 'drooling', text: '🤤' },
    { name: 'sleeping', text: '😴' },

    { name: 'medical-mask', text: '😷' },
    { name: 'nauseated', text: '🤢' },
    { name: 'hot', text: '🥵' },
    { name: 'cold', text: '🥶' },
    { name: 'exploding', text: '🤯' },

    { name: 'party', text: '🥳' },

    { name: 'cool', text: '😎' },
    { name: 'nerdy', text: '🤓' },
    { name: 'monocle', text: '🧐' },

    { name: 'confused', text: '😕' },
    { name: 'slight-frown', text: '🙁' },
    { name: 'open-mouth', text: '😮' },
    { name: 'astonished', text: '😲' },
    { name: 'fearful', text: '😨' },
    { name: 'flushed', text: '😳' },
    { name: 'pleading', text: '🥺' },
    { name: 'screaming', text: '😱' },
    { name: 'disappointed', text: '😞' },
    { name: 'yawning', text: '🥱' },

    { name: 'steam-nose', text: '😤' },
    { name: 'curse', text: '🤬' },
    { name: 'demon', text: '😈' },
    { name: 'skull', text: '💀' },

    { name: 'poop', text: '💩' },
    { name: 'clown', text: '🤡' },
    { name: 'ghost', text: '👻' },

    { name: '100', text: '💯' },
  ],
	toolbar: {
		items: [
      "paragraph",
      "heading1",
      "heading2",
			'bold',
      'italic',
      'underline',
      'strikeThrough',
      'bulletedList',
      'horizontalLine',
      'link',
      'imageViaUrlEmbed',
      'mediaEmbed',
      'blockQuote',
      'emoji'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
