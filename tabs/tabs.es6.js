import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import button from 'polythene/button/button';
import icon from 'polythene/icon/icon';
import iconBtn from 'polythene/icon-button/icon-button';
import scrollTo from 'polythene/common/scroll-to';
import theme from 'polythene/tabs/theme/theme'; // contains icons
import config from 'polythene/tabs/theme/config';

const CSS_CLASSES = {
    block: 'pe-tabs',
    scrollButton: 'pe-tabs__scroll-button',
    scrollButtonLeft: 'pe-tabs__scroll-button--start',
    scrollButtonRight: 'pe-tabs__scroll-button--end',
    scrollButtonOffset: 'pe-tabs__scroll-button--offset',
    tabRow: 'pe-tabs__row',
    tabRowIndent: 'pe-tabs__row--indent',
    tab: 'pe-tabs__tab',
    tabHasIcon: 'pe-tabs__tab---icon',
    indicator: 'pe-tabs__indicator',
    scrollable: 'pe-tabs--scrollable',
    isAutofit: 'pe-tabs--autofit',
    isAtStart: 'pe-tabs--start',
    isAtEnd: 'pe-tabs--end',
    isMenu: 'pe-tabs--menu',
    isSmall: 'pe-tabs--small',
    activeSelected: 'pe-tabs__active-selected',
    // lookup:
    label: 'pe-button__label',
};

const POSITION_LEFT = (1 << 1);
const POSITION_RIGHT = (1 << 2);

const getNewIndex = (index, tabs) => {
    const minTabIndex = 0;
    const maxTabIndex = tabs.length - 1;
    return {
        left: Math.max(index - 1, minTabIndex),
        right: Math.min(index + 1, maxTabIndex)
    };
};

const handleScrollButtonClick = (ctrl, e, direction) => {
    e.stopPropagation();
    e.preventDefault();
    const tabs = ctrl.tabs;
    const currentTabIndex = ctrl.selectedTabIndex;
    const newIndex = getNewIndex(currentTabIndex, tabs)[direction];
    scrollToTab(ctrl, newIndex, tabs, ctrl.scrollerEl);
    if (newIndex !== currentTabIndex) {
        setSelectedTab(newIndex, true, ctrl);
        m.redraw();
    }
};


const createScrollButton = (ctrl, position, opts) => {
    const scrollIconForward = opts.scrollIconForward || theme.arrowForward;
    const scrollIconBackward = opts.scrollIconBackward || theme.arrowBackward;

    return m.component(iconBtn, {
        class: [
            CSS_CLASSES.scrollButton,
            (position === POSITION_LEFT ? CSS_CLASSES.scrollButtonLeft : CSS_CLASSES.scrollButtonRight)
        ].join(' '),
        icon: position === POSITION_LEFT ? scrollIconBackward : scrollIconForward,
        ripple: {
            center: true
        },
        config: (el) => {
            if (ctrl.scrollButtonLeftEl && ctrl.scrollButtonRightEl) {
                return;
            }
            if (position === POSITION_LEFT) {
                ctrl.scrollButtonLeftEl = el;
            } else {
                ctrl.scrollButtonRightEl = el;
            }
        },
        events: {
            onclick: (position === POSITION_LEFT) ? (e) => {
                handleScrollButtonClick(ctrl, e, 'left');
            } : (e) => {
                handleScrollButtonClick(ctrl, e, 'right');
            }
        }
    });
};

const alignToTitle = (ctrl) => {
    const firstTab = ctrl.tabs[0];
    const firstInnerLabel = firstTab.querySelector('.' + CSS_CLASSES.label + ' span');
    const firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
    const firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
    const firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
    firstTab.style.marginLeft = -firstTabOffset + 'px';
};

const createRightButtonOffset = (ctrl) => {
    // add padding to right so that last item is not hidden behind scroll button
    const scrollButtonRightWidth = ctrl.scrollButtonRightEl.getBoundingClientRect().width;
    const scrollButtonOffsetEl = ctrl.tabsEl.querySelector('.' + CSS_CLASSES.scrollButtonOffset);
    scrollButtonOffsetEl.style.width = scrollButtonRightWidth + 'px';
};

