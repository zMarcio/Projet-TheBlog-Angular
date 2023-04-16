import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get("id")
    )
      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
        
    this.contentTittle = result.title
    this.photoCoverContent = result.photo
    this.contentDescriptionp = result.description
    this.contentDescriptionp1 = result.description1
    this.contentDescriptionp2 = result.description2
    this.contentDescriptionp3 = result.description3
    this.contentDescriptionp4 = result.description4
    this.contentDescriptionp5 = result.description5
    this.contentDescriptionp6 = result.description6
    this.contentDescriptionp7 = result.description7
    
  }

  private id:string | null = '0';

  photoCoverContent:string = '';

  contentTittle:string = 'Meu sonho em palavras...';

  contentDescriptionp:string  = '';

  contentDescriptionp1:string | undefined  = '';

  contentDescriptionp2:string | undefined  = '';

  contentDescriptionp3:string | undefined  = '';

  contentDescriptionp4:string | undefined  = '';

  contentDescriptionp5:string | undefined  = '';

  contentDescriptionp6:string | undefined  = '';

  contentDescriptionp7:string | undefined  = '';

}
