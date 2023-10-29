var ONEQOS = window.ONEQOS || {}; //definir objeto para gestionar metodos y atributos
ONEQOS.serverDefault = "";//direccion IP (se toma el valor del parametro de la funcion retrieveMenu)  donde se encuentra ejecutandose el ONEQOS o ONEQOS

var options = {
    menus: {},
    submenu_names: {},
    data: null,
    hostname: 'oneqos_server', // will be overwritten by the ONEQOS server
    version: 'unknown',
    release_channel: 'unknown',
    hosts: [],
    duration: 0, // the default duration of the charts
    update_every: 1,
    chartsPerRow: 0,
    chartsHeight: 180,
};

// ONEQOS standard information
var oneqosDashboard = {
    sparklines_registry: {},
    os: 'unknown',
    menu: {},
    submenu: {},
    context: {},
    // generate a sparkline
    // used in the documentation
    sparkline: function (prefix, chart, dimension, units, suffix) {
        if (options.data === null || typeof options.data.charts === 'undefined') {
            return '';
        }
        if (typeof options.data.charts[chart] === 'undefined') {
            return '';
        }
        if (typeof options.data.charts[chart].dimensions === 'undefined') {
            return '';
        }
        if (typeof options.data.charts[chart].dimensions[dimension] === 'undefined') {
            return '';
        }
        var key = chart + '.' + dimension;
        if (typeof units === 'undefined') {
            units = '';
        }
        if (typeof this.sparklines_registry[key] === 'undefined') {
            this.sparklines_registry[key] = { count: 1 };
        } else {
            this.sparklines_registry[key].count++;
        }
        key = key + '.' + this.sparklines_registry[key].count;
        return prefix + '<div class="netdata-container" data-oneqos="' + chart + '" data-after="-120" data-width="25%" data-height="15px" data-chart-library="dygraph" data-dygraph-theme="sparkline" data-dimensions="' + dimension + '" data-show-value-of-' + dimension + '-at="' + key + '"></div> (<span id="' + key + '" style="display: inline-block; min-width: 50px; text-align: right;">X</span>' + units + ')' + suffix;
    },

    gaugeChart: function (title, width, dimensions, colors) {
        if (typeof colors === 'undefined') {
            colors = '';
        }
        if (typeof dimensions === 'undefined') {
            dimensions = '';
        }
        return '<div class="netdata-container" data-oneqos="CHART_UNIQUE_ID"'
            + ' data-dimensions="' + dimensions + '"'
            + ' data-chart-library="gauge"'
            + ' data-gauge-adjust="width"'
            + ' data-title="' + title + '"'
            + ' data-width="' + width + '"'
            + ' data-before="0"'
            + ' data-after="-CHART_DURATION"'
            + ' data-points="CHART_DURATION"'
            + ' data-colors="' + colors + '"'
            + ' role="application"></div>';
    },

    anyAttribute: function (obj, attr, key, def) {
        if (typeof (obj[key]) !== 'undefined') {
            var x = obj[key][attr];
            if (typeof (x) === 'undefined') {
                return def;
            }
            if (typeof (x) === 'function') {
                return x(oneqosDashboard.os);
            }
            return x;
        }
        return def;
    },

    menuTitle: function (chart) {
        if (typeof chart.menu_pattern !== 'undefined') {
            return (this.anyAttribute(this.menu, 'title', chart.menu_pattern, chart.menu_pattern).toString()
                + '&nbsp;' + chart.type.slice(-(chart.type.length - chart.menu_pattern.length - 1)).toString()).replace(/_/g, ' ');
        }
        return (this.anyAttribute(this.menu, 'title', chart.menu, chart.menu)).toString().replace(/_/g, ' ');
    },

    menuIcon: function (chart) {
        if (typeof chart.menu_pattern !== 'undefined') {
            return this.anyAttribute(this.menu, 'icon', chart.menu_pattern, '<i class="fas fa-puzzle-piece"></i>').toString();
        }
        return this.anyAttribute(this.menu, 'icon', chart.menu, '<i class="fas fa-puzzle-piece"></i>');
    },

    menuInfo: function (chart) {
        if (typeof chart.menu_pattern !== 'undefined') {
            return this.anyAttribute(this.menu, 'info', chart.menu_pattern, null);
        }
        return this.anyAttribute(this.menu, 'info', chart.menu, null);
    },

    menuHeight: function (chart) {
        if (typeof chart.menu_pattern !== 'undefined') {
            return this.anyAttribute(this.menu, 'height', chart.menu_pattern, 1.0);
        }
        return this.anyAttribute(this.menu, 'height', chart.menu, 1.0);
    },

    submenuTitle: function (menu, submenu) {
        var key = menu + '.' + submenu;
        var title = this.anyAttribute(this.submenu, 'title', key, submenu).toString().replace(/_/g, ' ');
        if (title.length > 28) {
            var a = title.substring(0, 13);
            var b = title.substring(title.length - 12, title.length);
            return a + '...' + b;
        }
        return title;
    },

    submenuInfo: function (menu, submenu) {
        var key = menu + '.' + submenu;
        return this.anyAttribute(this.submenu, 'info', key, null);
    },

    submenuHeight: function (menu, submenu, relative) {
        var key = menu + '.' + submenu;
        return this.anyAttribute(this.submenu, 'height', key, 1.0) * relative;
    },

    contextInfo: function (id) {
        var x = this.anyAttribute(this.context, 'info', id, null);
        if (x !== null) {
            return '<div class="shorten dashboard-context-info netdata-chart-alignment" role="document">' + x + '</div>';
        } else {
            return '';
        }
    },

    contextValueRange: function (id) {
        if (typeof this.context[id] !== 'undefined' && typeof this.context[id].valueRange !== 'undefined') {
            return this.context[id].valueRange;
        } else {
            return '[null, null]';
        }
    },

    contextHeight: function (id, def) {
        if (typeof this.context[id] !== 'undefined' && typeof this.context[id].height !== 'undefined') {
            return def * this.context[id].height;
        } else {
            return def;
        }
    },

    contextDecimalDigits: function (id, def) {
        if (typeof this.context[id] !== 'undefined' && typeof this.context[id].decimalDigits !== 'undefined') {
            return this.context[id].decimalDigits;
        } else {
            return def;
        }
    }
};

// A heuristic for detecting slow devices.
let isSlowDeviceResult = undefined;
const isSlowDevice = function () {
    if (!isSlowDeviceResult) {
        return isSlowDeviceResult;
    }

    try {
        let ua = navigator.userAgent.toLowerCase();

        let iOS = /ipad|iphone|ipod/.test(ua) && !window.MSStream;
        let android = /android/.test(ua) && !window.MSStream;
        isSlowDeviceResult = (iOS || android);
    } catch (e) {
        isSlowDeviceResult = false;
    }

    return isSlowDeviceResult;
};

