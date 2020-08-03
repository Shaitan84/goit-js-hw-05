'use strict'

class StringBuilder {
    constructor(_value){
        this.value = _value;
        console.log(this.value);
    }

      append(str) {
        this.value = this.value + str;
      }
    
      prepend(str) {
        this.value = str + this.value;
      }
    
      pad(str) {
        this.value = str + this.value;
        this.value = this.value + str;
      }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='