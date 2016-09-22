module.exports = {
    "name": "Star Watcher",
    "type": "creature",
    "rarity": 0,
    "set": 1,
    "faction": 0,
    "tresholds": {"factionA":1, "colourless":2}, 
    "lore": "stuff",
    "attack": {"value":3, "modifiers":[{"operation": "subtract(getAdjacentUnits(this).length)"}, {"operation": "add(2)", "timer": 3, "countDown":"onAttack"}]},
    "countdown": 2,
    "health": {"value":3, "modifiers":[{"operation": "subtract(getAdjacentUnits(this).length)"}, {"operation": "add(2)", "timer": 3, "countDown":"onAttack"}]},
    "triggers":{},
    "armor": 0
}