// ----------------------------------------------------------------------------------------------------------------
// global options
ONEQOS.options = {
    pauseCallback: null,            // a callback when we are really paused

    pause: false,                   // when enabled we don't auto-refresh the charts

    targets: [],                    // an array of all the state objects that are
    // currently active (independently of their
    // viewport visibility)

    updated_dom: true,              // when true, the DOM has been updated with
    // new elements we have to check.

    auto_refresher_fast_weight: 0,  // this is the current time in ms, spent
    // rendering charts continuously.
    // used with .current.fast_render_timeframe

    page_is_visible: true,          // when true, this page is visible

    auto_refresher_stop_until: 0,   // timestamp in ms - used internally, to stop the
    // auto-refresher for some time (when a chart is
    // performing pan or zoom, we need to stop refreshing
    // all other charts, to have the maximum speed for
    // rendering the chart that is panned or zoomed).
    // Used with .current.global_pan_sync_time

    on_scroll_refresher_stop_until: 0, // timestamp in ms - used to stop evaluating
    // charts for some time, after a page scroll

    last_page_resize: Date.now(),   // the timestamp of the last resize request

    last_page_scroll: 0,            // the timestamp the last time the page was scrolled

    browser_timezone: 'unknown',    // timezone detected by javascript
    server_timezone: 'unknown',     // timezone reported by the server

    force_data_points: 0,           // force the number of points to be returned for charts
    fake_chart_rendering: false,    // when set to true, the dashboard will download data but will not render the charts

    passive_events: null,           // true if the browser supports passive events

    // the current profile
    // we may have many...
    current: {
        units: 'auto',              // can be 'auto' or 'original'
        temperature: 'celsius',     // can be 'celsius' or 'fahrenheit'
        seconds_as_time: true,      // show seconds as DDd:HH:MM:SS ?
        timezone: 'default',        // the timezone to use, or 'default'
        user_set_server_timezone: 'default', // as set by the user on the dashboard

        legend_toolbox: true,       // show the legend toolbox on charts
        resize_charts: true,        // show the resize handler on charts

        idle_between_charts: 100,   // ms - how much time to wait between chart updates

        fast_render_timeframe: 200, // ms - render continuously until this time of continuous
        // rendering has been reached
        // this setting is used to make it render e.g. 10
        // charts at once, sleep idle_between_charts time
        // and continue for another 10 charts.

        idle_between_loops: 500,    // ms - if all charts have been updated, wait this
        // time before starting again.

        idle_parallel_loops: 100,   // ms - the time between parallel refresher updates

        idle_lost_focus: 500,       // ms - when the window does not have focus, check
        // if focus has been regained, every this time

        global_pan_sync_time: 300,  // ms - when you pan or zoom a chart, the background
        // auto-refreshing of charts is paused for this amount
        // of time

        sync_selection_delay: 400,  // ms - when you pan or zoom a chart, wait this amount
        // of time before setting up synchronized selections
        // on hover.

        sync_selection: true,       // enable or disable selection sync

        pan_and_zoom_delay: 50,     // when panning or zooming, how ofter to update the chart

        sync_pan_and_zoom: true,    // enable or disable pan and zoom sync

        pan_and_zoom_data_padding: true, // fetch more data for the master chart when panning or zooming

        update_only_visible: true,  // enable or disable visibility management / used for printing

        concurrent_refreshes: true, // when parallel_refresher is enabled, sync also the charts

        destroy_on_hide: isSlowDevice(), // destroy charts when they are not visible 

        //show_help: netdataShowHelp, // when enabled the charts will show some help
        //show_help_delay_show_ms: 500,
        //show_help_delay_hide_ms: 0,

        eliminate_zero_dimensions: true, // do not show dimensions with just zeros

        stop_updates_when_focus_is_lost: true, // boolean - shall we stop auto-refreshes when document does not have user focus
        stop_updates_while_resizing: 1000,  // ms - time to stop auto-refreshes while resizing the charts

        double_click_speed: 500,    // ms - time between clicks / taps to detect double click/tap

        color_fill_opacity_line: 1.0,
        color_fill_opacity_area: 0.2,
        color_fill_opacity_stacked: 0.8,

        pan_and_zoom_factor: 0.25,      // the increment when panning and zooming with the toolbox
        pan_and_zoom_factor_multiplier_control: 2.0,
        pan_and_zoom_factor_multiplier_shift: 3.0,
        pan_and_zoom_factor_multiplier_alt: 4.0,

        abort_ajax_on_scroll: false,            // kill pending ajax page scroll
        async_on_scroll: false,                 // sync/async onscroll handler
        onscroll_worker_duration_threshold: 30, // time in ms, for async scroll handler

        retries_on_data_failures: 3, // how many retries to make if we can't fetch chart data from the server

        setOptionCallback: function () {
        }
    },

    debug: {
        show_boxes: false,
        main_loop: false,
        focus: false,
        visibility: false,
        chart_data_url: false,
        chart_errors: true, // remember to set it to false before merging
        chart_timing: false,
        chart_calls: false,
        libraries: false,
        dygraph: false,
        globalSelectionSync: false,
        globalPanAndZoom: false
    }
};

ONEQOS.themes = {
    white: {
        bootstrap_css: ONEQOS.serverStatic + 'css/bootstrap-3.3.7.css',
        dashboard_css: ONEQOS.serverStatic + 'dashboard.css?v20190902-0',
        background: '#FFFFFF',
        foreground: '#000000',
        grid: '#F0F0F0',
        axis: '#F0F0F0',
        highlight: '#F5F5F5',
        colors: ['#3366CC', '#DC3912', '#109618', '#FF9900', '#990099', '#DD4477',
            '#3B3EAC', '#66AA00', '#0099C6', '#B82E2E', '#AAAA11', '#5574A6',
            '#994499', '#22AA99', '#6633CC', '#E67300', '#316395', '#8B0707',
            '#329262', '#3B3EAC'],
        easypiechart_track: '#f0f0f0',
        easypiechart_scale: '#dfe0e0',
        gauge_pointer: '#C0C0C0',
        gauge_stroke: '#F0F0F0',
        gauge_gradient: false,
        d3pie: {
            title: '#333333',
            subtitle: '#666666',
            footer: '#888888',
            other: '#aaaaaa',
            mainlabel: '#333333',
            percentage: '#dddddd',
            value: '#aaaa22',
            tooltip_bg: '#000000',
            tooltip_fg: '#efefef',
            segment_stroke: "#ffffff",
            gradient_color: '#000000'
        }
    },
    slate: {
        bootstrap_css: ONEQOS.serverStatic + 'css/bootstrap-slate-flat-3.3.7.css?v20161229-1',
        dashboard_css: ONEQOS.serverStatic + 'dashboard.slate.css?v20190902-0',
        background: '#272b30',
        foreground: '#C8C8C8',
        grid: '#283236',
        axis: '#283236',
        highlight: '#383838',
        /*          colors: [   '#55bb33', '#ff2222',   '#0099C6', '#faa11b',   '#adbce0', '#DDDD00',
                            '#4178ba', '#f58122',   '#a5cc39', '#f58667',   '#f5ef89', '#cf93c0',
                            '#a5d18a', '#b8539d',   '#3954a3', '#c8a9cf',   '#c7de8a', '#fad20a',
                            '#a6a479', '#a66da8' ],
        */
        colors: ['#66AA00', '#FE3912', '#3366CC', '#D66300', '#0099C6', '#DDDD00',
            '#5054e6', '#EE9911', '#BB44CC', '#e45757', '#ef0aef', '#CC7700',
            '#22AA99', '#109618', '#905bfd', '#f54882', '#4381bf', '#ff3737',
            '#329262', '#3B3EFF'],
        easypiechart_track: '#373b40',
        easypiechart_scale: '#373b40',
        gauge_pointer: '#474b50',
        gauge_stroke: '#373b40',
        gauge_gradient: false,
        d3pie: {
            title: '#C8C8C8',
            subtitle: '#283236',
            footer: '#283236',
            other: '#283236',
            mainlabel: '#C8C8C8',
            percentage: '#dddddd',
            value: '#cccc44',
            tooltip_bg: '#272b30',
            tooltip_fg: '#C8C8C8',
            segment_stroke: "#283236",
            gradient_color: '#000000'
        }
    }
};

if (typeof netdataTheme !== 'undefined' && typeof ONEQOS.themes[netdataTheme] !== 'undefined') {
    ONEQOS.themes.current = ONEQOS.themes[netdataTheme];
} else {
    ONEQOS.themes.current = ONEQOS.themes.white;
}

ONEQOS.colors = ONEQOS.themes.current.colors;

