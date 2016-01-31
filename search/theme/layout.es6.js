import mixin from 'polythene/common/mixin';
import flex from 'polythene/layout/theme/flex';

const createStyles = (config) => {
    return [{
        '.pe-search': {
            position: 'relative',

            ' .pe-textfield': [
                flex.flex(),
                {
                    padding: 0,
                    // prevent that neighboring icon button with ripple hides the cursor
                    position: 'relative',
                    'z-index': 1
                }
            ],

            ' .pe-textfield__input-area': {
                padding: 0,

                '&:after': {
                    display: 'none'
                }
            },

            ' .pe-textfield__input, .pe-textfield__label': {
                'font-size': config.font_size_input + 'px',
                'line-height': config.line_height_input + 'px'
            },

            ' .pe-textfield__input': {
                // reset
                border: 'none'
            },

            ' .pe-textfield__label': {
                // reset
                top: 0,
                bottom: 0
            },

            ' .pe-button--icon': flex.selfCenter,

            ' .pe-search__content': [
                flex.layout,
                flex.layoutHorizontal
            ],

            '&.pe-search--inset': {
                'border-radius': config.inset_border_radius + 'px',
                padding: '0 ' + config.inset_side_padding + 'px',

                '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                    height: config.inset_height + 'px'
                },
                ' .pe-textfield__input, .pe-textfield__label': {
                    'padding-top': config.inset_input_padding_v + 'px',
                    'padding-bottom': config.inset_input_padding_v + 'px',
                    'padding-left': config.inset_input_indent + 'px',
                    'padding-right': config.inset_input_right_padding + 'px'
                }
            },

            '&.pe-search--fullwidth': {
                'border-radius': config.fullwidth_border_radius + 'px',
                padding: '0 ' + config.fullwidth_side_padding + 'px',

                '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                    height: config.fullwidth_height + 'px'
                },
                ' .pe-textfield__input, .pe-textfield__label': {
                    'padding-top': config.fullwidth_input_padding_v + 'px',
                    'padding-bottom': config.fullwidth_input_padding_v + 'px',
                    'padding-left': config.fullwidth_input_indent + 'px',
                    'padding-right': config.fullwidth_input_right_padding + 'px'
                }
            }
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
