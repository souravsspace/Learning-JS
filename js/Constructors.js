class railTicket {
  constructor(forName, trainNo) {
    this.forName = forName;
    this.trainNo = trainNo;
  }
  getTicket() {
    console.log(this.forName + ", " + "Ticket is booked" + "! " + this.trainNo);
  }
  rejectTicket() {
    console.log(
      this.forName + ", " + "Ticket is rejected" + "! " + this.trainNo
    );
  }
  // fillForm(forName, trainNo) {
  //   this.forName = forName;
  //   this.trainNo = trainNo;
  // }
}

let rahul = new railTicket('rahul', 226132);
let ukil = new railTicket('ukil', 378331);

// rahul.fillForm("rahul", 81232);
// ukil.fillForm("ukil", 37831);

rahul.getTicket();
ukil.getTicket();
ukil.rejectTicket();
rahul.rejectTicket();
rahul.getTicket();