//cargar desde /api/v1/charts los recursos monitorizados de ONEQOS
ONEQOS.chartRegistry = {
    charts: {},
    globalReset: function () {
        this.charts = {};
    },
    downloadAll: function (host, callback) {
        let self = this;
        function got_data(h, data, callback) {
            if (data !== null) {
                self.charts[h] = data.charts;
                // update the server timezone in our options
                if (typeof data.timezone === 'string') {
                    ONEQOS.options.server_timezone = data.timezone;
                }
            } else {
                ONEQOS.error(406, h + '/api/v1/charts');
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        }
        fetch(host + '/api/v1/charts')
            .then(response => response.json())
            .then(data => {
                got_data(host, data, callback);//llevar el subarreglo data.charts a un arreglo this.charts[ip de oneqos]
            });
    }
};

// --------------------------------------------------------------------
// urlOptions
var urlOptions = {
    hash: '#',
    theme: null,
    help: null,
    mode: 'live',         // 'live', 'print'
    update_always: false,
    pan_and_zoom: false,
    server: null,
    after: 0,
    before: 0,
    highlight: false,
    highlight_after: 0,
    highlight_before: 0,
    nowelcome: false,
    show_alarms: false,
    chart: null,
    family: null,
    alarm: null,
    alarm_unique_id: 0,
    alarm_id: 0,
    alarm_event_id: 0,
    alarm_when: 0,

    hasProperty: function (property) {
        return typeof this[property] !== 'undefined';
    },

    genHash: function (forReload) {
        var hash = urlOptions.hash;
        if (urlOptions.pan_and_zoom === true) {
            hash += ';after=' + urlOptions.after.toString() +
                ';before=' + urlOptions.before.toString();
        }
        if (urlOptions.highlight === true) {
            hash += ';highlight_after=' + urlOptions.highlight_after.toString() +
                ';highlight_before=' + urlOptions.highlight_before.toString();
        }
        if (urlOptions.theme !== null) {
            hash += ';theme=' + urlOptions.theme.toString();
        }
        if (urlOptions.help !== null) {
            hash += ';help=' + urlOptions.help.toString();
        }
        if (urlOptions.update_always === true) {
            hash += ';update_always=true';
        }
        if (forReload === true && urlOptions.server !== null) {
            hash += ';server=' + urlOptions.server.toString();
        }
        if (urlOptions.mode !== 'live') {
            hash += ';mode=' + urlOptions.mode;
        }
        return hash;
    },

    parseHash: function () {
        var variables = document.location.hash.split(';');
        var len = variables.length;
        while (len--) {
            if (len !== 0) {
                var p = variables[len].split('=');
                if (urlOptions.hasProperty(p[0]) && typeof p[1] !== 'undefined') {
                    urlOptions[p[0]] = decodeURIComponent(p[1]);
                }
            } else {
                if (variables[len].length > 0) {
                    urlOptions.hash = variables[len];
                }
            }
        }

        var booleans = ['nowelcome', 'show_alarms', 'update_always'];
        len = booleans.length;
        while (len--) {
            if (urlOptions[booleans[len]] === 'true' || urlOptions[booleans[len]] === true || urlOptions[booleans[len]] === '1' || urlOptions[booleans[len]] === 1) {
                urlOptions[booleans[len]] = true;
            } else {
                urlOptions[booleans[len]] = false;
            }
        }

        var numeric = ['after', 'before', 'highlight_after', 'highlight_before', 'alarm_when'];
        len = numeric.length;
        while (len--) {
            if (typeof urlOptions[numeric[len]] === 'string') {
                try {
                    urlOptions[numeric[len]] = parseInt(urlOptions[numeric[len]]);
                }
                catch (e) {
                    console.log('failed to parse URL hash parameter ' + numeric[len]);
                    urlOptions[numeric[len]] = 0;
                }
            }
        }

        if (urlOptions.alarm_when) {
            const alarmTime = new Date(urlOptions.alarm_when * 1000).valueOf();
            const timeMarginMs = 120000; // 2 mins
            const after = alarmTime - timeMarginMs;
            const before = alarmTime + timeMarginMs;
            const newHash = document.location.hash.replace(
                /;alarm_when=[0-9]*/i,
                ";after=" + after + ";before=" + before,
            );
            history.replaceState(null, '', newHash);
            location.reload();
        }

        if (urlOptions.server !== null && urlOptions.server !== '') {
            netdataServerStatic = document.location.origin.toString() + document.location.pathname.toString();
            netdataServer = urlOptions.server;
            netdataCheckXSS = true;
        } else {
            urlOptions.server = null;
        }

        if (urlOptions.before > 0 && urlOptions.after > 0) {
            urlOptions.pan_and_zoom = true;
            urlOptions.nowelcome = true;
        } else {
            urlOptions.pan_and_zoom = false;
        }

        if (urlOptions.highlight_before > 0 && urlOptions.highlight_after > 0) {
            urlOptions.highlight = true;
        } else {
            urlOptions.highlight = false;
        }

        switch (urlOptions.mode) {
            case 'print':
                urlOptions.theme = 'white';
                urlOptions.welcome = false;
                urlOptions.help = false;
                urlOptions.show_alarms = false;

                if (urlOptions.pan_and_zoom === false) {
                    urlOptions.pan_and_zoom = true;
                    urlOptions.before = Date.now();
                    urlOptions.after = urlOptions.before - 600000;
                }

                netdataShowAlarms = false;
                netdataRegistry = false;
                this_is_demo = false;
                break;

            case 'live':
            default:
                urlOptions.mode = 'live';
                break;
        }

        // console.log(urlOptions);
    },

    hashUpdate: function () {
        history.replaceState(null, '', urlOptions.genHash(true));
    },

    netdataPanAndZoomCallback: function (status, after, before) {
        if (netdataSnapshotData === null) {
            urlOptions.pan_and_zoom = status;
            urlOptions.after = after;
            urlOptions.before = before;
            urlOptions.hashUpdate();
        }
    },

    netdataHighlightCallback: function (status, after, before) {
        if (status === true && (after === null || before === null || after <= 0 || before <= 0 || after >= before)) {
            status = false;
            after = 0;
            before = 0;
        }

        if (netdataSnapshotData === null) {
            urlOptions.highlight = status;
        } else {
            urlOptions.highlight = false;
        }

        urlOptions.highlight_after = Math.round(after);
        urlOptions.highlight_before = Math.round(before);
        urlOptions.hashUpdate();

        var show_eye = ONEQOS.globalChartUnderlay.hasViewport();

        // if (status === true && after > 0 && before > 0 && after < before) {
        //     var d1 = ONEQOS.dateTime.localeDateString(after);
        //     var d2 = ONEQOS.dateTime.localeDateString(before);
        //     if (d1 === d2) {
        //         d2 = '';
        //     }
        //     document.getElementById('navbar-highlight-content').innerHTML =
        //         ((show_eye === true) ? '<span class="navbar-highlight-bar highlight-tooltip" onclick="urlOptions.showHighlight();" title="restore the highlighted view" data-toggle="tooltip" data-placement="bottom">' : '<span>').toString()
        //         + 'highlighted time-frame'
        //         + ' <b>' + d1 + ' <code>' + ONEQOS.dateTime.localeTimeString(after) + '</code></b> to '
        //         + ' <b>' + d2 + ' <code>' + ONEQOS.dateTime.localeTimeString(before) + '</code></b>, '
        //         + 'duration <b>' + ONEQOS.seconds4human(Math.round((before - after) / 1000)) + '</b>'
        //         + '</span>'
        //         + '<span class="navbar-highlight-button-right highlight-tooltip" onclick="urlOptions.clearHighlight();" title="clear the highlighted time-frame" data-toggle="tooltip" data-placement="bottom"><i class="fas fa-times"></i></span>';

        //     $('.navbar-highlight').show();

        //     $('.highlight-tooltip').tooltip({
        //         html: true,
        //         delay: { show: 500, hide: 0 },
        //         container: 'body'
        //     });
        // } else {
        //     $('.navbar-highlight').hide();
        // }
    },



    clearHighlight: function () {
        ONEQOS.globalChartUnderlay.clear();

        if (ONEQOS.globalPanAndZoom.isActive() === true) {
            ONEQOS.globalPanAndZoom.clearMaster();
        }
    },

    showHighlight: function () {
        ONEQOS.globalChartUnderlay.focus();
    }
};

var localStorageTested = -1;

function localStorageTest() {
    if (localStorageTested !== -1) {
        return localStorageTested;
    }
    if (typeof Storage !== "undefined" && typeof localStorage === 'object') {
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            localStorageTested = true;
        }
        catch (e) {
            console.log(e);
            localStorageTested = false;
        }
    } else {
        localStorageTested = false;
    }
    return localStorageTested;
}

function saveLocalStorage(name, value) {
    try {
        if (localStorageTest() === true) {
            localStorage.setItem(name, value.toString());
            return true;
        }
    }
    catch (error) {
        console.log(error);
    }
    return false;
}

function naturalSortChunkify(t) {
    var tz = [];
    var x = 0, y = -1, n = 0, i, j;
    while (i = (j = t.charAt(x++)).charCodeAt(0)) {
        var m = (i >= 48 && i <= 57);
        if (m !== n) {
            tz[++y] = "";
            n = m;
        }
        tz[y] += j;
    }
    return tz;
}

function naturalSortCompare(a, b) {
    var aa = naturalSortChunkify(a.toLowerCase());
    var bb = naturalSortChunkify(b.toLowerCase());

    for (var x = 0; aa[x] && bb[x]; x++) {
        if (aa[x] !== bb[x]) {
            var c = Number(aa[x]), d = Number(bb[x]);
            if (c.toString() === aa[x] && d.toString() === bb[x]) {
                return c - d;
            } else {
                return (aa[x] > bb[x]) ? 1 : -1;
            }
        }
    }
    return aa.length - bb.length;
}

function prioritySort(a, b) {
    if (a.priority < b.priority) {
        return -1;
    }
    if (a.priority > b.priority) {
        return 1;
    }
    return naturalSortCompare(a.name, b.name);
}

function sortObjectByPriority(object) {
    var idx = {};
    var sorted = [];

    for (var i in object) {
        if (!object.hasOwnProperty(i)) {
            continue;
        }

        if (typeof idx[i] === 'undefined') {
            idx[i] = object[i];
            sorted.push(i);
        }
    }

    sorted.sort(function (a, b) {
        if (idx[a].priority < idx[b].priority) {
            return -1;
        }
        if (idx[a].priority > idx[b].priority) {
            return 1;
        }
        return naturalSortCompare(a, b);
    });

    return sorted;
}

