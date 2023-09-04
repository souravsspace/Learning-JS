class trainTicket {
  getTicket() {
    console.log(this.forName + ", " + "Ticket is booked" + "! " + this.trainNo);
  }
  rejectTicket() {
    console.log(this.forName + ", " + "Ticket is rejected" + "! " + this.trainNo);
  }
  fillForm(forName, trainNo) {
    this.forName = forName;
    this.trainNo = trainNo;
  }
}

let rahul = new trainTicket();
let ukil = new trainTicket();

rahul.fillForm("rahul", 81232);
ukil.fillForm("ukil", 37831);

rahul.getTicket();
ukil.getTicket();
ukil.rejectTicket();
rahul.rejectTicket();
