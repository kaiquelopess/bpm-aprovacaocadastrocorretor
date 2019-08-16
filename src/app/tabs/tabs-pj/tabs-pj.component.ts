import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-tabs-pj',
  templateUrl: './tabs-pj.component.html',
  styleUrls: ['./tabs-pj.component.css']
})
export class TabsPjComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) {  }

  ngOnInit() {
  }

}