function renderMyNetdataMenu(machinesArray) {
    let html = '';

    if (!isSignedIn()) {
        if (!ONEQOS.registry.isRegistryEnabled()) {
            html += (
                `<div class="info-item" style="white-space: nowrap">
                    <span>Please <a href="#" onclick="signInDidClick(event); return false">sign in to netdata.cloud</a> to view your nodes!</span>
                    <div></div>
                </div>
                <hr />`
            );
        }
    }

    if (isSignedIn()) {
        html += (
            `<div class="filter-control">
                <input 
                    id="my-netdata-menu-filter-input"
                    type="text" 
                    placeholder="filter nodes..."
                    autofocus
                    autocomplete="off"
                    value="${myNetdataMenuFilterValue}" 
                    onkeydown="myNetdataFilterDidChange(event)"
                />
                <span class="filter-control__clear" onclick="myNetdataFilterClearDidClick(event)"><i class="fas fa-times"></i><span>
            </div>
            <hr />`
        );
    }

    if (options.hosts.length > 1) {
        html += `<div id="my-netdata-menu-streamed">${renderStreamedHosts(options)}</div><hr />`;
    }

    if (isSignedIn() || ONEQOS.registry.isRegistryEnabled()) {
        html += `<div id="my-netdata-menu-machines">${renderMachines(machinesArray)}</div><hr />`;
    }

    if (!isSignedIn()) {
        html += (
            `<div class="agent-item">
                <i class="fas fa-cog""></i>
                <a href="#" onclick="switchRegistryModalHandler(); return false;">Switch Identity</a>
                <div></div>
            </div>
            <div class="agent-item">
                <i class="fas fa-question-circle""></i>
                <a href="https://github.com/netdata/netdata/tree/master/registry#registry" target="_blank">What is this?</a>
                <div></div>
            </div>`
        )
    } else {
        html += (
            `<div class="agent-item">
                <i class="fas fa-tv"></i>
                <a onclick="openAuthenticatedUrl('console.html');" target="_blank">Nodes<sup class="beta"> beta</sup></a>
                <div></div>
            </div>
            <div class="agent-item">
                <i class="fas fa-sync"></i>
                <a href="#" onclick="showSyncModal(); return false">Synchronize with netdata.cloud</a>
                <div></div>
            </div>
            <div class="agent-item">
                <i class="fas fa-question-circle""></i>
                <a href="https://netdata.cloud/about" target="_blank">What is this?</a>
                <div></div>
            </div>`
        )
    }
}

function renderMachines(machinesArray) {
    let html = `<div class="info-item">My nodes</div>`;
    if (machinesArray === null) {
        let ret = loadLocalStorage("registryCallback");
        if (ret) {
            machinesArray = JSON.parse(ret);
            console.log("failed to contact the registry - loaded registry data from browser local storage");
        }
    }

    let found = false;
    let displayedAgents = false;

    const maskedURL = ONEQOS.registry.MASKED_DATA;

    if (machinesArray) {
        saveLocalStorage("registryCallback", JSON.stringify(machinesArray));

        var machines = machinesArray.sort(function (a, b) {
            return naturalSortCompare(a.name, b.name);
        });

        for (var machine of machines) {
            found = true;

            if (myNetdataMenuFilterValue !== "") {
                if (!machine.name.includes(myNetdataMenuFilterValue)) {
                    continue;
                }
            }

            displayedAgents = true;

            const alternateUrlItems = (
                `<div class="agent-alternate-urls agent-${machine.guid} collapsed">
                ${machine.alternate_urls.reduce((str, url) => {
                    if (url === maskedURL) {
                        return str
                    }

                    return str + (
                        `<div class="agent-item agent-item--alternate">
                                <div></div>
                                <a href="${url}" title="${url}">${truncateString(url, 64)}</a>
                                <a href="#" onclick="deleteRegistryModalHandler('${machine.guid}', '${machine.name}', '${url}'); return false;">
                                    <i class="fas fa-trash" style="color: #777;"></i>
                                </a>
                            </div>`
                    )
                },
                    ''
                )}
                </div>`
            )

            html += (
                `<div class="agent-item agent-${machine.guid}">
                    <i class="fas fa-chart-bar" color: #fff"></i>
                    <span class="__title" onClick="return gotoServerModalHandler('${machine.guid}');">
                        <a class="registry_link" href="${machine.url}#">${machine.name}</a>
                    </span>
                    <a href="#" onClick="toggleAgentItem(event, '${machine.guid}');">
                        <i class="fas fa-caret-down" style="color: #999"></i>
                    </a>
                </div>
                ${alternateUrlItems}`
            )
        }

        if (found && (!displayedAgents)) {
            html += (
                `<div class="info-item">
                    <i class="fas fa-filter"></i>
                    <span style="margin-left: 8px">zero nodes are matching the filter value.<span>
                </div>`
            )
        }
    }

    if (!found) {
        if (machines) {
            html += (
                `<div class="info-item">
                    <a href="https://github.com/netdata/netdata/tree/master/registry#registry" target="_blank">Your nodes list is empty</a>
                </div>`
            )
        } else {
            html += (
                `<div class="info-item">
                    <a href="https://github.com/netdata/netdata/tree/master/registry#registry" target="_blank">Failed to contact the registry</a>
                </div>`
            )
        }

        html += `<hr />`;
        html += `<div class="info-item">Demo netdata nodes</div>`;

        const demoServers = [
            { url: "//london.netdata.rocks/default.html", title: "UK - London (DigitalOcean.com)" },
            { url: "//newyork.netdata.rocks/default.html", title: "US - New York (DigitalOcean.com)" },
            { url: "//sanfrancisco.netdata.rocks/default.html", title: "US - San Francisco (DigitalOcean.com)" },
            { url: "//atlanta.netdata.rocks/default.html", title: "US - Atlanta (CDN77.com)" },
            { url: "//frankfurt.netdata.rocks/default.html", title: "Germany - Frankfurt (DigitalOcean.com)" },
            { url: "//toronto.netdata.rocks/default.html", title: "Canada - Toronto (DigitalOcean.com)" },
            { url: "//singapore.netdata.rocks/default.html", title: "Japan - Singapore (DigitalOcean.com)" },
            { url: "//bangalore.netdata.rocks/default.html", title: "India - Bangalore (DigitalOcean.com)" },
        ]

        for (var server of demoServers) {
            html += (
                `<div class="agent-item">
                    <i class="fas fa-chart-bar" style="color: #fff"></i>
                    <a href="${server.url}">${server.title}</a>
                    <div></div>
                </div>
                `
            );
        }
    }

    return html;
}

function chartsPerRow(total) {
    void (total);
    if (options.chartsPerRow === 0) {
        return 1;
    } else {
        return options.chartsPerRow;
    }
}

function generateHeadCharts(type, chart, duration) {
    if (urlOptions.mode === 'print') {
        return '';
    }

    var head = '';
    var hcharts = oneqosDashboard.anyAttribute(oneqosDashboard.context, type, chart.context, []);
    if (hcharts.length > 0) {
        var hi = 0, hlen = hcharts.length;
        while (hi < hlen) {
            if (typeof hcharts[hi] === 'function') {
                head += hcharts[hi](oneqosDashboard.os, chart.id).replace(/CHART_DURATION/g, duration.toString()).replace(/CHART_UNIQUE_ID/g, chart.id);
            } else {
                head += hcharts[hi].replace(/CHART_DURATION/g, duration.toString()).replace(/CHART_UNIQUE_ID/g, chart.id);
            }
            hi++;
        }
    }
    return head;
}

let registryAgents = [];

let cloudToken = null;

function isSignedIn() {
    return cloudToken != null && cloudAccountID != null;
}