const scrollToTab = (ctrl, tabIndex, tabs, scroller) => {
    const left = tabs.slice(0, tabIndex).reduce((width, el) => {
        return width + el.getBoundingClientRect().width;
    }, 0);

    const scrollerLeft = scroller['scrollLeft'];
    const duration = Math.abs(scrollerLeft - left) / config.tabs_scroll_speed;
    const delaySeconds = config.tabs_scroll_delay || 0;

    setTimeout(() => {
        scrollTo({
            element: scroller,
            to: left,
            duration: Math.max(config.tabs_scroll_min_duration, duration),
            direction: 'horizontal'
        });
    }, delaySeconds * 1000);
};

const updateScrollButtons = (ctrl) => {
    const scrollerEl = ctrl.scrollerEl;
    const scrollLeft = scrollerEl.scrollLeft;
    const currentTabIndex = ctrl.selectedTabIndex;
    const tabs = ctrl.tabs;
    const tabsEl = ctrl.tabsEl;
    const minTabIndex = 0;
    const maxTabIndex = tabs.length - 1;
    const isAtLeft = (scrollerEl.scrollLeft === 0) && (currentTabIndex === minTabIndex);
    const isAtRight = (scrollLeft >= (scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1)) && (currentTabIndex === maxTabIndex);
    ctrl.scrollButtonStates.left = !isAtLeft;
    ctrl.scrollButtonStates.right = !isAtRight;
};

const animateIndicator = (selectedTabEl, animate, ctrl) => {
    const parentRect = ctrl.tabsEl.getBoundingClientRect();
    const rect = selectedTabEl.getBoundingClientRect();
    const style = ctrl.tabIndicatorEl.style;
    const translateX = rect.left - parentRect.left + ctrl.scrollerEl.scrollLeft;
    const transformCmd = 'translate(' + translateX + 'px, 0)';
    const duration = animate ? config.indicator_slide_min_duration : 0;
    // use width instead of scale to please IE10
    style.width = rect.width + 'px';
    style['transition-duration'] =
        style['-webkit-transition-duration'] =
        style['-moz-transition-duration'] =
        style['-o-transition-duration'] = duration + 's';
    style.transform =
        style['-webkit-transform'] =
        style['-moz-transform'] =
        style['-ms-transform'] =
        style['-o-transform'] = transformCmd;
};

const setSelectedTab = (index, animate, ctrl) => {
    ctrl.selectedTabIndex = index;
    const selectedTabEl = ctrl.tabs[index];
    if (selectedTabEl && ctrl.tabIndicatorEl && ctrl.tabsEl) {
        animateIndicator(selectedTabEl, animate, ctrl);
    }
    if (ctrl.managesScroll) {
        updateScrollButtons(ctrl);
    }
};

const createTab = (index, tabButtonOpts, tabsOpts, ctrl) => {
    // create a button
    const tabButtonOptions = Object.assign({}, {
        content: m('.layout.vertical', [
            m('.flex'),
            tabButtonOpts.icon ? m.component(icon, tabButtonOpts.icon) : null,
            tabButtonOpts.label ? m('div', {class: CSS_CLASSES.label}, m('span', tabButtonOpts.label)) : null,
            m('.flex')
        ]),
        class: [
            CSS_CLASSES.tab,
            (tabButtonOpts.icon && tabButtonOpts.label ? CSS_CLASSES.tabHasIcon : null),
            tabButtonOpts.class
        ].join(' '),
        wash: false,
        ripple: true,
        events: {
            onclick: () => (setSelectedTab(index, tabsOpts.noIndicatorSlide ? false : true, ctrl))
        },
        config: (el, inited) => {
            if (inited) {
                return;
            }
            ctrl.tabs.push(el);
        }
    }, tabButtonOpts, tabsOpts.tabOpts || {});
    return m.component(button, tabButtonOptions);
};

