import { Directive, Input, Output, EventEmitter } from '@angular/core';
import 'daterangepicker';
import $ from "jquery";
import * as i0 from "@angular/core";
import * as i1 from "./ng2-daterangepicker.service";
export class DaterangepickerComponent {
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
    static ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DaterangepickerConfig), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DaterangepickerComponent, selectors: [["", "daterangepicker", ""]], inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DaterangepickerComponent, [{
        type: Directive,
        args: [{
                selector: '[daterangepicker]'
            }]
    }], () => [{ type: i0.ElementRef }, { type: i1.DaterangepickerConfig }, { type: i0.KeyValueDiffers }], { options: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItZGF0ZXJhbmdlcGlja2VyL3NyYy9saWIvbmcyLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7O0FBTXZCLE1BQU0sT0FBTyx3QkFBd0I7SUFtQnpCO0lBQ0E7SUFDQTtJQW5CRixXQUFXLENBQU07SUFDakIsYUFBYSxHQUFRLEVBQUUsQ0FBQztJQUN4QixPQUFPLEdBQVEsRUFBRSxDQUFDO0lBRW5CLFVBQVUsQ0FBTTtJQUVkLE9BQU8sR0FBUSxFQUFFLENBQUM7SUFFakIsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUIscUJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUMzQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzFDLDJCQUEyQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDakQsMkJBQTJCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNqRCxtQkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3pDLG1CQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbkQsWUFDVSxLQUFpQixFQUNqQixNQUE2QixFQUM3QixPQUF3QjtRQUZ4QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRWhDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFD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O2tCQUFqQixNQUFNO1lBQ0cscUJBQXFCO2tCQUE5QixNQUFNO1lBQ0csb0JBQW9CO2tCQUE3QixNQUFNO1lBQ0csMkJBQTJCO2tCQUFwQyxNQUFNO1lBQ0csMkJBQTJCO2tCQUFwQyxNQUFNO1lBQ0csbUJBQW1CO2tCQUE1QixNQUFNO1lBQ0csbUJBQW1CO2tCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgS2V5VmFsdWVEaWZmZXJzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdkYXRlcmFuZ2VwaWNrZXInO1xuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHsgRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSBcIi4vbmcyLWRhdGVyYW5nZXBpY2tlci5zZXJ2aWNlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkYXRlcmFuZ2VwaWNrZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xuXG4gIHByaXZhdGUgYWN0aXZlUmFuZ2U6IGFueTtcbiAgcHJpdmF0ZSB0YXJnZXRPcHRpb25zOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfZGlmZmVyOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgZGF0ZVBpY2tlcjogYW55O1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNhbmNlbERhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFwcGx5RGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGlkZUNhbGVuZGFyRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2hvd0NhbGVuZGFyRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgaGlkZURhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNob3dEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNvbmZpZzogRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxuICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzXG4gICkge1xuICAgIHRoaXMuX2RpZmZlclsnb3B0aW9ucyddID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5vcHRpb25zKS5jcmVhdGUoKTtcbiAgICB0aGlzLl9kaWZmZXJbJ3NldHRpbmdzJ10gPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLmNvbmZpZy5zZXR0aW5ncykuY3JlYXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGxldCBvcHRpb25zQ2hhbmdlZCA9IHRoaXMuX2RpZmZlclsnb3B0aW9ucyddLmRpZmYodGhpcy5vcHRpb25zKTtcbiAgICBsZXQgc2V0dGluZ3NDaGFuZ2VkID0gdGhpcy5fZGlmZmVyWydzZXR0aW5ncyddLmRpZmYodGhpcy5jb25maWcuc2V0dGluZ3MpO1xuXG4gICAgaWYgKG9wdGlvbnNDaGFuZ2VkIHx8IHNldHRpbmdzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHRoaXMuYXR0YWNoRXZlbnRzKCk7XG4gICAgICBpZiAodGhpcy5hY3RpdmVSYW5nZSAmJiB0aGlzLmRhdGVQaWNrZXIpIHtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLnNldFN0YXJ0RGF0ZSh0aGlzLmFjdGl2ZVJhbmdlLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyLnNldEVuZERhdGUodGhpcy5hY3RpdmVSYW5nZS5lbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveVBpY2tlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgdGhpcy50YXJnZXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25maWcuc2V0dGluZ3MsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAoPGFueT4kKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkpLmRhdGVyYW5nZXBpY2tlcihcbiAgICAgIHRoaXMudGFyZ2V0T3B0aW9ucyxcbiAgICAgIHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmN1c3RvbUNsYXNzZXMgJiYgdGhpcy5vcHRpb25zLmN1c3RvbUNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBjdXN0b21DbGFzcyBvZiB0aGlzLm9wdGlvbnMuY3VzdG9tQ2xhc3Nlcykge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXIgPSAoXG4gICAgICAgICAgPGFueT4kKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudClcbiAgICAgICAgKS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5jb250YWluZXIuYWRkQ2xhc3MoY3VzdG9tQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXIgPSAoXG4gICAgICAgIDxhbnk+JCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICApLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsbGJhY2soc3RhcnQ/OiBhbnksIGVuZD86IGFueSwgbGFiZWw/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVJhbmdlID0ge1xuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgZW5kOiBlbmQsXG4gICAgICBsYWJlbDogbGFiZWxcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQodGhpcy5hY3RpdmVSYW5nZSk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lQaWNrZXIoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5yZW1vdmUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoRXZlbnRzKCk6IHZvaWQge1xuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignY2FuY2VsLmRhdGVyYW5nZXBpY2tlcicsXG4gICAgICAoZTogYW55LCBwaWNrZXI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xuICAgICAgICB0aGlzLmNhbmNlbERhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdhcHBseS5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5hcHBseURhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdoaWRlQ2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XG4gICAgICAgIHRoaXMuaGlkZUNhbGVuZGFyRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ3Nob3dDYWxlbmRhci5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5zaG93Q2FsZW5kYXJEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignaGlkZS5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5oaWRlRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ3Nob3cuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XG4gICAgICAgIHRoaXMuc2hvd0RhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cbiJdfQ==