ONEQOS.globalChartUnderlay = {
    callback: null,         // what to call when a highlighted range is setup
    after: null,            // highlight after this time
    before: null,           // highlight before this time
    view_after: null,       // the charts after_ms viewport when the highlight was setup
    view_before: null,      // the charts before_ms viewport, when the highlight was setup
    state: null,            // the chart the highlight was setup

    isActive: function () {
        return (this.after !== null && this.before !== null);
    },

    hasViewport: function () {
        return (this.state !== null && this.view_after !== null && this.view_before !== null);
    },

    init: function (state, after, before, view_after, view_before) {
        this.state = (typeof state !== 'undefined') ? state : null;
        this.after = (typeof after !== 'undefined' && after !== null && after > 0) ? after : null;
        this.before = (typeof before !== 'undefined' && before !== null && before > 0) ? before : null;
        this.view_after = (typeof view_after !== 'undefined' && view_after !== null && view_after > 0) ? view_after : null;
        this.view_before = (typeof view_before !== 'undefined' && view_before !== null && view_before > 0) ? view_before : null;
    },

    setup: function () {
        if (this.isActive()) {
            if (this.state === null) {
                this.state = ONEQOS.options.targets[0];
            }

            if (typeof this.callback === 'function') {
                this.callback(true, this.after, this.before);
            }
        } else {
            if (typeof this.callback === 'function') {
                this.callback(false, 0, 0);
            }
        }
    },

    set: function (state, after, before, view_after, view_before) {
        if (after > before) {
            let t = after;
            after = before;
            before = t;
        }

        this.init(state, after, before, view_after, view_before);

        if (this.hasViewport()) {
            ONEQOS.globalPanAndZoom.setMaster(this.state, this.view_after, this.view_before);
        }

        this.setup();
    },

    clear: function () {
        this.after = null;
        this.before = null;
        this.state = null;
        this.view_after = null;
        this.view_before = null;

        if (typeof this.callback === 'function') {
            this.callback(false, 0, 0);
        }
    },

    focus: function () {
        if (this.isActive() && this.hasViewport()) {
            if (this.state === null) {
                this.state = ONEQOS.options.targets[0];
            }

            if (ONEQOS.globalPanAndZoom.isMaster(this.state)) {
                ONEQOS.globalPanAndZoom.clearMaster();
            }

            ONEQOS.globalPanAndZoom.setMaster(this.state, this.view_after, this.view_before, true);
        }
    }
};

ONEQOS.registry = {
    server: null,         // the netdata registry server
    isCloudEnabled: false,// is netdata.cloud functionality enabled?
    cloudBaseURL: null,   // the netdata cloud base url
    person_guid: null,    // the unique ID of this browser / user
    machine_guid: null,   // the unique ID the netdata server that served dashboard.js
    hostname: 'unknown',  // the hostname of the netdata server that served dashboard.js
    machines: null,       // the user's other URLs
    machines_array: null, // the user's other URLs in an array
    person_urls: null,
    anonymous_statistics_checked: false,
    MASKED_DATA: "***",

    isUsingGlobalRegistry: function () {
        return ONEQOS.registry.server == "https://registry.my-netdata.io";
    },

    isRegistryEnabled: function () {
        return !(ONEQOS.registry.isUsingGlobalRegistry() || isSignedIn())
    },

    parsePersonUrls: function (person_urls) {
        ONEQOS.registry.person_urls = person_urls;

        if (person_urls) {
            ONEQOS.registry.machines = {};
            ONEQOS.registry.machines_array = [];

            let apu = person_urls;
            let i = apu.length;
            while (i--) {
                if (typeof ONEQOS.registry.machines[apu[i][0]] === 'undefined') {
                    // console.log('adding: ' + apu[i][4] + ', ' + ((now - apu[i][2]) / 1000).toString());

                    let obj = {
                        guid: apu[i][0],
                        url: apu[i][1],
                        last_t: apu[i][2],
                        accesses: apu[i][3],
                        name: apu[i][4],
                        alternate_urls: []
                    };
                    obj.alternate_urls.push(apu[i][1]);

                    ONEQOS.registry.machines[apu[i][0]] = obj;
                    ONEQOS.registry.machines_array.push(obj);
                } else {
                    // console.log('appending: ' + apu[i][4] + ', ' + ((now - apu[i][2]) / 1000).toString());

                    let pu = ONEQOS.registry.machines[apu[i][0]];
                    if (pu.last_t < apu[i][2]) {
                        pu.url = apu[i][1];
                        pu.last_t = apu[i][2];
                        pu.name = apu[i][4];
                    }
                    pu.accesses += apu[i][3];
                    pu.alternate_urls.push(apu[i][1]);
                }
            }
        }

        if (typeof netdataRegistryCallback === 'function') {
            netdataRegistryCallback(ONEQOS.registry.machines_array);
        }
    },

    init: function () {
        if (netdataRegistry !== true) {
            return;
        }

        ONEQOS.registry.hello(ONEQOS.serverDefault, function (data) {
            if (data) {
                ONEQOS.registry.server = data.registry;
                if (data.cloud_base_url !== "") {
                    ONEQOS.registry.isCloudEnabled = true;
                    ONEQOS.registry.cloudBaseURL = data.cloud_base_url;
                } else {
                    ONEQOS.registry.isCloudEnabled = false;
                    ONEQOS.registry.cloudBaseURL = "";
                }
                ONEQOS.registry.machine_guid = data.machine_guid;
                ONEQOS.registry.hostname = data.hostname;
                if (!ONEQOS.registry.anonymous_statistics_checked) {
                    ONEQOS.registry.anonymous_statistics_checked = true;
                    if (data.anonymous_statistics) {
                        (function (w, d, s, l, i) {
                            w[l] = w[l] || []; w[l].push({
                                'gtm.start':
                                    new Date().getTime(), event: 'gtm.js'
                            }); var f = d.getElementsByTagName(s)[0],
                                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = false; j.src =
                                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                        })(window, document, 'script', 'dataLayer', 'GTM-N6CBMJD');
                        dataLayer.push({ "anonymous_statistics": "true", "machine_guid": data.machine_guid });
                    }
                }
                ONEQOS.registry.access(2, function (person_urls) {
                    ONEQOS.registry.parsePersonUrls(person_urls);
                });
            }
        });
    },

    hello: function (host, callback) {
        //host = ONEQOS.fixHost(host);

        // send HELLO to a netdata server:
        // 1. verifies the server is reachable
        // 2. responds with the registry URL, the machine GUID of this netdata server and its hostname
        /*$.ajax({
            url: host + '/api/v1/registry?action=hello',
            async: true,
            cache: false,
            headers: {
                'Cache-Control': 'no-cache, no-store',
                'Pragma': 'no-cache'
            },
            xhrFields: { withCredentials: true } // required for the cookie
        })
            .done(function (data) {
                data = ONEQOS.xss.checkOptional('/api/v1/registry?action=hello', data);

                if (typeof data.status !== 'string' || data.status !== 'ok') {
                    ONEQOS.error(408, host + ' response: ' + JSON.stringify(data));
                    data = null;
                }

                if (typeof callback === 'function') {
                    return callback(data);
                }
            })
            .fail(function () {
                ONEQOS.error(407, host);

                if (typeof callback === 'function') {
                    return callback(null);
                }
            });*/
        fetch(host + '/api/v1/registry?action=hello')
            .then(response => response.json())
            .then(function (data) {
                //data = ONEQOS.xss.checkOptional('/api/v1/registry?action=hello', data);

                if (typeof data.status !== 'string' || data.status !== 'ok') {
                    ONEQOS.error(408, host + ' response: ' + JSON.stringify(data));
                    data = null;
                }

                if (typeof callback === 'function') {
                    return callback(data);
                }
            })
    },

    access: function (max_redirects, callback) {
        let name = ONEQOS.registry.MASKED_DATA;
        let url = ONEQOS.registry.MASKED_DATA;

        if (!ONEQOS.registry.isUsingGlobalRegistry()) {
            // If the user is using a private registry keep sending identifiable
            // data.
            name = ONEQOS.registry.hostname;
            url = ONEQOS.serverDefault;
        }

        console.log("ACCESS", name, url);

        // send ACCESS to a netdata registry:
        // 1. it lets it know we are accessing a netdata server (its machine GUID and its URL)
        // 2. it responds with a list of netdata servers we know
        // the registry identifies us using a cookie it sets the first time we access it
        // the registry may respond with a redirect URL to send us to another registry
        fetch(ONEQOS.registry.server + '/api/v1/registry?action=access&machine=' + ONEQOS.registry.machine_guid + '&name=' + encodeURIComponent(name) + '&url=' + encodeURIComponent(url)) // + '&visible_url=' + encodeURIComponent(document.location)
            .then(response => response.json())
            .then(function (data) {
                //data = ONEQOS.xss.checkAlways('/api/v1/registry?action=access', data);

                let redirect = null;
                if (typeof data.registry === 'string') {
                    redirect = data.registry;
                }

                if (typeof data.status !== 'string' || data.status !== 'ok') {
                   // ONEQOS.error(409, ONEQOS.registry.server + ' responded with: ' + JSON.stringify(data));
                    data = null;
                }

                if (data === null) {
                    if (redirect !== null && max_redirects > 0) {
                        ONEQOS.registry.server = redirect;
                        ONEQOS.registry.access(max_redirects - 1, callback);
                    }
                    else {
                        if (typeof callback === 'function') {
                            return callback(null);
                        }
                    }
                } else {
                    if (typeof data.person_guid === 'string') {
                        ONEQOS.registry.person_guid = data.person_guid;
                    }

                    if (typeof callback === 'function') {
                        const urls = data.urls.filter((u) => u[1] !== ONEQOS.registry.MASKED_DATA);
                        return callback(urls);
                    }
                }
            });
        /*$.ajax({
            url: ONEQOS.registry.server + '/api/v1/registry?action=access&machine=' + ONEQOS.registry.machine_guid + '&name=' + encodeURIComponent(name) + '&url=' + encodeURIComponent(url), // + '&visible_url=' + encodeURIComponent(document.location),
            async: true,
            cache: false,
            headers: {
                'Cache-Control': 'no-cache, no-store',
                'Pragma': 'no-cache'
            },
            xhrFields: { withCredentials: true } // required for the cookie
        })
            .done(function (data) {
                data = ONEQOS.xss.checkAlways('/api/v1/registry?action=access', data);

                let redirect = null;
                if (typeof data.registry === 'string') {
                    redirect = data.registry;
                }

                if (typeof data.status !== 'string' || data.status !== 'ok') {
                    ONEQOS.error(409, ONEQOS.registry.server + ' responded with: ' + JSON.stringify(data));
                    data = null;
                }

                if (data === null) {
                    if (redirect !== null && max_redirects > 0) {
                        ONEQOS.registry.server = redirect;
                        ONEQOS.registry.access(max_redirects - 1, callback);
                    }
                    else {
                        if (typeof callback === 'function') {
                            return callback(null);
                        }
                    }
                } else {
                    if (typeof data.person_guid === 'string') {
                        ONEQOS.registry.person_guid = data.person_guid;
                    }

                    if (typeof callback === 'function') {
                        const urls = data.urls.filter((u) => u[1] !== ONEQOS.registry.MASKED_DATA);
                        return callback(urls);
                    }
                }
            })
            .fail(function () {
                ONEQOS.error(410, ONEQOS.registry.server);

                if (typeof callback === 'function') {
                    return callback(null);
                }
            });*/
    },

    delete: function (delete_url, callback) {
        // send DELETE to a netdata registry:
        $.ajax({
            url: ONEQOS.registry.server + '/api/v1/registry?action=delete&machine=' + ONEQOS.registry.machine_guid + '&name=' + encodeURIComponent(ONEQOS.registry.hostname) + '&url=' + encodeURIComponent(ONEQOS.serverDefault) + '&delete_url=' + encodeURIComponent(delete_url),
            async: true,
            cache: false,
            headers: {
                'Cache-Control': 'no-cache, no-store',
                'Pragma': 'no-cache'
            },
            xhrFields: { withCredentials: true } // required for the cookie
        })
            .done(function (data) {
                data = ONEQOS.xss.checkAlways('/api/v1/registry?action=delete', data);

                if (typeof data.status !== 'string' || data.status !== 'ok') {
                    ONEQOS.error(411, ONEQOS.registry.server + ' responded with: ' + JSON.stringify(data));
                    data = null;
                }

                if (typeof callback === 'function') {
                    return callback(data);
                }
            })
            .fail(function () {
                ONEQOS.error(412, ONEQOS.registry.server);

                if (typeof callback === 'function') {
                    return callback(null);
                }
            });
    },

    search: function (machine_guid, callback) {
        // SEARCH for the URLs of a machine:
        $.ajax({
            url: ONEQOS.registry.server + '/api/v1/registry?action=search&machine=' + ONEQOS.registry.machine_guid + '&name=' + encodeURIComponent(ONEQOS.registry.hostname) + '&url=' + encodeURIComponent(ONEQOS.serverDefault) + '&for=' + machine_guid,
            async: true,
            cache: false,
            headers: {
                'Cache-Control': 'no-cache, no-store',
                'Pragma': 'no-cache'
            },
            xhrFields: { withCredentials: true } // required for the cookie
        })
            .done(function (data) {
                data = ONEQOS.xss.checkAlways('/api/v1/registry?action=search', data);

                if (typeof data.status !== 'string' || data.status !== 'ok') {
                    ONEQOS.error(417, ONEQOS.registry.server + ' responded with: ' + JSON.stringify(data));
                    data = null;
                }

                if (typeof callback === 'function') {
                    return callback(data);
                }
            })
            .fail(function () {
                ONEQOS.error(418, ONEQOS.registry.server);

                if (typeof callback === 'function') {
                    return callback(null);
                }
            });
    },

    switch: function (new_person_guid, callback) {
        // impersonate
        $.ajax({
            url: ONEQOS.registry.server + '/api/v1/registry?action=switch&machine=' + ONEQOS.registry.machine_guid + '&name=' + encodeURIComponent(ONEQOS.registry.hostname) + '&url=' + encodeURIComponent(ONEQOS.serverDefault) + '&to=' + new_person_guid,
            async: true,
            cache: false,
            headers: {
                'Cache-Control': 'no-cache, no-store',
                'Pragma': 'no-cache'
            },
            xhrFields: { withCredentials: true } // required for the cookie
        })
            .done(function (data) {
                data = ONEQOS.xss.checkAlways('/api/v1/registry?action=switch', data);

                if (typeof data.status !== 'string' || data.status !== 'ok') {
                    ONEQOS.error(413, ONEQOS.registry.server + ' responded with: ' + JSON.stringify(data));
                    data = null;
                }

                if (typeof callback === 'function') {
                    return callback(data);
                }
            })
            .fail(function () {
                ONEQOS.error(414, ONEQOS.registry.server);

                if (typeof callback === 'function') {
                    return callback(null);
                }
            });
    }
};

