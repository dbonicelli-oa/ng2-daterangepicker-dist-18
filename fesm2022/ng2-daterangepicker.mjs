import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Input, Output, NgModule } from '@angular/core';
import 'daterangepicker';
import $ from 'jquery';

class DaterangepickerConfig {
    settings;
    constructor() {
        this.settings = {};
    }
    static ɵfac = function DaterangepickerConfig_Factory(t) { return new (t || DaterangepickerConfig)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DaterangepickerConfig, factory: DaterangepickerConfig.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DaterangepickerConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();

class DaterangepickerComponent {
    input;
    config;
    differs;
    activeRange;
    targetOptions = {};
    _differ = {};
    datePicker;
    options = {};
    selected = new EventEmitter();
    cancelDaterangepicker = new EventEmitter();
    applyDaterangepicker = new EventEmitter();
    hideCalendarDaterangepicker = new EventEmitter();
    showCalendarDaterangepicker = new EventEmitter();
    hideDaterangepicker = new EventEmitter();
    showDaterangepicker = new EventEmitter();
    constructor(input, config, differs) {
        this.input = input;
        this.config = config;
        this.differs = differs;
        this._differ['options'] = this.differs.find(this.options).create();
        this._differ['settings'] = this.differs.find(this.config.settings).create();
    }
    ngAfterViewInit() {
        this.render();
        this.attachEvents();
    }
    ngDoCheck() {
        let optionsChanged = this._differ['options'].diff(this.options);
        let settingsChanged = this._differ['settings'].diff(this.config.settings);
        if (optionsChanged || settingsChanged) {
            this.render();
            this.attachEvents();
            if (this.activeRange && this.datePicker) {
                this.datePicker.setStartDate(this.activeRange.start);
                this.datePicker.setEndDate(this.activeRange.end);
            }
        }
    }
    ngOnDestroy() {
        this.destroyPicker();
    }
    render() {
        this.targetOptions = Object.assign({}, this.config.settings, this.options);
        $(this.input.nativeElement).daterangepicker(this.targetOptions, this.callback.bind(this));
        if (this.options.customClasses && this.options.customClasses.length) {
            for (let customClass of this.options.customClasses) {
                this.datePicker = $(this.input.nativeElement).data('daterangepicker').container.addClass(customClass);
            }
        }
        else {
            this.datePicker = $(this.input.nativeElement).data('daterangepicker');
        }
    }
    callback(start, end, label) {
        this.activeRange = {
            start: start,
            end: end,
            label: label
        };
        this.selected.emit(this.activeRange);
    }
    destroyPicker() {
        try {
            $(this.input.nativeElement).data('daterangepicker').remove();
        }
        catch (e) {
            console.log(e.message);
        }
    }
    attachEvents() {
        $(this.input.nativeElement).on('cancel.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.cancelDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('apply.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.applyDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('hideCalendar.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.hideCalendarDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('showCalendar.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.showCalendarDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('hide.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.hideDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('show.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.showDaterangepicker.emit(event);
        });
    }
    static ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(DaterangepickerConfig), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DaterangepickerComponent, selectors: [["", "daterangepicker", ""]], inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DaterangepickerComponent, [{
        type: Directive,
        args: [{
                selector: '[daterangepicker]'
            }]
    }], () => [{ type: i0.ElementRef }, { type: DaterangepickerConfig }, { type: i0.KeyValueDiffers }], { options: [{
            type: Input
        }], selected: [{
            type: Output
        }], cancelDaterangepicker: [{
            type: Output
        }], applyDaterangepicker: [{
            type: Output
        }], hideCalendarDaterangepicker: [{
            type: Output
        }], showCalendarDaterangepicker: [{
            type: Output
        }], hideDaterangepicker: [{
            type: Output
        }], showDaterangepicker: [{
            type: Output
        }] }); })();

class Daterangepicker {
    static ɵfac = function Daterangepicker_Factory(t) { return new (t || Daterangepicker)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: Daterangepicker });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Daterangepicker, [{
        type: NgModule,
        args: [{
                declarations: [DaterangepickerComponent],
                imports: [],
                exports: [DaterangepickerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Daterangepicker, { declarations: [DaterangepickerComponent], exports: [DaterangepickerComponent] }); })();

/*
 * Public API Surface of ng2-daterangepicker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Daterangepicker, DaterangepickerComponent, DaterangepickerConfig };
//# sourceMappingURL=ng2-daterangepicker.mjs.map
