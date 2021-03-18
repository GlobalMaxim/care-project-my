import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit, AfterViewInit {
    @ViewChild('collapsecontent') collapsecontent!: ElementRef;

    constructor(private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (+params['productCode'] === 0) {
                this.router.navigate(['/404']);
            }
        });
    }

    ngAfterViewInit() {
        const collapseContent = this.collapsecontent.nativeElement;

        if (window.innerWidth < 768) {
            $('.collapse-content').each(function () {
                var block = $(this),
                    collapse = block.find('.collapse');

                collapse.each(function () {
                    var it = $(this),
                        id = it.attr('id'),
                        btn = block.find('.btn[data-bs-target="#' + id + '"]');
                    console.log('hello');
                    btn.after($('#' + id));
                });
            });
        }
    }
}