// enrich the data structure returned by netdata
// to reflect our menu system and content
// TODO: this is a shame - we should fix charts naming (issue #807)
function enrichChartData(chart) {
    var parts = chart.type.split('_');
    var tmp = parts[0];

    switch (tmp) {
        case 'ap':
        case 'net':
        case 'disk':
        case 'powersupply':
        case 'statsd':
            chart.menu = tmp;
            break;

        case 'apache':
            chart.menu = chart.type;
            if (parts.length > 2 && parts[1] === 'cache') {
                chart.menu_pattern = tmp + '_' + parts[1];
            } else if (parts.length > 1) {
                chart.menu_pattern = tmp;
            }
            break;

        case 'bind':
            chart.menu = chart.type;
            if (parts.length > 2 && parts[1] === 'rndc') {
                chart.menu_pattern = tmp + '_' + parts[1];
            } else if (parts.length > 1) {
                chart.menu_pattern = tmp;
            }
            break;

        case 'cgroup':
            chart.menu = chart.type;
            if (chart.id.match(/.*[\._\/-:]qemu[\._\/-:]*/) || chart.id.match(/.*[\._\/-:]kvm[\._\/-:]*/)) {
                chart.menu_pattern = 'cgqemu';
            } else {
                chart.menu_pattern = 'cgroup';
            }
            break;

        case 'go':
            chart.menu = chart.type;
            if (parts.length > 2 && parts[1] === 'expvar') {
                chart.menu_pattern = tmp + '_' + parts[1];
            } else if (parts.length > 1) {
                chart.menu_pattern = tmp;
            }
            break;

        case 'mount':
            if (parts.length > 2) {
                chart.menu = tmp + '_' + parts[1];
            } else {
                chart.menu = tmp;
            }
            break;

        case 'isc':
            chart.menu = chart.type;
            if (parts.length > 2 && parts[1] === 'dhcpd') {
                chart.menu_pattern = tmp + '_' + parts[1];
            } else if (parts.length > 1) {
                chart.menu_pattern = tmp;
            }
            break;

        case 'ovpn':
            chart.menu = chart.type;
            if (parts.length > 3 && parts[1] === 'status' && parts[2] === 'log') {
                chart.menu_pattern = tmp + '_' + parts[1];
            } else if (parts.length > 1) {
                chart.menu_pattern = tmp;
            }
            break;

        case 'smartd':
        case 'web':
            chart.menu = chart.type;
            if (parts.length > 2 && parts[1] === 'log') {
                chart.menu_pattern = tmp + '_' + parts[1];
            } else if (parts.length > 1) {
                chart.menu_pattern = tmp;
            }
            break;

        case 'tc':
            chart.menu = tmp;

            // find a name for this device from fireqos info
            // we strip '_(in|out)' or '(in|out)_'
            if (chart.context === 'tc.qos' && (typeof options.submenu_names[chart.family] === 'undefined' || options.submenu_names[chart.family] === chart.family)) {
                var n = chart.name.split('.')[1];
                if (n.endsWith('_in')) {
                    options.submenu_names[chart.family] = n.slice(0, n.lastIndexOf('_in'));
                } else if (n.endsWith('_out')) {
                    options.submenu_names[chart.family] = n.slice(0, n.lastIndexOf('_out'));
                } else if (n.startsWith('in_')) {
                    options.submenu_names[chart.family] = n.slice(3, n.length);
                } else if (n.startsWith('out_')) {
                    options.submenu_names[chart.family] = n.slice(4, n.length);
                } else {
                    options.submenu_names[chart.family] = n;
                }
            }

            // increase the priority of IFB devices
            // to have inbound appear before outbound
            if (chart.id.match(/.*-ifb$/)) {
                chart.priority--;
            }

            break;

        default:
            chart.menu = chart.type;
            if (parts.length > 1) {
                chart.menu_pattern = tmp;
            }
            break;
    }

    chart.submenu = chart.family;
}


