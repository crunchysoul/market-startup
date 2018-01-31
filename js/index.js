$(document).ready(function() {
  $("#pagepiling").pagepiling({
    anchors: [
      "homePage",
      "workPage",
      "locationPage",
      "aboutPage",
      "capaPage",
      "packagesPage",
      "contactPage",
    ],
    menu: "#menu",
    navigation: {
      textColor: "#ffffff",
      bulletsColor: "#ffffff",
      // hoverColor: "#ffffff",
      position: "right",
      tooltips: [
        "Home",
        "Work",
        "Location",
        "About",
        "Capabilities",
        "Packages",
        "Contact",
      ],
    },
  });
});
