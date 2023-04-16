import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }


  //todo burayı düzelt
  guessedWords: string[] = ["     ", "     ", "     ", "     ", "     ", "     "]
  //!
  counter = 0;
  enteredChars: string[] = [];
  correctChars: string[] = [];

  letters1 = ["A", "B", "C", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L"]
  letters2 = ["M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"]
  wordPool = ["duvar", "beyaz", "civar", "dolap", "şeker", "fener", "yasal", "halat", "araba", "joker", "kablo", "korku", "merak", "narin", "kilim", "pilot", "radyo", "sahil", "tavan", "lamba", "yayla", "yemek", "zaman",
    "RADYO",
    "SEHPA",
    "DOLAP",
    "KALEM",
    "KAVUN",
    "KÖPEK",
    "MERAK",
    "GAZAP",
    "SEHPA",
    "ROMAN",
    "CEVİZ"];


  chosenWord = "";


  ngOnInit(): void {
    this.chosenWord = this.chooseWord().toLocaleUpperCase('tr-TR');
    console.log(this.chosenWord)
  }

  chooseWord() {
    const index = Math.floor(Math.random() * this.wordPool.length);
    return this.wordPool[index];
  }

  enterGuess(value: string) {
    if (value.length === 5 && this.counter < 6) {
      value = value.toLocaleUpperCase('tr-TR');
      this.guessedWords[this.counter] = value;
      this.counter++;

      value.split('').forEach(el => this.enteredChars.push(el))
      //console.log(this.enteredChars)
    }

  }

  checkChar(char: any): boolean {
    let chosenWordChars = this.chosenWord.split('');
    for (let i = 0; i < chosenWordChars.length; i++) {
      for (let j = 0; j < this.enteredChars.length; j++) {
        if (chosenWordChars[i] == this.enteredChars[j] && chosenWordChars[i] == char) {
          return true;
        }
      }
    }
    return false;
  }

  compareWords(char: any): string {
    if (char == " ")
      return 'btn btn-light char'

    //şuan son kelime için doğru çalışıyor ama öncekileri işlemiyor onlarıda işlemesi lazım
     return this.compareWordsHandler(this.chosenWord,this.guessedWords[this.counter-1],char);

  }

  compareWordsHandler(guestedWord:string,enteredWord:string,char:any):string{
    for (let i = 0; i < guestedWord.length; i++) {
      for (let j = 0; j < enteredWord.length; j++) {
          if (guestedWord[i] == enteredWord[j] && guestedWord[i] == char) {
            if (i==j)
              return 'btn btn-success char';
            else
              return 'btn btn-warning char';
          }
        }
      }
      return 'btn btn-secondary char';
    }


}
