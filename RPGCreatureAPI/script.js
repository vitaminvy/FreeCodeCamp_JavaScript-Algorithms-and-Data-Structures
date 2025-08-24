const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", () => {
  const queryRaw = searchInput.value.trim();
  const query = isNaN(queryRaw) ? queryRaw.toLowerCase() : queryRaw;
  fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${encodeURIComponent(query)}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      displayCreature(data);
    })
    .catch((err) => {
      alert("Creature not found");
    });
})
const displayCreature = (data) => {
  if (!data || !data.name) return alert("Creature not found");
  document.getElementById("creature-name").textContent = data.name.toUpperCase();
  document.getElementById("creature-id").textContent = `#${data.id}`;
  document.getElementById("weight").textContent = data.weight;
  document.getElementById("height").textContent = data.height;

  const getStat = (name) => {
    if (!data.stats) return "N/A";
    const stat = data.stats.find((s) => s.name === name);
    return stat ? stat.base_stat : "N/A";
  };

  document.getElementById("hp").textContent = `HP: ${getStat("hp")}`;
  document.getElementById("attack").textContent = `Attack: ${getStat("attack")}`;
  document.getElementById("defense").textContent = `Defense: ${getStat("defense")}`;
  document.getElementById("special-attack").textContent = `Special Attack: ${getStat("special-attack")}`;
  document.getElementById("special-defense").textContent = `Special Defense: ${getStat("special-defense")}`;
  document.getElementById("speed").textContent = `Speed: ${getStat("speed")}`;

  const typesContainer = document.getElementById("types");
  typesContainer.innerHTML = "";
  if (data.types) {
    data.types.forEach((t) => {
      const typeEl = document.createElement("p");
      typeEl.textContent = (t.type?.name || t.name || "").toUpperCase();
      typeEl.className = "type-badge";
      typesContainer.appendChild(typeEl);
    });
  }

  
};