function headMain(os, charts, duration) {
    void (os);

    if (urlOptions.mode === 'print') {
        return '';
    }

    var head = '';

    if (typeof charts['system.swap'] !== 'undefined') {
        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.swap"'
            + ' data-dimensions="used"'
            + ' data-append-options="percentage"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="Used Swap"'
            + ' data-units="%"'
            + ' data-easypiechart-max-value="100"'
            + ' data-width="9%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-colors="#DD4400"'
            + ' role="application"></div>';
    }

    if (typeof charts['system.io'] !== 'undefined') {
        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.io"'
            + ' data-dimensions="in"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="Disk Read"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.io.mainhead"'
            + ' role="application"></div>';

        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.io"'
            + ' data-dimensions="out"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="Disk Write"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.io.mainhead"'
            + ' role="application"></div>';
    }
    else if (typeof charts['system.pgpgio'] !== 'undefined') {
        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.pgpgio"'
            + ' data-dimensions="in"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="Disk Read"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.pgpgio.mainhead"'
            + ' role="application"></div>';

        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.pgpgio"'
            + ' data-dimensions="out"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="Disk Write"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.pgpgio.mainhead"'
            + ' role="application"></div>';
    }

    if (typeof charts['system.cpu'] !== 'undefined') {
        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.cpu"'
            + ' data-chart-library="gauge"'
            + ' data-title="CPU"'
            + ' data-units="%"'
            + ' data-gauge-max-value="100"'
            + ' data-width="20%"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-colors="' + ONEQOS.colors[12] + '"'
            + ' role="application"></div>';
    }

    if (typeof charts['system.net'] !== 'undefined') {
        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.net"'
            + ' data-dimensions="received"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="Net Inbound"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.net.mainhead"'
            + ' role="application"></div>';

        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.net"'
            + ' data-dimensions="sent"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="Net Outbound"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.net.mainhead"'
            + ' role="application"></div>';
    }
    else if (typeof charts['system.ip'] !== 'undefined') {
        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.ip"'
            + ' data-dimensions="received"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="IP Inbound"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.ip.mainhead"'
            + ' role="application"></div>';

        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.ip"'
            + ' data-dimensions="sent"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="IP Outbound"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.ip.mainhead"'
            + ' role="application"></div>';
    }
    else if (typeof charts['system.ipv4'] !== 'undefined') {
        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.ipv4"'
            + ' data-dimensions="received"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="IPv4 Inbound"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.ipv4.mainhead"'
            + ' role="application"></div>';

        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.ipv4"'
            + ' data-dimensions="sent"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="IPv4 Outbound"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.ipv4.mainhead"'
            + ' role="application"></div>';
    }
    else if (typeof charts['system.ipv6'] !== 'undefined') {
        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.ipv6"'
            + ' data-dimensions="received"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="IPv6 Inbound"'
            + ' data-units="kbps"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.ipv6.mainhead"'
            + ' role="application"></div>';

        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.ipv6"'
            + ' data-dimensions="sent"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="IPv6 Outbound"'
            + ' data-units="kbps"'
            + ' data-width="11%"'
            + ' data-before="0"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-common-units="system.ipv6.mainhead"'
            + ' role="application"></div>';
    }

    if (typeof charts['system.ram'] !== 'undefined') {
        head += '<div class="netdata-container" style="margin-right: 10px;" data-oneqos="system.ram"'
            + ' data-dimensions="used|buffers|active|wired"' // active and wired are FreeBSD stats
            + ' data-append-options="percentage"'
            + ' data-chart-library="easypiechart"'
            + ' data-title="Used RAM"'
            + ' data-units="%"'
            + ' data-easypiechart-max-value="100"'
            + ' data-width="9%"'
            + ' data-after="-' + duration.toString() + '"'
            + ' data-points="' + duration.toString() + '"'
            + ' data-colors="' + ONEQOS.colors[7] + '"'
            + ' role="application"></div>';
    }

    return head;
}


