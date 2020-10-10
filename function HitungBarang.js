function HitungBarang(Kualitas, Kuantiti) {
    var Total = 0;
    var Potongan = 0;
    
    if (Kualitas == "A") {
      for(var i=0; i<Kuantiti; i++) {
        if (Kuantiti > 10) {
          Total = Total + 3000;
          Potongan = Potongan + 500;
        }
        else Total = Total + 3000;
      }
    }
    
    if (Kualitas == "B") {
      for(var i=0; i<Kuantiti; i++) {
        if (Kuantiti > 5) {
          Total = Total + 3500;
          Potongan = Total/2;
        }
        else Total = Total + 3500;
      }
    }
    
      if (Kualitas == "C") {
      for(var i=0; i<Kuantiti; i++) {
          Total = Total + 5000;
          Potongan = 0;
      }
    }
    return ("Total: "+ Total + " Potongan: " + Potongan + " Total Yang Harus Dibayar: " + (Total - Potongan)); 
    }
  
    var HB = HitungBarang("C", 2);
    console.log(HB);