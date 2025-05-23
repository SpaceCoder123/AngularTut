import { Component  } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'profile',
    template:'<h1> Profile Component</h1>',
    templateUrl:'./profile.component.html',
    styleUrl:'./profile.component.css'
})

export class ProfileComponent
{
    constructor(private route:ActivatedRoute) {}
    name: string | null =""
    ngOnInit()
    {
        // this.name = this.route.snapshot.paramMap.get("name")
        this.route.queryParams.subscribe(params=>
        {
            this.name = params['name']
        })
    }

}