ONEQOS.name2id = function (s) {
    return s
        .replace(/ /g, '_')
        .replace(/:/g, '_')
        .replace(/\(/g, '_')
        .replace(/\)/g, '_')
        .replace(/\./g, '_')
        .replace(/\//g, '_');
};

function renderPage(menus, data) {
    var div = document.getElementsByTagName('body')[0];

    var pcent_width = Math.floor(100 / chartsPerRow(div.offsetWidth));

    // find the proper duration for per-second updates
    //  var duration = Math.round(($(div).width() * pcent_width / 100 * data.update_every / 3) / 60) * 60;
    var duration = Math.round((div.offsetWidth * pcent_width / 100 * data.update_every / 3) / 60) * 60;

    options.duration = duration;
    options.update_every = data.update_every;

    var html = '';
    var sidebar = '<ul class="nav dashboard-sidenav" data-spy="affix" id="sidebar_ul">';
    var mainhead = headMain(oneqosDashboard.os, data.charts, duration);

    // sort the menus
    var main = sortObjectByPriority(menus);
    var i = 0, len = main.length;
    while (i < len) {
        var menu = main[i++];

        // generate an entry at the main menu

        var menuid = ONEQOS.name2id('menu_' + menu);
        sidebar += '<li class=""><a href="#' + menuid + '" onClick="return scrollToId(\'' + menuid + '\');">' + menus[menu].icon + ' ' + menus[menu].title + '</a><ul class="nav">';
        html += '<div role="section" class="dashboard-section"><div role="sectionhead"><h1 id="' + menuid + '" role="heading">' + menus[menu].icon + ' ' + menus[menu].title + '</h1></div><div role="section"  class="dashboard-subsection">';

        if (menus[menu].info !== null) {
            html += menus[menu].info;
        }

        // console.log(' >> ' + menu + ' (' + menus[menu].priority + '): ' + menus[menu].title);

        var shtml = '';
        var mhead = '<div class="netdata-chart-row">' + mainhead;
        mainhead = '';

        // sort the submenus of this menu
        var sub = sortObjectByPriority(menus[menu].submenus);
        var si = 0, slen = sub.length;
        while (si < slen) {
            var submenu = sub[si++];

            // generate an entry at the submenu
            var submenuid = ONEQOS.name2id('menu_' + menu + '_submenu_' + submenu);
            sidebar += '<li class><a href="#' + submenuid + '" onClick="return scrollToId(\'' + submenuid + '\');">' + menus[menu].submenus[submenu].title + '</a></li>';
            shtml += '<div role="section" class="dashboard-section-container" id="' + submenuid + '"><h2 id="' + submenuid + '" class="netdata-chart-alignment" role="heading">' + menus[menu].submenus[submenu].title + '</h2>';

            if (menus[menu].submenus[submenu].info !== null) {
                shtml += '<div class="dashboard-submenu-info netdata-chart-alignment" role="document">' + menus[menu].submenus[submenu].info + '</div>';
            }

            var head = '<div class="netdata-chart-row">';
            var chtml = '';

            // console.log('    \------- ' + submenu + ' (' + menus[menu].submenus[submenu].priority + '): ' + menus[menu].submenus[submenu].title);

            // sort the charts in this submenu of this menu
            menus[menu].submenus[submenu].charts.sort(prioritySort);
            var ci = 0, clen = menus[menu].submenus[submenu].charts.length;
            while (ci < clen) {
                var chart = menus[menu].submenus[submenu].charts[ci++];

                // generate the submenu heading charts
                mhead += generateHeadCharts('mainheads', chart, duration);
                head += generateHeadCharts('heads', chart, duration);

                function chartCommonMin(family, context, units) {
                    var x = oneqosDashboard.anyAttribute(oneqosDashboard.context, 'commonMin', context, undefined);
                    if (typeof x !== 'undefined') {
                        return ' data-common-min="' + family + '/' + context + '/' + units + '"';
                    } else {
                        return '';
                    }
                }

                function chartCommonMax(family, context, units) {
                    var x = oneqosDashboard.anyAttribute(oneqosDashboard.context, 'commonMax', context, undefined);
                    if (typeof x !== 'undefined') {
                        return ' data-common-max="' + family + '/' + context + '/' + units + '"';
                    } else {
                        return '';
                    }
                }

                // generate the chart
                if (urlOptions.mode === 'print') {
                    chtml += '<div role="row" class="dashboard-print-row">';
                }

                //console.log("oneqosDashboard",oneqosDashboard.contextHeight(chart.context, options.chartsHeight).toString());


                chtml += '<div class="netdata-chartblock-container" style="width: ' + pcent_width.toString() + '%;">' + oneqosDashboard.contextInfo(chart.context) + '<div class="netdata-container" id="chart_' + ONEQOS.name2id(chart.id) + '" data-oneqos="' + chart.id + '"'
                    + ' data-width="100%"'
                    //+ ' data-height="' + oneqosDashboard.contextHeight(chart.context, options.chartsHeight).toString() + 'px"'
                    + ' data-dygraph-valuerange="' + oneqosDashboard.contextValueRange(chart.context) + '"'
                    + ' data-before="0"'
                    + ' data-after="-' + duration.toString() + '"'
                    + ' data-id="' + ONEQOS.name2id(options.hostname + '/' + chart.id) + '"'
                    + ' data-colors="' + oneqosDashboard.anyAttribute(oneqosDashboard.context, 'colors', chart.context, '') + '"'
                    + ' data-decimal-digits="' + oneqosDashboard.contextDecimalDigits(chart.context, -1) + '"'
                    + chartCommonMin(chart.family, chart.context, chart.units)
                    + chartCommonMax(chart.family, chart.context, chart.units)
                    + ' role="application"></div></div>';

                if (urlOptions.mode === 'print') {
                    chtml += '</div>';
                }


            }

            head += '</div>';
            shtml += head + chtml + '</div>';

            options.menus[menu].submenus[submenu].chtml = chtml;
            options.menus[menu].submenus[submenu].shtml = shtml;

        }

        mhead += '</div>';
        sidebar += '</ul></li>';
        html += mhead + shtml + '</div></div><hr role="separator"/>';
    }

    const isMemoryModeDbEngine = data.memory_mode === "dbengine";

    sidebar += '<li class="" style="padding-top:15px;"><a href="https://learn.netdata.cloud/docs/agent/collectors/quickstart/" target="_blank"><i class="fas fa-plus"></i> Add more charts</a></li>';
    sidebar += '<li class=""><a href="https://learn.netdata.cloud/docs/agent/health/quickstart/" target="_blank"><i class="fas fa-plus"></i> Add more alarms</a></li>';
    sidebar += '<li class="" style="margin:20px;color:#666;"><small>Every ' +
        ((data.update_every === 1) ? 'second' : data.update_every.toString() + ' seconds') + ', ' +
        'Netdata collects <strong>' + data.dimensions_count.toLocaleString() + '</strong> metrics on ' +
        data.hostname.toString() + ', presents them in <strong>' +
        data.charts_count.toLocaleString() + '</strong> charts' +
        (isMemoryModeDbEngine ? '' : ',') + // oxford comma
        ' and monitors them with <strong>' +
        data.alarms_count.toLocaleString() + '</strong> alarms.';

    if (!isMemoryModeDbEngine) {
        sidebar += '<br />&nbsp;<br />Get more history by ' +
            '<a href="https://learn.netdata.cloud/guides/longer-metrics-storage#using-the-round-robin-database" target=_blank>configuring Netdata\'s <strong>history</strong></a> or using the <a href="https://learn.netdata.cloud/docs/agent/database/engine/" target=_blank>DB engine.</a>';
    }

    sidebar += '<br/>&nbsp;<br/><strong>netdata</strong><br/>' + data.version.toString() + '</small></li>';

    sidebar += '</ul>';
    //div.innerHTML = html;
    //document.getElementById('sidebar').innerHTML = sidebar;

    if (urlOptions.highlight === true) {
        ONEQOS.globalChartUnderlay.init(null
            , urlOptions.highlight_after
            , urlOptions.highlight_before
            , (urlOptions.after > 0) ? urlOptions.after : null
            , (urlOptions.before > 0) ? urlOptions.before : null
        );
    } else {
        ONEQOS.globalChartUnderlay.clear();
    }

    if (urlOptions.mode === 'print') {
        printPage();
    } else {
        //finalizePage();
    }

    HTML_graph = html;
    // console.log("html full-->",html);

    sidebarexport = sidebar;
    //$.POST
    // mostrarDato();
}


function renderChartsAndMenu(data) {
    options.menus = {};
    options.submenu_names = {};

    var menus = options.menus;
    var charts = data.charts;
    var m, menu_key;

    for (var c in charts) {
        if (!charts.hasOwnProperty(c)) {
            continue;
        }

        var chart = charts[c];
        enrichChartData(chart);//se crean los menu y submenu en el objeto options
        m = chart.menu;

        // create the menu
        if (typeof menus[m] === 'undefined') {
            menus[m] = {
                menu_pattern: chart.menu_pattern,
                priority: chart.priority,
                submenus: {},
                title: oneqosDashboard.menuTitle(chart),
                icon: oneqosDashboard.menuIcon(chart),
                info: oneqosDashboard.menuInfo(chart),
                height: oneqosDashboard.menuHeight(chart) * options.chartsHeight
            };
        } else {
            if (typeof (menus[m].menu_pattern) === 'undefined') {
                menus[m].menu_pattern = chart.menu_pattern;
            }

            if (chart.priority < menus[m].priority) {
                menus[m].priority = chart.priority;
            }
        }

        menu_key = (typeof (menus[m].menu_pattern) !== 'undefined') ? menus[m].menu_pattern : m;

        // create the submenu
        if (typeof menus[m].submenus[chart.submenu] === 'undefined') {
            menus[m].submenus[chart.submenu] = {
                priority: chart.priority,
                charts: [],
                title: null,
                info: oneqosDashboard.submenuInfo(menu_key, chart.submenu),
                height: oneqosDashboard.submenuHeight(menu_key, chart.submenu, menus[m].height)
            };
        } else {
            if (chart.priority < menus[m].submenus[chart.submenu].priority) {
                menus[m].submenus[chart.submenu].priority = chart.priority;
            }
        }

        // index the chart in the menu/submenu
        menus[m].submenus[chart.submenu].charts.push(chart);
    }

    // propagate the descriptive subname given to QoS
    // to all the other submenus with the same name
    for (var m in menus) {
        if (!menus.hasOwnProperty(m)) {
            continue;
        }

        for (var s in menus[m].submenus) {
            if (!menus[m].submenus.hasOwnProperty(s)) {
                continue;
            }

            // set the family using a name
            if (typeof options.submenu_names[s] !== 'undefined') {
                menus[m].submenus[s].title = s + ' (' + options.submenu_names[s] + ')';
            } else {
                menu_key = (typeof (menus[m].menu_pattern) !== 'undefined') ? menus[m].menu_pattern : m;
                menus[m].submenus[s].title = oneqosDashboard.submenuTitle(menu_key, s);
            }
        }
    }

    renderPage(menus, data);
}

function initializeDynamicDashboardWithData(data) {
    if (data !== null) {
        options.hostname = data.hostname;
        options.data = data;
        options.version = data.version;
        options.release_channel = data.release_channel;
        oneqosDashboard.os = data.os;

        if (typeof data.hosts !== 'undefined') {
            options.hosts = data.hosts;
        }

        // create a chart_by_name index
        data.charts_by_name = {};
        var charts = data.charts;
        var x;
        for (x in charts) {
            if (!charts.hasOwnProperty(x)) {
                continue;
            }

            var chart = charts[x];
            data.charts_by_name[chart.name] = chart;
        }

        // render all charts
        renderChartsAndMenu(data);

        // Ensure MyNetdata menu is rendered with latest host info #5370
        renderMyNetdataMenu(isSignedIn() ? cloudAgents : registryAgents);
    }
}


//recuperar el menu y la informacion de las graficas
function retrieveMenu(host) {
    ONEQOS.serverDefault = host;
    // return new Promise(function(resolve, reject) {
    ONEQOS.chartRegistry.downloadAll(ONEQOS.serverDefault, function (data) {
        if (data !== null) {
            initializeDynamicDashboardWithData(data);
        }
    });
    //    });
}

function loadGraphic(graph) {
    netdataRegistry = true;
    //console.log(graph);
    var parser = new DOMParser();
    var doc = parser.parseFromString(HTML_graph, 'text/html');
    return doc.getElementById(graph);
}

//retrieveMenu();