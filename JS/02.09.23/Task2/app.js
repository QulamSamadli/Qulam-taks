// #task2
// Car constructor-u yaradin. Biz hemin constructor-u cagiranda onun modelini, istehsal ilini, sahibini verek. Ve elbette, masinin surmek, tormozlamaq kimi methodlari olmalidir ki, onlari da verin. Meselen, surmek methodunu cagirsam ekrana,  ali zapi markali masinina qaz verir.

function Car(model, tarix, sahib, suret) {
  (this.model = model),
    (this.tarix = tarix),
    (this.sahib = sahib),
    (this.suret = suret),
    (this.gazver = () => {
      this.suret += 10;
    //   console.log(this.suret + `km/h`);
      console.log(
        this.sahib +
          ` ` +
          this.model +
          ` masinina ` +
          this.suret +
          `km/h ile qaz verir`
      );
    });
  this.dayan = () => {
    this.suret -= 10;
    // console.log(this.suret + `km/h`);
    console.log(this.sahib + ` ` + this.model + ` masinina tormoz verir`);
    if (this.suret < 0) {
      this.suret = 0;
      console.log(this.model +` masini dayanib artiq`);
    }
  };
}

let car1 = new Car(`bmw`, 1996, `Qulam`, 0);

car1.gazver();
car1.dayan()


