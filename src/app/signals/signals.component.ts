import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  count = signal(10);
  updateValue(value: string) {
    if (value === 'inc') {
      this.count.set(this.count() + 1);
    } else if (value === 'dec') {
      this.count.set(this.count() - 1);
    } else {
      this.count.set(0);
    }
  }
  // constructor() {
  //   effect(() => {
  //     console.log(this.data());
  //   });
  // }

  data = signal<number | string>(10);

  updateData(value: string | number): void {
    this.data.set(value);
  }

  x= signal(10)
  y = signal(30)
  z = computed(()=> this.x()+this.y()) // cannot update, READONLY

  updateTotal()
  {
    console.log(this.z())
    this.x.set(19)
    this.y.set(27)
    console.log(this.z())
  }

  displayHeading : boolean = true
  varCount = signal<number>(1)
  constructor() {
    effect(()=>{
      if(this.varCount()==2)
      {
        this.displayHeading = false
        setTimeout(()=>{
          this.displayHeading = true
        }, 2000)
      }
      else
      {
        this.displayHeading = true
      }
    })
    
  }
  updateVarCount()
  {
    this.varCount.set(this.varCount()+1)
  }
}
