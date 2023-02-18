import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-art-forms',
  templateUrl: './art-forms.component.html',
  styleUrls: ['./art-forms.component.css']
})
export class ArtFormsComponent {
  artform=data
i: any;
  ngOninit():void{
    this.artform=data
  }

  constructor(private router:Router,private hero:HeroService)
{}
art=this.hero.giveData();
gotoHere(id:any){
localStorage.setItem('id',id);
this.router.navigate(['/singlepage']);
}
  
  }


