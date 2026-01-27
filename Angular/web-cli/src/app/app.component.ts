import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
  type Command = {
  command: string;
  aliases: string[];
  output: string[];
  };
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-cli';
  responses=[""];
  command=""
  start = performance.now();
  @ViewChild('inputField')inputElementRef!:ElementRef;

//     sleep(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


   onEnterPressed(command:string){
     this.inputElementRef.nativeElement.value="";
    type CommandKey = keyof typeof this.commands;
    let refineCommand=command as CommandKey;
    if(this.commands[refineCommand]){
        const outputs:string[]=this.commands[refineCommand as CommandKey].output;
        this.responses.push("$ "+refineCommand);
        for(let i=0 ; i<outputs.length ; i++){
              // this.responses.push(output);
              // await this.sleep(2000);
              setTimeout(()=>{
                  console.log(`Pushed data: ${outputs[i]} Time taken ${performance.now()-this.start} ms`);
                  this.responses.push(outputs[i]);
              },1000*(i*2));
          
        }
        

    }
    else{
        this.responses.push("cmd not found"+refineCommand);
    }
    
  }


  commands:Record<string, Command>={
  "ng create": {
    command: "ng create <project-name>",
    aliases: ["ng new"],
    output: [
      "✔ Would you like to add Angular routing? (y/N)",
      "✔ Which stylesheet format would you like to use?",
      "CREATE src/main.ts",
      "CREATE src/app/app.component.ts",
      "✔ Packages installed successfully."
    ]
  },

  "ng new": {
    command: "ng create <project-name>",
    aliases: ["ng create"],
    output: [
      "✔ Would you like to add Angular routing? (y/N)",
      "✔ Which stylesheet format would you like to use?",
      "CREATE src/main.ts",
      "CREATE src/app/app.component.ts",
      "✔ Packages installed successfully."
    ]
  },

  "ng serve": {
    command: "ng serve",
    aliases: ["ng s"],
    output: [
      "✔ Browser application bundle generation complete.",
      "✔ Compiled successfully.",
      "Local: http://localhost:4200/",
      "Watching for file changes..."
    ]
  },

  "ng s": {
    command: "ng serve",
    aliases: ["ng serve"],
    output: [
      "✔ Browser application bundle generation complete.",
      "✔ Compiled successfully.",
      "Local: http://localhost:4200/",
      "Watching for file changes..."
    ]
  },

  "ng generate component": {
    command: "ng generate component <name>",
    aliases: ["ng g c"],
    output: [
      "CREATE src/app/<name>/<name>.component.ts",
      "CREATE src/app/<name>/<name>.component.html",
      "CREATE src/app/<name>/<name>.component.css",
      "UPDATE src/app/app.module.ts"
    ]
  },

  "ng g c": {
    command: "ng generate component <name>",
    aliases: ["ng generate component"],
    output: [
      "CREATE src/app/<name>/<name>.component.ts",
      "CREATE src/app/<name>/<name>.component.html",
      "CREATE src/app/<name>/<name>.component.css",
      "UPDATE src/app/app.module.ts"
    ]
  }
}

}
