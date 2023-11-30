import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dettagli',
    templateUrl: './dettagli.component.html',
    styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
    @Input() post!: Post;

    postSrv: any;

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe((param) => {
            const id = +param['id'];
            console.log(id);
            this.post = this.postSrv.recuperaPost(id);
        });
    }

    ngOnInit(): void {}
}