const sortNumbers = (a, b) => {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    else
        return 0;
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const autofit = (opts.scrollable || opts.centered) ? false : (opts.autofit ? true : false);

    // keep selected tab up to date
    if (opts.selectedTab !== undefined && opts.buttons[0].url) {
        setSelectedTab(opts.selectedTab, true, ctrl);
    }

    const props = {
        class: [
            CSS_CLASSES.block,
            (opts.scrollable ? CSS_CLASSES.scrollable : null),
            ((ctrl.selectedTabIndex === 0) ? CSS_CLASSES.isAtStart : null),
            ((ctrl.selectedTabIndex === ctrl.tabs.length - 1) ? CSS_CLASSES.isAtEnd : null),
            (opts.activeSelected ? CSS_CLASSES.activeSelected : null),
            (autofit ? CSS_CLASSES.isAutofit : null),
            (opts.menu ? CSS_CLASSES.isMenu : null),
            (opts.small ? CSS_CLASSES.isSmall : null),
            opts.class
        ].join(' '),
        id: opts.id || '',
        config: (el, inited, context) => {
            if (inited) {
                return;
            }
            ctrl.tabsEl = el;

            if (opts.largestWidth) {
                const widths = ctrl.tabs.map(tab => tab.getBoundingClientRect().width);
                const largest = widths.sort(sortNumbers).reverse()[0];
                ctrl.tabs.forEach(tab => tab.style.width = largest + 'px');
            }

            // align first scrollable tab to title
            if (opts.scrollable) {
                alignToTitle(ctrl);
            }
            // handle scroll
            if (opts.scrollable && !p.isTouch) {
                ctrl.managesScroll = true;
                createRightButtonOffset(ctrl);
            }

            const onResize = () => {
                setSelectedTab(ctrl.selectedTabIndex, false, ctrl);
                m.redraw();
            };
            p.addListener('resize', onResize);

            context.onunload = () => {
                p.removeListener('resize', onResize);
            };

            setSelectedTab(opts.selectedTab || 0, false, ctrl);
        }
    };
    const tabRow = opts.buttons.map((buttonOpts, index) => {
        buttonOpts = Object.assign(buttonOpts, {
            selected: index === ctrl.selectedTabIndex,
            animateOnTap: (opts.animateOnTap !== undefined) ? opts.animateOnTap : false
        });
        return createTab(index, buttonOpts, opts, ctrl);
    }).concat([
        // offset for right scroll button
        opts.scrollable ? m('div', {class: CSS_CLASSES.scrollButtonOffset}) : null
    ]);

    let scrollButtonLeft, scrollButtonRight;
    if (opts.scrollable) {
        scrollButtonLeft = createScrollButton(ctrl, POSITION_LEFT, opts);
        scrollButtonRight = createScrollButton(ctrl, POSITION_RIGHT, opts);
    }

    const tabIndicator = opts.hideIndicator ? null : m('div', {
        class: CSS_CLASSES.indicator,
        config: (el, inited) => {
            if (inited) {
                return;
            }
            ctrl.tabIndicatorEl = el;
        }
    });

    const content = [
        opts.scrollable ? scrollButtonLeft : null,
        m('div', {
            class: [
                CSS_CLASSES.tabRow,
                (opts.scrollable ? CSS_CLASSES.tabRowIndent : null)
            ].join(' '),
            config: (el, inited) => {
                if (inited) {
                    return;
                }
                ctrl.scrollerEl = el;
            },
            onscroll: () => {
                updateScrollButtons(ctrl);
            }
        }, [
            opts.centered ? m('.flex') : null,
            tabRow,
            opts.centered ? m('.flex') : null,
            tabIndicator
        ]),
        opts.scrollable ? scrollButtonRight : null
    ];
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: () => {
        return {
            tabsEl: null,
            scrollerEl: null,
            tabs: [],
            tabIndicatorEl: null,
            selectedTabIndex: 0,
            managesScroll: false,
            scrollButtonStates: {
                left: false,
                right: false
            }
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
