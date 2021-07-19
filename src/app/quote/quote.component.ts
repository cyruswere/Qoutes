import { Component, OnInit } from '@angular/core';
import { Quote }from  '../quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1,  'Wesley Snipes', "Don't stop when you are tired.Stop when you're done.",new Date(2029, 7, 6), 4, 3),
    new Quote(2,  'Christopher Columbus','You can never cross the ocean until you have the courage to lose sight of the shore.', new Date(2024, 11, 20), 26, 10),
    new Quote(3,  'Aristole','We are what we repeatedly do. Excellence, then, is not an act, but a habit.', new Date(2021, 10, 30), 20, 30),
    new Quote(4, 'Barbara Baron', "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.", new Date(2023, 12, 23), 20, 1),
    new Quote(5, 'Kelvin Trudeau', "If you continue to think the way you've always thought, you'll continue to get what you've always got.", new Date(1999, 11, 1),40,20 ),
    new Quote(6, 'Benjamin Disraeli', 'Action may not always bring hapiness; but there is no happiness without action.', new Date(2030, 4, 4), 20, 5),
    new Quote(7, 'David Brinkley', 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.', new Date(2022, 3, 20), 2, 1),
    new Quote(8, 'Edith Wharton', 'There are two ways of spreading light. To be the candle, or the mirror that reflects it.', new Date(2040, 12,25), 30, 12),
  ];

  toggle = false;
  
  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete:any, index:any){
    if(isComplete){
      let toDelete= confirm(`Please confirm if you want to delete ${this.quotes[index].name}?`)

      if(toDelete)
      this.quotes.splice(index,1)
    }
  }

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

  }

  like(index: any){
    this.quotes[index].like++;
  }
  unlike(index: any){
    this.quotes[index].unlike++;
  }

  constructor() { }

  ngOnInit(){

  }

}
