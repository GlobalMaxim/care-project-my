import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less'],
})
export class ContactFormComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (window.innerWidth > 0) {
      $('.send').on('click', function () {
        var it = $(this);

        var form = $(this).closest('form');

        it.prop('disabled', true);
        it.addClass('disabled');

        // if (form[0].checkValidity()) {
        if (true) {
          console.log('success');

          form.removeClass('was-validated');
          form.submit();
        } else {
          form.addClass('was-validated');

          it.prop('disabled', false);
          it.removeClass('disabled');
        }
      });
    }
  }
}
