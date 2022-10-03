var pii = {
  Fname: "Keanu",
  Lname: "Reeves",
  mailingName: function () {
    return `My Name Is ${pii.Fname} ${pii.Lname}`;
  },

  ssn: function () {
    var ssn = 113 - 456 - 789;
    return ssn;
  },
};
console.log(pii.mailingName());
console.log(pii.ssn());
