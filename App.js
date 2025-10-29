const schedules = {
  DEV1: [
    ["Lundi", "08:00 - 10:00", "HTML / CSS", "Mme. Zahra", "Salle 5"],
    ["Lundi", "10:15 - 12:15", "Algorithme", "M. Youssef", "Salle 2"],
    ["Mardi", "08:00 - 10:00", "JavaScript", "M. Karim", "Salle 7"],
    ["Mercredi", "14:00 - 16:00", "Base de données", "Mme. Amina", "Salle 3"],
    ["Jeudi", "10:00 - 12:00", "Communication", "Mme. Hanane", "Salle 1"]
  ],
  DEV2: [
    ["Lundi", "08:00 - 10:00", "PHP", "M. Yassine", "Salle 8"],
    ["Mardi", "10:00 - 12:00", "Laravel", "Mme. Samira", "Salle 9"],
    ["Mercredi", "08:00 - 10:00", "React JS", "M. Omar", "Salle 2"],
    ["Jeudi", "14:00 - 16:00", "UML", "M. Rachid", "Salle 4"],
    ["Vendredi", "09:00 - 11:00", "Soft Skills", "Mme. Wafae", "Salle 6"]
  ],
  DEV3: [
    ["Lundi", "09:00 - 11:00", "Python", "M. Adil", "Salle 4"],
    ["Mardi", "11:00 - 13:00", "Django", "Mme. Sara", "Salle 6"],
    ["Mercredi", "08:00 - 10:00", "API REST", "M. Rachid", "Salle 7"],
    ["Jeudi", "14:00 - 16:00", "Cloud", "Mme. Hajar", "Salle 2"],
    ["Vendredi", "10:00 - 12:00", "Projet Final", "M. Karim", "Salle 8"]
  ],
  GEST1: [
    ["Lundi", "09:00 - 11:00", "Comptabilité", "Mme. Fatima", "Salle 4"],
    ["Mardi", "13:00 - 15:00", "Gestion des stocks", "M. Ahmed", "Salle 1"],
    ["Mercredi", "08:00 - 10:00", "Excel avancé", "Mme. Rania", "Salle 6"],
    ["Jeudi", "10:00 - 12:00", "Marketing", "M. Idriss", "Salle 7"],
    ["Vendredi", "14:00 - 16:00", "Communication pro", "Mme. Sara", "Salle 5"]
  ],
  GEST2: [
    ["Lundi", "10:00 - 12:00", "Économie", "M. Omar", "Salle 2"],
    ["Mardi", "08:00 - 10:00", "Gestion RH", "Mme. Laila", "Salle 5"],
    ["Mercredi", "14:00 - 16:00", "Excel", "M. Amine", "Salle 3"],
    ["Jeudi", "09:00 - 11:00", "Projet de gestion", "Mme. Asmae", "Salle 1"]
  ],
  INFO1: [
    ["Lundi", "08:00 - 10:00", "Maintenance PC", "M. Hamid", "Salle 10"],
    ["Mardi", "10:00 - 12:00", "Réseaux", "Mme. Ilham", "Salle 9"],
    ["Mercredi", "13:00 - 15:00", "Sécurité", "M. Rida", "Salle 8"],
    ["Jeudi", "09:00 - 11:00", "Linux", "Mme. Sanaa", "Salle 7"],
    ["Vendredi", "10:00 - 12:00", "Projet Réseaux", "M. Anas", "Salle 6"]
  ]
};

function showSchedule(className) {
  const tbody = document.querySelector("#scheduleTable tbody");
  tbody.innerHTML = "";

  schedules[className].forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}
