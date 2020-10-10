function HitungVokal(input) {
    var vokal = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i] == 'a' || input[i] == 'A' || input[i] == 'i' || input[i] == 'I' || 
          input[i] == 'u' || input[i] == 'U' || input[i] == 'e' || input[i] == 'E' || 
          input[i] == 'o' || input[i] == 'O') {
        vokal = vokal + 1;
      }
    }
    return vokal;
  }
    
  var HV = HitungVokal("Programmer");
  console.log(HV);