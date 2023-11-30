import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-dettagli',
    templateUrl: './dettagli.component.html',
    styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
    @Input() post!: Post;

    constructor() {}

    ngOnInit(): void {}
}
