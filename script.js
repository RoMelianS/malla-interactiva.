const ramos = [
  { anio: 1, semestre: 1, nombre: "Anatomía", descripcion: "Estudio de la anatomía humana aplicada a la obstetricia" },
  { anio: 1, semestre: 1, nombre: "Salud Pública", descripcion: "Introducción al sistema de salud chileno" },
  { anio: 1, semestre: 2, nombre: "Fisiología", descripcion: "Funcionamiento del cuerpo humano" },
  { anio: 2, semestre: 1, nombre: "Embriología", descripcion: "Desarrollo embrionario y fetal" },
  { anio: 2, semestre: 2, nombre: "Atención prenatal", descripcion: "Control del embarazo normal" }
  // Puedes agregar más ramos aquí
];

const contenedor = document.getElementById("malla");

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = "ramo";
  div.innerHTML = `
    <strong>${ramo.nombre}</strong><br>
    <small>${ramo.anio}° año, Sem ${ramo.semestre}</small>
  `;
  div.title = ramo.descripcion;
  contenedor.appendChild(div);
});
