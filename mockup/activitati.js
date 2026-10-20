
const activitati = [
  {
    id: 1,
    name: "Evening skincare",
    completed: false,
    priority: "Medium"
  },
  {
    id: 2,
    name: "Take daily vitamins",
    completed: true,
    priority: "High"
  },
  {
    id: 3,
    name: "30-minute workout",
    completed: false,
    priority: "Low"
  }
];

const PRIORITATI = ["Low", "Medium", "High"];

function listeazaNume(lista) {
  return lista.map((activitate) => activitate.name);
}

function numaraActive(lista) {
  return lista.filter((activitate) => !activitate.completed).length;
}

function cautaDupaNume(lista, text) {
  return lista.filter((activitate) =>
    activitate.name.toLowerCase().includes(text.toLowerCase())
  );
}

function nextId(lista) {
  return lista.reduce((max, activitate) => Math.max(max, activitate.id), 0) + 1;
}

function adaugaActivitate(lista, name, priority = "Medium") {
  const numeCurat = name.trim();

  if (numeCurat === "") {
    console.log("Eroare: numele activității nu poate fi gol.");
    return lista;
  }

  if (!PRIORITATI.includes(priority)) {
    console.log("Eroare: prioritate invalidă.");
    return lista;
  }

  const activitateNoua = {
    id: nextId(lista),
    name: numeCurat,
    completed: false,
    priority: priority
  };

  return [...lista, activitateNoua];
}

function comutaFinalizare(lista, id) {
  return lista.map((activitate) =>
    activitate.id === id
      ? { ...activitate, completed: !activitate.completed }
      : activitate
  );
}

function stergeActivitate(lista, id) {
  return lista.filter((activitate) => activitate.id !== id);
}

console.log("--- CREATE ---");
let lista = adaugaActivitate(activitati, "Morning meditation", "Low");
console.log("Lista nouă:", lista.length, "activități");
console.log("Originalul a rămas cu:", activitati.length, "activități");

console.log("--- READ ---");
console.log("Numele activităților:", listeazaNume(activitati).join(", "));
console.log("Activități active:", numaraActive(activitati));
console.log("Căutare 'skincare':", listeazaNume(cautaDupaNume(activitati, "skincare")).join(", "));
console.log("Căutare 'SKINCARE':", listeazaNume(cautaDupaNume(activitati, "SKINCARE")).join(", "));

console.log("--- UPDATE ---");
lista = comutaFinalizare(lista, 1);
console.log("După bifarea id 1, active:", numaraActive(lista));

console.log("--- DELETE ---");
lista = stergeActivitate(lista, 3);
console.log("După ștergerea id 3:", listeazaNume(lista).join(", "));

console.log("--- VALIDARE ---");
adaugaActivitate(lista, "   ");
adaugaActivitate(lista, "Ceva", "Urgent");
